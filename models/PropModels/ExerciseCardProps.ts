export default interface ExerciseCardProps {
  name: string;
  handleAddExercise: (
    name: string,
    sets: number | undefined,
    weight: number | undefined,
    reps: number | undefined,
    workoutId: string
  ) => void;
  workoutId: string;
  youtubeLink?: string;
}
