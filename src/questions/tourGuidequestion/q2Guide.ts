import { prompt } from "inquirer";
import { getMyInfo } from "../../controllers/tourGuideConteoller/getInfo";
import { viewAndUpdateTourGuide } from "../../controllers/tourGuideConteoller/updateInfo";
import { getTourGuides } from "../../controllers/touristController/get-tourguide";
import { viewAndUpdate } from "../../controllers/touristController/viewProfile";

export async function q2Guide() {
	const { q2guide } = await prompt({
		type: 'list',
		name: 'q2guide',
		message: 'Please choose an action 👀!',
		choices: [
			'1-View information',
			'2- Update your info ',
			'3- View my reservations',
			'4- Update reservation status ',
			'5- Cancel reservation 🔍',
			'6- Delete Account'
		],
		filter: (val) => +val[0],
	});

	switch (q2guide) {
		case 1:
			await getMyInfo();
			break;
        case 2:
			await viewAndUpdateTourGuide();
			break;
	
		default:
			break;
    }}
	// 	case 2:
	// 		await searchTourGuide();
	// 		break;
		

	// 	case 3:
	// 		await createResevation();
	// 		break;
		

	// 	case 4:
	// 		await viewMyReservation();
		

	// 		break;
			
		

	// 	case 5:
	// 		await cancelReservation();
	// 		break;

	// 	case 6:
	// 		await updateTouristInfo();
	// 		break;
	// 	case 7:
	// 	   await viewAndUpdate();
	// 	   break;	
	// 	   case 8:
	// 		   await deleteAccount();
	// 		   break;
	// 	case 9:
	// 		console.log('Byyyye 👊!');
	// 		process.exit(0);

	// 	default:
	// 		break;
	// }
