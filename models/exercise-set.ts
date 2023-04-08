export interface ExerciseSet {
  exerciseId: string;
  setId: string;
  workoutId: string;
  setNumber: number;
  weight: number;
  reps: number;
  isSetCompleted?: boolean;
}
