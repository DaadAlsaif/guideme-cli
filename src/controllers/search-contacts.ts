import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function searchContacts() {
	const query = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search 🔤 ',
		},
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search 🔤 ',
		},
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search 🔤 ',
		},
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search 🔤 ',
		},
	]);

	const { data: contacts } = await axios.get(baseUrl + '/contacts', {
		params: query,
	});
	const formattedContacts = contacts.map((c: any) => ({ name: c.name, phone: c.phone }));
	console.table(formattedContacts);
}
