import { WorkoutExercise } from "../workout-exercise";

export default interface CurrentWorkoutExerciseProps {
  exercise: WorkoutExercise;
  handleUpdateExercise: (updatedExercise: WorkoutExercise) => void;
}
