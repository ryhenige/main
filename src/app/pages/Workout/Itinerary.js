const Itinerary = {
  Monday: [
    {
      sequence: 0,
      name: 'Pull-ups',
      sets: 3,
      reps: ['Until Failure'],
      rest: 60
    },
    {
      sequence: 1,
      name: 'Dumbbell Bench Press',
      sets: 3,
      reps: [8, 12],
      rest: 60
    },
    {
      sequence: 2,
      name: 'Dumbbell Rows',
      sets: 3,
      reps: [8, 12],
      rep_quantifier: 'per arm',
      rest: 60
    },
    {
      sequence: 3,
      name: 'Dumbbell Shoulder Press',
      sets: 3,
      reps: [8, 12],
      rest: 60
    }
  ],
  Tuesday: [
    {
      sequence: 0,
      name: 'Dumbbell Squats',
      sets: 3,
      reps: [12, 15],
      rest: 60
    },
    {
      sequence: 1,
      name: 'Dumbbell Lunges',
      sets: 3,
      reps: [10, 12],
      rep_quantifier: 'per leg',
      rest: 60
    },
    {
      sequence: 2,
      name: 'Dumbbell Deadlifts',
      sets: 3,
      reps: [10, 12],
      rest: 60
    },
    {
      sequence: 3,
      name: 'Plank',
      sets: 3,
      reps: [30, 60],
      rep_quantifier: 'seconds',
      rest: 60
    }
  ],
  Wednesday: [
    {
      sequence: 0,
      name: 'Dumbbell Bicep Curls',
      sets: 3,
      reps: [10, 12],
      rest: 60
    },
    {
      sequence: 1,
      name: 'Dumbbell Tricep Extensions',
      sets: 3,
      reps: [10, 12],
      rest: 60
    },
    {
      sequence: 2,
      name: 'Dips',
      sets: 3,
      reps: ['Until Failure'],
      rest: 60
    },
    {
      sequence: 3,
      name: 'Dumbbell Lateral Raises',
      sets: 3,
      reps: [12, 15],
      rest: 60
    }
  ],
  Thursday: [
    {
      sequence: 0,
      name: 'Dumbbell Deadlift To Press',
      sets: 3,
      reps: [8, 10],
      rest: 60
    },
    {
      sequence: 1,
      name: 'Renegade Rows',
      sets: 3,
      reps: [8, 10],
      rep_quantifier: 'per arm',
      rest: 60
    },
    {
      sequence: 2,
      name: 'Dumbbell Bulgarian Split Squats',
      sets: 3,
      reps: [10],
      rep_quantifier: 'per leg',
      rest: 60
    },
    {
      sequence: 3,
      name: 'Dumbbell Flyes',
      sets: 3,
      reps: [10, 12],
      rest: 60
    }
  ],
  Friday: [
    {
      sequence: 0,
      name: 'Light Cardio',
      sets: 1,
      reps: [15],
      rep_quantifier: 'minutes',
      rest: 60
    },
    {
      sequence: 1,
      name: 'Stretching Routine',
      sets: 1,
      reps: [15],
      rep_quantifier: 'minutes',
      rest: 60
    },
    {
      sequence: 2,
      name: 'Planks',
      sets: 3,
      reps: [30, 60],
      rep_quantifier: 'seconds',
      rest: 60
    },
    {
      sequence: 3,
      name: 'Side Planks',
      sets: 2,
      reps: [30],
      rep_quantifier: 'per side',
      rest: 60
    },
    {
      sequence: 4,
      name: 'Russian Twists',
      sets: 3,
      reps: [15],
      rep_quantifier: 'per side',
      rest: 60
    },
    {
      sequence: 5,
      name: 'Single-leg Deadlifts',
      sets: 3,
      reps: [10],
      rep_quantifier: 'per leg',
      rest: 60
    }
  ]
}

export default Itinerary
