import { useEffect, useState } from "react"
import { supabase } from "../supabase"

function DayPlan({day}) {
    const meals = ["Breakfast", "Lunch", "Snack", "Dinner"]

    const [recipes, setRecipes] = useState([])
    const [mealPlan, setMealPlan] = useState([])

    useEffect(() => {
        async function fetchData() {
            const { data: recipesData } = await supabase.from('recipes').select('*')
            const { data: mealPlanData } = await supabase.from('meal_plan').select('*')
            setRecipes(recipesData)
            setMealPlan(mealPlanData)
        }
        fetchData()},[])

    function getRecipe(meal) {
        const planDay = mealPlan.find(p => p.day === day)
        if(!planDay) return null
        const recipeId = planDay[meal.toLowerCase()]
        return (recipes.find(r => r.id === recipeId))
    }

    return(
        <div className="flex flex-col gap-4 mt-2">
                {meals.map(meal => {
                        const recipe = getRecipe(meal)
                        return(
                            <div key={meal} className="flex items-center gap-4 bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                                <div className="w-42 h-28 bg-gray-200 flex-shrink-0">
                                {recipe?.image_url && <img src={recipe.image_url} className="w-full h-full object-cover" />}
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-500">{meal.toUpperCase()}</p>
                                    <p className="text-m font-bold text-gray-800 mt-1">{recipe ? recipe.name : ''}</p>
                                </div>
                            </div>
                        )                    
                    })}
        </div>
    )
}

export default DayPlan