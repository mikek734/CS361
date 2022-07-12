import React from 'react';
import { Link } from 'react-router-dom';
import userDefined from '../data/userDefined';
import UserDefined from '../UserDefined';
import { ScrollView } from 'react-native';

function UserOptions() {
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
                            <label>Name:
                                <input type="text"/>
                            </label>
                        </p>
                        <p>
                            <label>Location:
                                <input type="text"/>
                            </label>
                        </p>
                        <p>
                            <label>Category:
                                <input type="text"/>
                            </label>
                        </p>
                        <label>Other:
                            <input type="text"/>
                        </label>
                        
                    </fieldset>
                    <div className="userdefined">
                        <ScrollView>
                            {userDefined.map((userdefined, i) => <UserDefined userdefined={userdefined} key={i} />)}
                        </ScrollView>
                    </div>
                    <div className="buttons">
                        <button>Add Restaurant</button>
                        <button>Modify Restaurant</button>
                        <button>Delete Restaurant</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default UserOptions;