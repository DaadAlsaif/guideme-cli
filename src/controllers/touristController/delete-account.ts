import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../..";

export async function deleteAccount() {
    try{
    const { data: tourist } = await axios.get(baseUrl + '/tourist');
    const formattedTourist = tourist.map((c: any) => ({email:c.email, name:c.name, phone: c.phone,country:c.country}));
    console.table(formattedTourist);
         const { index } = await prompt({
      type: 'number',
      name: 'index',
      message: 'Enter index to delete ❌',
      filter: (val) => +val,
     });
     const { qa} = await prompt({
        	type: 'list',
        	name: 'qa',
        	message: 'Are you sure you want to delete your account?😞',
        	choices: ['Yes', 'No'],
        	filter: (val) => val.toLowerCase(),
    
        });
        if(qa==='yes'){	
        
        	const {reason} = await prompt([
        		{
                
        		type: 'list',
        		name: 'reason',
                message: 'Cancellation Reason ❌:',
                choices:['Too expensive','Missing features I need','Did not meet my expectations','Other']
        		// message: 'Enter your booking🆔 to cancel:',
        	},
        ]);	
        if(reason=='Other'){
            const {other}=await prompt(
                {
                    type: 'input',
                    name: 'other',
                    message: 'Please write below',
                }
    
                )} ;
                const {qa}  =  await prompt([
             
                   { type: 'list',
                    name: 'qa',
                    message: 'Are you sure you want to delete your account?😞',
                    choices: ['Yes', 'No'],
                    filter: (val) => val.toLowerCase(),}
                ]);
                if(qa==='yes'){
     try{    
         const user = tourist[index];
     await axios.delete(baseUrl + `/tourist/delete/${user.tourist_id}`);
     console.log(`account has been deleted,hope to not see you again `);} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0)}
     
 
       }else{
        { console.log('Good decision🥳👏🏻')}
       }}}      catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0)}
     
	
    }