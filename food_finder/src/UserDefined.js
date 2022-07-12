import React from 'react';

function UserDefined({userdefined}) {
    return (
        <div className="UD-item">
            <h3>{userdefined.place}</h3>
        </div>
    );
}

export default UserDefined;