import  React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import restaurants from '../data/restaurants';
import Restaurant from '../Restaurant';
import categories from '../data/categories';
import { ScrollView } from 'react-native';
import Category from '../Category'

function HomePage() {
    return (
        <>
        <h1>Food Finder</h1>
            <div className="restaurants">
                <ScrollView horizontal>
                    {restaurants.map((restaurant, i) => <Restaurant restaurant={restaurant} key={i} />)}
                </ScrollView>
            </div>
            <button>Find Restaurants</button>
            <div>
                <ScrollView horizontal>
                    {categories.map((category, i) => <Category category={category} key={i} />)}
                </ScrollView>
            </div>
        <Link className="options-link" to="/useroptions">User Options</Link>
        <Link className="recipes-link" to="/recipes">Recipe Request</Link>
        </>
    )
}

export default HomePage;