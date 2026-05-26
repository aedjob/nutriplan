function ScheduleBar({onDaySelect}) {
    
    return(
        <nav className="py-7 pt-14 border shadow-sm border border-gray-100">
            <button onClick={() => onDaySelect("Monday")}>M</button>
            <button onClick={() => onDaySelect("Tuesday")}>T</button>
            <button onClick={() => onDaySelect("Wednesday")}>W</button>
            <button onClick={() => onDaySelect("Thursday")}>T</button>
            <button onClick={() => onDaySelect("Friday")}>F</button>
            <button onClick={() => onDaySelect("Saturday")}>S</button>
            <button onClick={() => onDaySelect("Sunday")}>S</button>            
        </nav>
    )
}

export default ScheduleBar