import { WorkoutExercise } from "../workout-exercise";

export default interface CurrentWorkoutExerciseProps {
  exercise: WorkoutExercise;
  handleUpdateExercise: (
    isExerciseCompleted: boolean,
    updatedExercise?: WorkoutExercise,
    updatedExerciseId?: string
  ) => void;
}
