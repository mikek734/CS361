import React from 'react';
import { Link } from 'react-router-dom';
import userDefined from '../data/userDefined';
import UserDefined from '../UserDefined';

function UserOptions() {

    // handleAdd = (e) => {
    //     e.preventDefault();

    // }

    return (
        <>
            <div className="header">
                <h1>User Options</h1>
                <Link className="home-link" to="/">HomePage</Link>
            </div>
            <p className="UD-label"> Select a Restaurant from the User defined list below</p>
            <p className="entry-label">Use the fields below to add or modify a user defined restaurant</p>
            <div>
                <form>
                    <fieldset className="user-entry">
                        <p>
                            <label>Restaurant:
                                <input type="text"/>
                            </label>
                        </p>
                        <p>
                            <label>Address:
                                <input type="text"/>
                            </label>
                        </p>
                        <p>
                            <label>Phone Number:
                                <input type="text"/>
                            </label>
                        </p>
                        <p>
                        <label>Website:
                            <input type="text"/>
                        </label>
                        </p>
                        <p>
                        <label>Type:
                            <input type="text"/>
                        </label>
                        </p>
                        <p>
                        <label>Hours:
                            <input type="text"/>
                        </label>
                        </p>
                    </fieldset>
                    <div className="buttons">
                        <button>Add Restaurant</button>
                        <button>Modify Restaurant</button>
                        <button>Delete Restaurant</button>
                    </div>
                </form>
            </div>
            <div className='UD-container'>
                <div id="optionsSlider" className="optionsSlider">
                    {userDefined.map((restaurant, i) => <UserDefined restaurant={restaurant} key={i} />)}
                </div>
            </div>

        </>
    )
}

export default UserOptions;