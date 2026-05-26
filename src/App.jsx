import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Plan from './pages/Plan'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />      
      </Routes>
    </>
      )
}

export default App