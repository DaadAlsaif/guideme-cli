import axios from 'axios';
import { baseUrl } from '..';

export async function getContacts() {
	const { data: contacts } = await axios.get(baseUrl + '/contacts');
	const formattedContacts = contacts.map((c: any) => ({ name: c.name, phone: c.phone }));
	console.table(formattedContacts);
}
