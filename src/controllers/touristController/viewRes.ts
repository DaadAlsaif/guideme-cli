import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../..";

export async function viewMyReservation() {
  
	 const {data:reservation}= await axios.get(baseUrl + '/reservation/view');
     
    
	 const formattedRes =reservation.map((c: any) => ({booking_status:c.booking_status, created_at:c.created_at, date: c.date,tourguide_id:c.tourguide_id,payment:c.payment}));
// const { data: reservation } =
    //reservation.map((c: any) => ({ booking_id: c.booking_id ,booking_status:c.booking_status ,payment: c.payment,date:c.date,tourist_id:c.tourist_id,tourguide_id:c.tourguide_id}));
     //reservation.map((elm: any) => ({reservation}));
	console.table(formattedRes);
}
