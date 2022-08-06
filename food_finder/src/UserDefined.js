import React from 'react';
import { Link } from 'react-router-dom';

function UserDefined({restaurant}) {
    return (
        <div className="UD-item">
            <h3><Link style={{textDecoration:'none'}} to={{
                pathname: "/restaurantbio",
                state: {restaurant}
                }}>{restaurant.restaurantName}</Link></h3>
        </div>
    );
}

export default UserDefined;