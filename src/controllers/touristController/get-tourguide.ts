import axios from 'axios';
import { baseUrl } from '../..';

export async function getTourGuides() {
	const { data: TourGuides } = await axios.get(baseUrl + '/tourguide');
	const formattedTourguides = TourGuides.map((c: any) => ({ name: c.name ,experience:c.experience ,city: c.city,price:c.price}));
	console.table(formattedTourguides);

}



