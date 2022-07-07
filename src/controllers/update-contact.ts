import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function updateContact() {
	const { data: contacts } = await axios.get(baseUrl + '/contacts');
	const formattedContacts = contacts.map((c: any) => ({ name: c.name, phone: c.phone }));
	console.table(formattedContacts);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const contact = contacts[index];

	const newContact = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${contact.name})`,
			filter: (val) => {
				if (val.trim() === '') return contact.name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'phone',
			message: `Enter new phone or press enter to keep it as (${contact.phone})`,
			filter: (val) => {
				if (val.trim() === '') return contact.phone;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/contacts/${contact.id}`, newContact);

	console.log(`Contact for ${newContact.name}, has been updated ✅`);
}
