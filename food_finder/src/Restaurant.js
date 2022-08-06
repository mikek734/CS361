import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({restaurant}) {
    return (
        <div className="restaurant-item">
            <h3><Link to={{
                pathname: "/restaurantbio",
                state: {restaurant}
                }}>{restaurant.restaurantName}</Link></h3>
        </div>
    );
}
