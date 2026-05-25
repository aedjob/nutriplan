function RecipeCard({ name, category, prepTime, calories, protein, carbs, fat }) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-64">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-green-600 uppercase tracking-wide">{category}</span>
          <span className="text-xs text-gray-400">{prepTime} min</span>
        </div>
        <h3 className="text-gray-800 font-semibold text-lg mb-3">{name}</h3>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{calories} kcal</span>
          <span>{protein}g protein</span>
          <span>{carbs}g carbs</span>
          <span>{fat}g fat</span>
        </div>
      </div>
    )
  }
  
  export default RecipeCard