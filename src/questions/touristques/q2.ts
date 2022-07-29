import { prompt } from 'inquirer';
import { addReview } from '../../controllers/touristController/add_review';
import { cancelReservation } from '../../controllers/touristController/cancelRes';
import { deleteAccount } from '../../controllers/touristController/delete-account';
import { getTourGuides } from '../../controllers/touristController/get-tourguide';
import { createResevation } from '../../controllers/touristController/makeReservation';
import { searchTourGuide } from '../../controllers/touristController/searchfourGuide';
import { updateTouristInfo } from '../../controllers/touristController/update-tourists';
import { viewAndUpdate } from '../../controllers/touristController/viewProfile';
import { viewMyReservation } from '../../controllers/touristController/viewRes';

export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1-View all tour TourGuides',
			'2- Search for TourGuides by city that you want to visit',
			'3- Make a Reservation',
			'4- View your Reservation ',
			'5- Cancel reservation 🔍',
			'6- View&Update Tourists Info ',
			'7- Update your info ',
			'8- Delete Account',
			'9- add review'
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getTourGuides();
			break;

		case 2:
			await searchTourGuide();
			break;


		case 3:
			await createResevation();
			break;
	

		case 4:
			await viewMyReservation();
		

			break;
			


		case 5:
			await cancelReservation();
			break;

		case 6:
			await updateTouristInfo();
			break;
		case 7:
		   await viewAndUpdate();
		   break;	
		   case 8:
			   await deleteAccount();
			   break;
			   case 9:
				   await addReview();
				   break;
		case 10:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}
}
