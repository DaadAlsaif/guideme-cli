import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl, globalData } from "../..";
import { q2 } from "../../questions/touristques/q2";

export async function createResevation() {
	try{
	const { data: tourguide } = await axios.get(baseUrl + '/tourguide');
	const formattedTourGuide = tourguide.map((c: any) => ({name:c.name,price:c.price,experience:c.experience,languages:c.languages,city:c.city}));
	console.table(formattedTourGuide);
	const {tourguide_id}= await prompt(	{
		type: 'number',
		name: 'tourguide_id',
		message: 'Enter index of tour guide to choose🐬',
		filter:(val)=>+val
	
},)
const index=tourguide[tourguide_id];
	const {date} = await prompt(
		{
			type: 'input',
			name: 'date',
			message: 'Enter the date  ',

		},)
		const {payment} = await prompt(	{
			type: 'list',
			name: 'payment',
			message: 'choose your payment method ',
			choices: ['cash', 'card','voucher'],
			filter: (val) => val.toLowerCase()
		},)

	
		 await axios.post(baseUrl + '/tourist/create/reservation', 
		 {	
			tourguide_id:index.tourguide_id,
			date:date,
			payment:payment,	
		 },
		 {
		 headers:{
			 token:globalData.token,
		 }
		});
		console.log('You hava reserved successfully ');
    const { i } = await prompt({
        type: 'number',
        name: 'i',
        message: 'Enter 0 to back or 1 to exit',
    }); 
    if(i === 0){
     await q2()
    } else{
        process.exit(0);
    }
    }catch (err: any) {
        console.log(err?.response?.data);
        process.exit(0);
}}
		//from index file
		// export const globalData: any = {
		// 	token: '',
		// };
// }catch (err: any) {
// 	console.log(err?.response?.data);
// 	process.exit(0);
// }




	
// }