import  React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../Restaurant';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


function HomePage() {

    const [restList, setRestList] = useState([]);

    const slideRight = () => {
        let slider = document.getElementById('restSlider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const slideLeft = () => {
        let slider = document.getElementById('restSlider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    
    const findRest = async () => {
        const data = [{"id":514527,"restaurantName":"Bauder Pharmacy","address":"3802 Ingersoll Ave","zipCode":"50312-3487","phone":"+1 515-255-1124","website":"http://bauderpharmacy.com/","email":"","latitude":"41.58615","longitude":"-93.66839","stateName":"IA","cityName":"Des Moines","hoursInterval":"Sun (10:30 AM - 1:00 PM) | Mon - Fri (9:00 AM - 5:00 PM) | Sat (9:30 AM - 2:00 PM)","cuisineType":"American"},
{"id":17665353,"restaurantName":"Motley School Tavern","address":"1903 Beaver Ave","zipCode":"50310-3953","phone":"+1 515-279-0075","website":"http://motleyschooltavern.com","email":"motleyschooltavern@gmail.com","latitude":"41.61153","longitude":"-93.67264","stateName":"IA","cityName":"Des Moines","hoursInterval":"Sun (9:00 AM - 9:00 PM) | Tue - Thu (9:00 AM - 9:00 PM) | Fri - Sat (9:00 AM - 10:00 PM)","cuisineType":"American"},
{"id":415318,"restaurantName":"Estrada's","address":"3029 Merle Hay Rd","zipCode":"50310-1234","phone":"+1 515-334-5097","website":"","email":"","latitude":"41.62325","longitude":"-93.69732","stateName":"IA","cityName":"Des Moines","hoursInterval":"","cuisineType":"Pizza"},
{"id":12515107,"restaurantName":"Hy-Vee Market Grille","address":"420 Court Ave","zipCode":"50309-2237","phone":"+1 515-697-0360","website":"https://www.hy-veemarketgrille.com/","email":"","latitude":"41.58459","longitude":"-93.62214","stateName":"IA","cityName":"Des Moines","hoursInterval":"Sun - Thu (6:00 AM - 10:00 PM) | Fri - Sat (6:00 AM - 11:00 PM)","cuisineType":"American,Bar,Pub"},
{"id":2530430,"restaurantName":"Open Sesame","address":"313 E Locust St","zipCode":"50309-1806","phone":"+1 515-288-3151","website":"http://opensesamedesmoines.com","email":"","latitude":"41.58929","longitude":"-93.613106","stateName":"IA","cityName":"Des Moines","hoursInterval":"Sun (12:00 PM - 4:00 PM) | Mon - Fri (11:00 AM - 2:30 PM) | Mon - Sat (5:00 PM - 2:00 AM) | Sat (8:30 AM - 2:30 PM)","cuisineType":"Mediterranean"},
{"id":15814380,"restaurantName":"McDonald's","address":"4825 Merle Hay Rd","zipCode":"50322","phone":"+1 515-276-1968","website":"https://www.mcdonalds.com/us/en-us/location/ia/des-moines/4825-merle-hay-rd/5631.html","email":"","latitude":"41.648098","longitude":"-93.69669","stateName":"IA","cityName":"Des Moines","hoursInterval":"Sun (7:00 AM - 11:00 PM) | Mon - Sat (6:00 AM - 11:00 PM)","cuisineType":"American"},
{"id":4784440,"restaurantName":"Donut Hut des Moines","address":"4941 Douglas Ave","zipCode":"50310-2737","phone":"+1 515-331-4205","website":"http://donuthutdsm.com/","email":"donuthutia@gmail.com","latitude":"41.62971","longitude":"-93.68745","stateName":"IA","cityName":"Des Moines","hoursInterval":"Tue - Fri (5:00 AM - 4:30 PM) | Sat - Sun (5:00 AM - 2:00 PM)","cuisineType":"American"},
{"id":16821376,"restaurantName":"Panka Peruvian Restaurant","address":"2708 Ingersoll Ave Suite 200","zipCode":"50312-5242","phone":"+1 515-244-1430","website":"http://pankadsm.com","email":"","latitude":"41.58529","longitude":"-93.65342","stateName":"IA","cityName":"Des Moines","hoursInterval":"Sun (12:00 PM - 5:00 PM) | Tue - Thu (5:00 PM - 9:00 PM) | Tue - Sat (11:00 AM - 2:00 PM) | Fri - Sat (5:00 PM - 10:00 PM)","cuisineType":"Latin"},
{"id":5545023,"restaurantName":"Shorty's","address":"208 Court Ave","zipCode":"50309-2208","phone":"+1 515-282-3663","website":"http://shortyssomewhatfancybar.com","email":"","latitude":"41.58515","longitude":"-93.61954","stateName":"IA","cityName":"Des Moines","hoursInterval":"","cuisineType":"American"},
{"id":9745671,"restaurantName":"Gringo's-Tastespuds","address":"555 Walnut St","zipCode":"50309-4116","phone":"+1 515-244-4200","website":"","email":"","latitude":"41.58631","longitude":"-93.6241","stateName":"IA","cityName":"Des Moines","hoursInterval":"","cuisineType":"Mexican"}]

        // const url = 'http://localhost:9000/locator?state=IA&city=Des Moines&pageNumber=1'
        // const res = await fetch(url)
        // const data = await res.json()
        setRestList(data)
    };

    return (
        <>
        <h1>Food Finder</h1>
            <button onClick={findRest}>Find Restaurants</button>
            <div className='sliderContainer'>
                <MdChevronLeft onClick={slideLeft} size={100}/>
                <div id="restSlider" className="restSlider">
                    {restList.map((restaurant) => <Restaurant restaurant={restaurant} key={restaurant.id}/>)}
                </div>
                <MdChevronRight onClick={slideRight} size={100}/>
            </div>
        <Link className="home-options-link" to="/useroptions">User Options</Link>
        </>
    )
}

export default HomePage;