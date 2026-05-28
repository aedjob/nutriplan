function ScheduleBar({ onDaySelect, selectedDay }) {
  const days = [
    { label: "M", full: "Monday" },
    { label: "T", full: "Tuesday" },
    { label: "W", full: "Wednesday" },
    { label: "T", full: "Thursday" },
    { label: "F", full: "Friday" },
    { label: "S", full: "Saturday" },
    { label: "S", full: "Sunday" },
  ]

  return (
    <nav className="fixed top-12 left-0 right-0 bg-white border-b border-gray-100 shadow-sm z-40">
      <div className="w-full max-w-[750px] mx-auto flex justify-between items-center px-4 py-3">
        {days.map(day => (
          <button
            key={day.full}
            onClick={() => onDaySelect(day.full)}
            className={`w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center
              ${selectedDay === day.full 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-500 hover:text-gray-900'
              }`}
          >
            {day.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default ScheduleBar