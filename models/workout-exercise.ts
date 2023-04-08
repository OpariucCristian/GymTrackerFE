import { ExerciseSet } from "./exercise-set";

export interface WorkoutExercise {
  exercise: string;
  sets: ExerciseSet[];
  // weight: number | undefined;
  // reps: number | undefined;
  exerciseId: string;
  workoutId: string;
  isExerciseCompleted?: boolean;
}
