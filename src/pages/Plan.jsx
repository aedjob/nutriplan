import WeeklyCalendar from "../components/WeeklyCalendar";

function Plan() {
    return(
        <div className="min-h-screen bg-green-50 p-8 pt-14">
            <h1 className="text-4xl font-bold text-green-700 mb-8">This week's plan!</h1>
            <WeeklyCalendar />
        </div>
    )
}

export default Plan