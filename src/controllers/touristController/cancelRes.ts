import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';
import { viewMyReservation } from './viewRes';

export async function cancelReservation() {
	const {data:reservation}= await axios.get(baseUrl + '/reservation/view');
    
	const formattedRes =reservation.map((c: any) => ({booking_status:c.booking_status, created_at:c.created_at, date: c.date,tourguide_id:c.tourguide_id}));
	console.table(formattedRes)
	const { q3 } = await prompt({
		type: 'list',
		name: 'q3',
		message: 'Are you sure you want to cancel the reservation?😞',
		choices: ['Yes', 'No'],
		filter: (val) => val.toLowerCase(),

	});
	if(q3==='yes'){	
		const { index } = await prompt({
			type: 'number',
			name: 'index',
			message: 'Enter index to delete ❌',
			filter: (val) => +val,
		   });

		   const user = reservation[index];
	

	await axios.delete(baseUrl + `/reservation/delete/${user.booking_id}`);
	console.log(`Your reservation for ${reservation[index]} has been cancelled successfully ✅`);}
	

}
