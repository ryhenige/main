import { useState } from 'react'
import Routine from './routine'
import { WeekSpinner, WeekDay, Arrows } from './components/StyledComponents'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export default function Workout() {
  const d = new Date()
  const [day, setDay] = useState(d.getDay())

  const handleDayChange = (offset) => {
   let newDay = day + offset
   if (newDay < 0) {
     newDay = 6
   } else if (newDay > 6) {
     newDay = 0
   }
   setDay(newDay)
  }

  return (
    <>
      <WeekSpinner>
        <Arrows align='right' onClick={() => handleDayChange(-1)}><FaChevronLeft size={16} /></Arrows>
        <WeekDay active>{weekdays[day].slice(0, 3)}.</WeekDay>
        <Arrows align='left' onClick={() => handleDayChange(1)}><FaChevronRight size={16} /></Arrows>
      </WeekSpinner>
      <div>
        {Routine[weekdays[day]]?.map((exercise, index) => (
          <div key={index}>
            <h3>{exercise.name}</h3>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps?.join(' - ')} {exercise.rep_quantifier}</p>
            <p>Rest: {exercise.rest} seconds</p>
          </div>
        ))}
      </div>
    </>
  )
}