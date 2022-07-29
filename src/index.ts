import chalk from 'chalk';
import { q1 } from './questions/touristques/q1';
import { q2 } from './questions/touristques/q2';

import figlet from 'figlet';

export const baseUrl = 'http://0.0.0.0:3000';
export const globalData: any = {
	token: '',
};

async function start() {
	/// Display welcome message
	console.log(chalk.gray.red(figlet.textSync(`Welcome to GuideMe😍`)));
await q1();
	/// Q1/ Tell user about available options
	///1-Are you?Tourist Or TourGuide?
	///2-If(Tourist)
	///-Please Enter your email:
	///3-if(Tourist Exist?)
	///-Welcome <name> 
	///-Enter your password
	///4-If(new Tourist)
	///-Enter Your Email,Phone,password
	///-Let's complete Your profile Info.

	/// Q2/ Tell logged in user about available options
	/// 1- 'View all tour TourGuides',
	/// 2- 'Search for TourGuides by city that you want to visit',
	/// 3- 'Make a Reservation',
	/// 4- 'View your Reservation',
	/// 5-Cancel reservation
	/// 6- 'Update your profile info',
	/// 7-Cancel MemberShip.
	while (true) {
		await q2();
		console.log();
		console.log();
	}
}

start();
