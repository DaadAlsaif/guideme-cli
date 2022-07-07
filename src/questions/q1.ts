import { prompt } from 'inquirer';

export async function q1() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Please login or quit 🤬!',
		choices: ['Login', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log('elly ba3naa 5esar dl3na 👊');
		process.exit(0);
	}

	const { username, password } = await prompt([
		{
			type: 'input',
			name: 'username',
			message: 'Enter your username 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);

	if (username !== 'ahlam' || password !== 'gg') {
		console.log('Wrong username & password, bye!');
		process.exit(0);
	}
}
