import { prompt } from 'inquirer';
import { createContact } from '../controllers/create-contact';
import { deleteContact } from '../controllers/delete-contact';
import { getContacts } from '../controllers/get-contacts';
import { searchContacts } from '../controllers/search-contacts';
import { updateContact } from '../controllers/update-contact';

export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- View contacts 🙉',
			'2- Add new contact 🐊',
			'3- Update contact 🐬',
			'4- Delete contact ❌',
			'5- Search contact by name 🔍',
			'6- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getContacts();
			break;

		case 2:
			await createContact();
			break;

		case 3:
			await updateContact();
			break;

		case 4:
			await deleteContact();
			break;

		case 5:
			await searchContacts();
			break;

		case 6:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}
}
