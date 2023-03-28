import { WorkoutExercise } from "./workout-exercise";

export interface Workout {
  workoutId: string;
  workoutName?: string;
  workoutExercises: WorkoutExercise[];
}
