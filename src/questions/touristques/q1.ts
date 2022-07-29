import axios from 'axios';
import { prompt } from 'inquirer';
import { userInfo } from 'os';
import { baseUrl, globalData } from '../..';
// import { baseUrl, globalData } from '../..';
import { q1Guide } from '../tourGuidequestion/q1Guide';
import { q2 } from './q2';
let token='';

export async function q1() {
	try{
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Are You Tourist or Tour Guide?😍',
		choices: ['Tourist', 'Tour Guide','Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log('Byeeee👊');
		process.exit(0);
	}
if(q1Answer==='tourist'){
	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);


		const userLogin = await axios.post(baseUrl + '/tourist/login', {
			email,
			password,
		},);
		if(userLogin.data){
			const newToken = userLogin.data.token;
		globalData.token = newToken;
		const loginType=userLogin.data.type
		if(loginType === 'SignUp'||loginType==='SignIn'){
			await q2();
			while (true) {
				await q2();
				console.log();
				console.log();
			}

		}
	}else{
		console.log('wrong password');	
	process.exit(0);
	}


		
		// console.log('Token:',globalData.token)
	} 
}catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}

	// await q2();
	// while (true) {
	// 	await q2();
	// 	console.log();
	// 	console.log();
	// }

// }else {

// 	await q1Guide();


// }


