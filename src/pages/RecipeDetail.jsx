import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "../supabase"

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const { data: recipeData } = await supabase.from('recipes').select('*').eq('id', id)
      setRecipe(recipeData[0])
    }
    fetchData()
  }, [])

  return (
    <div className="max-w-[750px] mx-auto pb-12 mt-16">
      
      {/* Hero image */}
      <div className="w-full h-64 bg-gray-200">
        {recipe?.image_url && <img src={recipe.image_url} className="w-full h-full object-cover" />}
      </div>

      <div className="px-4 pt-6">
        
        {/* Title and time */}
        <h1 className="text-2xl font-bold text-gray-900">{recipe?.name}</h1>
        <p className="text-sm text-gray-400 mt-1">PREP {recipe?.prep_time} MIN</p>

        {/* Macros */}
        <div className="flex gap-6 mt-4 py-4 border-t border-b border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Calories</p>
            <p className="text-sm font-semibold text-gray-800">{recipe?.calories}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Protein</p>
            <p className="text-sm font-semibold text-gray-800">{recipe?.protein}g</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Carbs</p>
            <p className="text-sm font-semibold text-gray-800">{recipe?.carbs}g</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Fat</p>
            <p className="text-sm font-semibold text-gray-800">{recipe?.fat}g</p>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Ingredients</h2>
          {recipe?.ingredients?.split('\n').map((ingredient, index) => (
            <div key={index} className="py-2 border-b border-gray-100">
              <p className="text-sm text-gray-700">{ingredient}</p>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Method</h2>
          {recipe?.instructions?.split('\n').map((step, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-sm text-gray-700 pt-1">{step}</p>
            </div>
          ))}
        </div>

        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="mt-8 w-full py-3 border border-gray-300 rounded-full text-sm text-gray-600"
        >
          ← Back
        </button>

      </div>
    </div>
  )
}

export default RecipeDetail