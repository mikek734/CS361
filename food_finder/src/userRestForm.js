import { useState } from 'react';

export default function UserForm({addUserRest}) {

    const [userForm, setUserForm] = useState({
        id: "",
        restaurantName: "",
        address: "",
        phone: "",
        website: "",
        cuisineType: "",
        hoursInterval: ""
    });

    const handleChange = (e) => {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    };

    const handleAdd = (e) => {
        e.preventDefault();
        addUserRest(userForm);
        setUserForm({ id:"", restaurantName:"", address:"", phone:"", website:"", cuisineType:"", hoursInterval:"" });
    };

    return(
        <div className="user-entry">
            <form onSubmit={handleAdd}>
                <p>
                    <label>id:
                        <input 
                        type="text"
                        name="id"
                        value={userForm.id}
                        onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>Restaurant:
                        <input 
                        type="text"
                        name="restaurantName"
                        value={userForm.restaurantName}
                        onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>Address:
                        <input 
                        type="text"
                        name="address"
                        value={userForm.address}
                        onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>Phone Number:
                        <input 
                        type="text"
                        name="phone"
                        value={userForm.phone}
                        onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                <label>Website:
                    <input 
                    type="text"
                    name="website"
                    value={userForm.website}
                    onChange={handleChange}
                    />
                </label>
                </p>
                <p>
                <label>Type:
                    <input 
                    type="text"
                    name="cuisineType"
                    value={userForm.cuisineType}
                    onChange={handleChange}
                    />
                </label>
                </p>
                <p>
                <label>Hours:
                    <input 
                    type="text"
                    name="hoursInterval"
                    value={userForm.hoursInterval}
                    onChange={handleChange}
                    />
                </label>
                </p>
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )
}