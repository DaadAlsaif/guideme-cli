import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../..";


export async function getMyInfo(){
	const { data: tourguides } = await axios.get(baseUrl + '/tourguide');
	const formattedTourGuide = tourguides.map((c: any) => ({name:c.name,price:c.price,experience:c.experience,languages:c.languages,city:c.city}));
	console.table(formattedTourGuide);
    const {tourguide_id} = await prompt([
	
		{
			type: 'input',
			name: 'tourguide_id',
			message: 'Enter Your Your 🆔 :',
		}
// .map((c: any) => ({ name:c.name, phone: c.phone,country:c.country}));
	]);
const { data: tourguide } = await axios.get(baseUrl + `/tourguide/${tourguide_id}`);
const upGuide = tourguide
console.table(upGuide);

}
