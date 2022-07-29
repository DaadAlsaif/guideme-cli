import { prompt } from "inquirer";
import { q2Guide } from "./q2Guide";


export async function q1Guide() {
	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 😍 ',
			filter: (val) => val.toLowerCase(),
		},
		
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);
while(true){
     await q2Guide();
    }
   
}
