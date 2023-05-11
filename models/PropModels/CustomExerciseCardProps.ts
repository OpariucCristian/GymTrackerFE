import { CustomExercise } from "../custom-exercise";

export default interface ExerciseCardProps {
  addCustomExercise: (exercise: CustomExercise) => Promise<void>;
}
