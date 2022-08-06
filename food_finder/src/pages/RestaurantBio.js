import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function RestaurantBio() {
    
    let {state} = useLocation()

    return (
        <>
            <div className="header">
                <h1>Restaurant Bio</h1>
                <fieldset>
                <h3>{state.restaurant.restaurantName}</h3>
                <ul className='bioList'>
                    <li><label className='bioLabel'>Address:</label> {state.restaurant.address}, {state.restaurant.cityName}, {state.restaurant.stateName} {state.restaurant.zipCode}</li>
                    <li><label className='bioLabel'>Phone Number:</label> {state.restaurant.phone}</li>
                    <li><label className='bioLabel'>Website:</label> {state.restaurant.website}</li>
                    <li><label className='bioLabel'>Type:</label> {state.restaurant.cuisineType}</li>
                    <li><label className='bioLabel'>Hours:</label> {state.restaurant.hoursInterval}</li>
                </ul>
                </fieldset>
                <Link className="home-link" to="/">HomePage</Link>
            </div>
        </>
    )
};

export default RestaurantBio;