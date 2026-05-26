import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
                <Link to="/plan" className="font-bold text-lg tracking-tight">NUTRIPLAN</Link>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">☰</button>
            </nav>

              {menuOpen && (
                    <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl p-6 flex flex-col gap-6">
                    <button onClick={() => setMenuOpen(false)} className="self-end text-gray-500 text-xl">✕</button>
                    <Link to="/plan" onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg">Planner</Link>
                    <Link to="/recipes" onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg">Recipes</Link>
                    <Link to="/shopping" onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg">Shopping List</Link>
                    <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-gray-800 text-lg">Profile</Link>
                    </div>
                )}            
        </>
    )

}

export default Navbar