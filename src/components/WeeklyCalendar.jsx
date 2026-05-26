import { useEffect, useState } from "react"
import { supabase } from "../supabase"

function WeeklyCalendar() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
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

    function getRecipe(day,meal) {
        const planDay = mealPlan.find(p => p.day === day)
        if(!planDay) return null
        const recipeId = planDay[meal.toLowerCase()]
        return (recipes.find(r => r.id === recipeId))
    }

    return(
        <div className="grid grid-cols-7 gap-4 mt-8">
            {days.map(day => (
                <div key={day} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                    <h2 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3">{day}</h2>
                    {meals.map(meal => {
                        const recipe = getRecipe(day, meal)
                        return(
                            <div key={meal} className="mb-2 p-2 bg-green-50 rounded-lg">
                                <p className="text-xs font-medium text-gray-500">{meal}</p>
                                <p className="text-xs text-gray-800 mt-1">{recipe ? recipe.name : ''}</p>
                            </div>
                        )                    
                    })}
                </div>
            ))}
        </div>
    )
}

export default WeeklyCalendar