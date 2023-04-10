import { WorkoutExercise } from "../workout-exercise";

export default interface ExerciseCardProps {
  name: string;
  handleAddExercise: (exercise: WorkoutExercise, workoutId: string) => void;
  workoutId: string;
  youtubeLink?: string;
}
