import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../..";

export async function viewAndUpdate() {
     const { data: tourists } = await axios.get(baseUrl + '/tourist');
    const upTourist = tourists
    console.table(upTourist);


    const { question5 } = await prompt({
        type: 'list',
        name: 'question5',
        message: 'update your profile? 🐬',
        choices:['Yes','No'],
        filter: (val) => val.toLowerCase(),

})
if(question5==='yes'){
        const updateTourist = await prompt([
            {
                type: 'input',
                name: 'email',
                message: `Enter new email or press enter to keep it as (${upTourist.email})`,
                filter: (val) => {
                    if (val.trim() === '') return upTourist.email;
                    return val;
                },
            },
            {
                type: 'input',
                name: 'name',
                message: `Enter new name or press enter to keep it as (${upTourist.name})`,
                filter: (val) => {
                    if (val.trim() === '') return upTourist.name;
                    return val;
                },
            },
            {
                type: 'input',
                name: 'password',
                message: `Enter a new password or press enter to keep it as (${upTourist.password})`,
                filter: (val) => {
                    if (val.trim() === '') return upTourist.password;
                    return val;
                },
            },
            
            {
                type: 'input',
                name: 'phone',
                message: `Enter new number or press enter to keep it as (${upTourist.phone})`,
                filter: (val) => {
                    if (val.trim() === '') return upTourist.phone;
                    return val;
                },
            },
            {
                type: 'input',
                name: 'country',
                message: `Enter new number or press enter to keep it as (${upTourist.country})`,
                filter: (val) => {
                    if (val.trim() === '') return upTourist.country;
                    return val;
                },
            },
        ]);
    
        await axios.patch(baseUrl + `/tourist/${upTourist.id}`, updateTourist);
    
        console.log(`Info for ${updateTourist.name}, has been updated ✅`);
    }


}
