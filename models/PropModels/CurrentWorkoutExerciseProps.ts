import { WorkoutExercise } from "../workout-exercise";

export default interface CurrentWorkoutExerciseProps {
  exercise: string;
  sets?: number | undefined;
  weight: number | undefined;
  reps: number | undefined;
  workoutId: string;
  exerciseId: string;
  handleUpdateExercise: (
    isExerciseCompleted: boolean,
    updatedExercise?: WorkoutExercise,
    updatedExerciseId?: string
  ) => void;
}
