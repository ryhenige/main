import { useState, useEffect } from 'react'
import { Text, CurrentExerciseContainer, ExerciseContainer, RestContainer, StyledCheckbox, Column } from './StyledComponents'

export default function Exercise({ exercise, index, isLocked, isActive, onRestComplete }) {
  const [completed, setCompleted] = useState(false)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (completed) {
      setTimer(exercise.rest)
    }else{
      setTimer(null)
    }
  }, [completed, exercise.rest])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            onRestComplete()
          }
          return prev > 0 ? prev - 1 : 0
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  return (
    <CurrentExerciseContainer isActive={isActive}>
      <ExerciseContainer 
        key={`${exercise.name}-${index}`}
        disabled={timer === 0}
        isLocked={isLocked}
      >
        <Column>
          <Text fontSize='20px' fontWeight='bold'>{exercise.name}</Text>
          <Text>Reps: {exercise.reps?.join(' - ')} {exercise.rep_quantifier}</Text>
        </Column>
        <Column>
          <StyledCheckbox 
            type="checkbox" 
            onChange={() => setCompleted(!completed)} 
            checked={completed}
            disabled={isLocked}
          />
        </Column>
      </ExerciseContainer>

      <RestContainer 
        key={`${exercise.name}-${index}-rest`}
        disabled={timer === 0}
        isLocked={isLocked}
      >
        <Text>Rest</Text>
        <div>
          <Text fontWeight='bold'>
            {timer !== null ? timer : exercise.rest} 
          </Text> 
          seconds
        </div>
      </RestContainer>
    </CurrentExerciseContainer>
  )
}
