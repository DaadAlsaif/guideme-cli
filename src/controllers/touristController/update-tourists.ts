import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

    export async function updateTouristInfo() {
        const { data: tourist } = await axios.get(baseUrl + '/tourist');
        const formattedTourist = tourist.map((c: any) => ({email:c.email, name:c.name, phone: c.phone,country:c.country}));
        console.table(formattedTourist);
        
    
        const { index } = await prompt({
            type: 'number',
            name: 'index',
            message: 'Enter index to update 🐬',
            filter: (val) => +val,
        });
        const user = tourist[index];
    
        const updateTourist = await prompt([
            {
                type: 'input',
                name: 'email',
                message: `Enter new email or press enter to keep it as (${user.email})`,
                filter: (val) => {
                    if (val.trim() === '') return user.email;
                    return val;
                },
            },
            {
                type: 'input',
                name: 'name',
                message: `Enter new name or press enter to keep it as (${user.name})`,
                filter: (val) => {
                    if (val.trim() === '') return user.name;
                    return val;
                },
            },
            {
                type: 'input',
                name: 'password',
                message: `Enter a new password or press enter to keep it as (${user.password})`,
                filter: (val) => {
                    if (val.trim() === '') return user.password;
                    return val;
                },
            },
            
            {
                type: 'input',
                name: 'phone',
                message: `Enter new number or press enter to keep it as (${user.phone})`,
                filter: (val) => {
                    if (val.trim() === '') return user.phone;
                    return val;
                },
            },
            {
                type: 'input',
                name: 'country',
                message: `Enter new the country or press enter to keep it as (${user.country})`,
                filter: (val) => {
                    if (val.trim() === '') return user.country;
                    return val;
                },
            },
        ]);
    try{
        await axios.patch(baseUrl + `/tourist/${user.tourist_id}`, updateTourist);
        
    
        console.log(`Info for ${updateTourist.name}, has been updated ✅`);
        
    }   catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0)
    }}