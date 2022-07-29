import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl, globalData } from "../..";
import { q2 } from "../../questions/touristques/q2";

export async function addReview() {
    try{
    const { data: TourGuides } = await axios.get(baseUrl + '/tourguide');
	const formattedTourguides = TourGuides.map((c: any) => ({ name: c.name ,city: c.city,price:c.price}));
	console.table(formattedTourguides);
    const {tourguide_id}=await prompt({
        type:"input",
        name:'tourguide_id',
        message: 'Enter index of tour guide to choose🐬',
        filter:(val)=>+val
    });
    const index=TourGuides[tourguide_id]
    const {rate}= await prompt(
        {
            type: 'list',
            name: 'rate',
            message: 'Rate the tour guide',
            choices:['poor',
                'good',
                'veryGood',
                'excellent'],
                filter: (val) => val.toLowerCase(),
        },
        )
       
        await axios.post(baseUrl + '/reviews/create',
        
        {
            tourguide_id:index.tourguide_id,
            rate:rate,
        },
        {
            headers: {
                token:globalData.token,
            },
        }
    );
    console.log('review added for ');
    const { i } = await prompt({
        type: 'number',
        name: 'i',
        message: 'Enter 0 to back or 1 to exit',
    }); 
    if(i === 0){
     await q2()
    } else if(i === 1){
        process.exit(0);
    }
    }catch (err: any) {
        console.log(err?.response?.data);
        process.exit(0);
}}