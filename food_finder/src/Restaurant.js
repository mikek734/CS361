import React from 'react';

export default function Restaurant({restaurant}) {
    return (
        <div className="restaurant-item">
            <h3>{restaurant.restaurantName}</h3>
        </div>
    );
}
