import { WorkoutExercise } from "./workout-exercise";

export interface Workout {
  workoutId: string;
  workoutExercises: WorkoutExercise[];
}
