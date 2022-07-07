import { q2 } from './questions/q2';

export const baseUrl = 'http://0.0.0.0:8080';
export let token = '12394';

async function start() {
	/// Display welcome message
	console.log();
	console.log();
	console.log('Welcome to Red3lay, Dawerney tel8any 🌪');
	console.log();
	console.log();

	/// Q1/ Tell user about available options
	/// 1- Login
	/// 2- Quit
	// await q1();

	/// Q2/ Tell logged in user about available options
	/// 1- 'View contacts',
	/// 2- 'Add a contact',
	/// 3- 'Update contact',
	/// 4- 'Delete contact',
	/// 5- 'Search contact by name',
	while (true) {
		await q2();
		console.log();
		console.log();
	}
}

start();
