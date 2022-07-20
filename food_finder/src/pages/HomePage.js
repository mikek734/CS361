import  React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import restaurants from '../data/restaurants';
import Restaurant from '../Restaurant';
import categories from '../data/categories';
import { ScrollView } from 'react-native';
import Category from '../Category'

function HomePage() {
    const [restList, setRestList] = useState([])
    const findRest = async () => {
        const url = 'http://localhost:3000/?city=Des Moines&state=IA'
        const res = await fetch(url)
        const data = await res.json()
        setRestList(data)
    }
    return (
        <>
        <h1>Food Finder</h1>
            <div className="restaurants">
                <ScrollView horizontal>
                    {restList.map((restaurant, i) => <Restaurant restaurant={restaurant} key={i} />)}
                </ScrollView>
            </div>
            <button onClick= {findRest}>Find Restaurants</button>
            <div>
                <ScrollView horizontal>
                    {categories.map((category, i) => <Category category={category} key={i} />)}
                </ScrollView>
            </div>
        <Link className="options-link" to="/useroptions">User Options</Link>
        </>
    )
}

export default HomePage;