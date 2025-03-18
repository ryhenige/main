import { useState, useEffect } from 'react'
import Exercise from './Exercise'

export default function Routine({ routine }) {
  const [completedSets, setCompletedSets] = useState([])
  const [currentSet, setCurrentSet] = useState("0-0")

  useEffect(() => {
    setCompletedSets([])
    setCurrentSet("0-0")
  }, [routine])

  const handleRestComplete = (routineIndex, setIndex) => {
    const exerciseIndex = `${routineIndex}-${setIndex}`
    setCompletedSets((prev) => [...prev, exerciseIndex])

    let nextSetIndex
    if (setIndex + 1 < routine[routineIndex].sets) {
      nextSetIndex = `${routineIndex}-${setIndex + 1}`
    } else if (routine[routineIndex + 1]) {
      nextSetIndex = `${routineIndex + 1}-0`
    } else {
      nextSetIndex = null
    }

    setCurrentSet(nextSetIndex)
  }

  return (
    <>
      {routine?.map((exercise, routineIndex) => (
        [...Array(exercise.sets)].map((_, setIndex) => {
          const currentSetIndex = `${routineIndex}-${setIndex}`
          const previousSetIndex = `${routineIndex}-${setIndex - 1}`
          const firstSetIndex = "0-0"

          const previousExerciseSets = routineIndex > 0
            ? [...Array(routine[routineIndex - 1].sets)]
                .map((_, i) => `${routineIndex - 1}-${i}`)
            : []

          const allPreviousExerciseCompleted = previousExerciseSets.every(set => completedSets.includes(set))

          return (
            <Exercise 
              key={`${exercise.name}-${currentSetIndex}`}
              exercise={exercise} 
              index={setIndex}
              isLocked={
                currentSetIndex !== firstSetIndex &&
                !completedSets.includes(previousSetIndex) &&
                !(setIndex === 0 && allPreviousExerciseCompleted)
              }
              isActive={currentSet === currentSetIndex}
              onRestComplete={() => handleRestComplete(routineIndex, setIndex)}
            />
          )
        })
      ))}
    </>
  )
}
