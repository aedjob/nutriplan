import { useState } from "react";
import ScheduleBar from "../components/ScheduleBar";
import DayPlan from "../components/DayPlan";

function Plan() {
    const today = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const todayName = days[today.getDay()]
    const [day, setDay] = useState(todayName)

    return(
        <>
            <ScheduleBar onDaySelect={setDay} selectedDay={day}/>
            <div className="w-full max-w-[750px] mx-auto py-1 px-4 pt-24">
                <h1 className="text-lg text-center font-bold mt-4">- MEALS -</h1>
                <DayPlan day={day}/>
            </div>
        </>
    )
}

export default Plan