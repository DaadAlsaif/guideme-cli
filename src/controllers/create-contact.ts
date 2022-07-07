import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl, token } from '..';

export async function createContact() {
	const contactData = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter contact name 🔤 ',
		},
		{
			type: 'input',
			name: 'phone',
			message: 'Enter contact phone number 📱 ',
		},
	]);

	await axios.put(
		baseUrl + '/contacts',
		{
			id: v4(),
			...contactData,
		},
		{
			headers: {
				authorization: 'Bearer ' + token,
			},
		}
	);

	console.log(`Contact for ${contactData.name}, has been added ✅`);
}
