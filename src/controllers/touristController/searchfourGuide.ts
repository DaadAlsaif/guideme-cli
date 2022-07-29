import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function searchTourGuide() {
	const city = await prompt([
		{
			type: 'input',
			name: 'city',
			message: 'Enter a city to search 🔤 ',
		}

	]);

	const { data: tourguide } = await axios.get(baseUrl + '/tourguide/tourguides', {
		params:city,
	});
	const formattedTourguides = tourguide.map((c: any) => ({ name: c.name ,price:c.price}));
	console.table(formattedTourguides);

	const qs = await prompt([
		{
			type: 'number',
			name: 'qs',
			message: 'Enter a index to see the details 🔤 ',
		}
	]
		
		)
}
