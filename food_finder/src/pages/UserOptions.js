import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../userRestForm';

function UserOptions() {

    const [userRest, setUserRest] = useState([
        {id: 1, restaurantName: 'Chicken Heat', address: '1101 Army Post Road, Des Moines IA 50315', phone: '515-318-3715', website: 'https://chickenheat.com/', cuisineType: 'American', hoursInterval:'Sun-Mon(Closed)|Tues-Sat(11AM-8:30PM)'},
        {id: 2, restaurantName: "El Guapo Taco", address: '8950 University Ave, West Des Moines, IA 50266', phone: '515-216-2198', website: 'http://www.elguaposiowa.com/', cuisineType: 'Mexican', hoursInterval:'Sat(11Am-2AM)|Sun(11AM-9PM)|Mon(Closed)|Tues-Fri(3PM-10PM'},
        {id: 3, restaurantName: '2nd St Sandwhich', address: '', phone: '515-8675-309', website: '', cuisineType: 'American', hoursInterval:'Sat-Sun(Closed)|Mon-Fri(8AM-10PM)'},
        {id: 4, restaurantName: "McDonald's", address: 'Multiple Locations', phone: '', website: 'https://www.mcdonalds.com/us/en-us.html', cuisineType: 'Fast-Food', hoursInterval:'Sun-Sat(6AM-11PM)'},
        {id: 5, restaurantName: "P.F. Chang's", address: '110 S Jordan Creek Pkwy, West Des Moines, IA 50266', phone: '515-457-7772', website: 'https://www.pfchangs.com/', cuisineType: 'Chinese', hoursInterval:'Sun-Sat(11AM-10PM)'}
    ]);

    const addUserRest = (userForm) => {
        setUserRest([...userRest, userForm]);
    };
    
    const removeRest = (id) => {
        setUserRest(current =>
            current.filter(restaurant => {
                return restaurant.id !== id;
            }),
            );
    };

    return (
        <>
            <div className="header">
                <h1>User Options</h1>
                <Link className="home-link" to="/">HomePage</Link>
            </div>
            <p className="UD-label"> Select a Restaurant from the User defined list below</p>
            <p className="entry-label">Use the fields below to add or modify a user defined restaurant</p>
            <div>
                <UserForm addUserRest={addUserRest}/>
            </div>
            <div className='UD-container'>
                <div id="optionsSlider" className="optionsSlider">
                    {userRest.map((restaurant) => (
                        <div key={restaurant.id}>
                            <p>{restaurant.restaurantName}</p>
                            <button>Modify Restaurant</button>
                            <button onClick={() => removeRest(restaurant.id)}>Delete Restaurant</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default UserOptions;