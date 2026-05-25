import WeeklyCalendar from "./WeeklyCalendar"
import RecipeList from "./RecipeList"

function App() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Nutriplan</h1>
      <div className="flex gap-4 flex-wrap">
        <RecipeList />
      </div>
      <div><WeeklyCalendar /></div>
    </div>
  )
}

export default App