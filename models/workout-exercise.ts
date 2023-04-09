import { ExerciseSet } from "./exercise-set";

export interface WorkoutExercise {
  exercise: string;
  sets: ExerciseSet[];
  exerciseId: string;
  workoutId: string;
  isExerciseCompleted?: boolean;
}
