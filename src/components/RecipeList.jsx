import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import RecipeCard from "./RecipeCard";

function RecipeList() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function fetchRecipes() {
        const { data } = await supabase.from('recipes').select('*')
        setRecipes(data)
        }
        fetchRecipes()
    }, [])

    return(
        <div className="flex gap-4 flex-wrap">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe}/>
            ))}
        </div>
    )
}

export default RecipeList