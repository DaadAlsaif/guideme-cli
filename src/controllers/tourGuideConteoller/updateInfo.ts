import axios from "axios";
import { prompt } from "inquirer";
import { up } from "inquirer/lib/utils/readline";
import { baseUrl } from "../..";

export async function viewAndUpdateTourGuide() {
    const { data: tourguides } = await axios.get(baseUrl + '/tourguide');
	const formattedTourGuide = tourguides.map((c: any) => ({name:c.name,price:c.price,experience:c.experience,languages:c.languages,city:c.city}));
	console.table(formattedTourGuide);
    const { index } = await prompt({
        type: 'number',
        name: 'index',
        message: 'Enter index to update 🐬',
        filter: (val) => +val,
    });
    const user = tourguides[index];

    const updateGuide = await prompt([
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
            message: `Enter new the city or press enter to keep it as (${user.city})`,
            filter: (val) => {
                if (val.trim() === '') return user.country;
                return val;
            },
        },
    ]);
try{
    await axios.patch(baseUrl + `/tourguide/${user.tourguide_id}`, updateGuide);
    

    console.log(`Info for ${updateGuide.name}, has been updated ✅`);
    
}   catch (err: any) {
    console.log(err?.response?.data);
    process.exit(0)
}}
