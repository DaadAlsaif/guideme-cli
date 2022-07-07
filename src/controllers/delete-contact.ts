import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteContact() {
	const { data: contacts } = await axios.get(baseUrl + '/contacts');
	const formattedContacts = contacts.map((c: any) => ({ name: c.name, phone: c.phone }));
	console.table(formattedContacts);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const contact = contacts[index];
	await axios.delete(baseUrl + `/contacts/${contact.id}`);
	console.log(`Contact for ${contact.name} has been deleted ✅`);
}
