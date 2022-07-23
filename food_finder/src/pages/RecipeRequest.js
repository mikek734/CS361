import React, {useState} from "react";
import { Link } from 'react-router-dom';


function RecipeRequest() {
    const [recipeList, setRecipeList] = useState([])
    
    const findRecipe = async () => {
    };
    return (
        <>
        <h1>Recipes</h1>
        <form action='http://localhost:3000/' method="GET">
            <fieldset className="recipe-entry">
                <p>
                    <label>Tag:</label>
                    <input name="tag" type="text"/>
                </p>   
                <input type="submit" value="submit"></input>
            </fieldset>
        </form>
        <div>
            {recipeList.length < 0 && (
                <ul>
                    {recipeList.map(recipe => (
                        <li key={recipe.id}>{recipe.title}</li>
                    ))}
                </ul>    
            )}
        </div>
        <Link className="home-link" to="/">HomePage</Link>
        </>
    )
}

export default RecipeRequest;