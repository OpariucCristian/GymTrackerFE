export interface WorkoutExercise {
  exercise: string;
  sets: number | undefined;
  weight: number | undefined;
  reps: number | undefined;
  exerciseId: string;
  workoutId: string;
  isExerciseCompleted?: boolean;
}
