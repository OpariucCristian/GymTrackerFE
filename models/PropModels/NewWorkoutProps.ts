import { GestureResponderEvent } from "react-native";
import { Workout } from "../workout-list-interface";
import { WorkoutExercise } from "../workout-exercise";

export default interface NewWorkoutProps {
  isNewWorkoutModalVisible: boolean | undefined;
  newWorkoutName: string | undefined;
  handleNewWorkoutNameChange: (newName: string) => void;
  handleSaveNewWorkout:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  newWorkout: Workout | null | undefined;
  handleUpdateExercise: (
    isExerciseCompleted: boolean,
    updatedExercise?: WorkoutExercise | undefined,
    updatedExerciseId?: string | undefined
  ) => void;
  handleExitNewWorkoutModal:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  handleAddExercise: (
    name: string,
    sets: number | undefined,
    weight: number | undefined,
    reps: number | undefined,
    workoutId: string
  ) => void;
  workoutUserTimerSeconds: number;
  workoutUserTimerKey: React.Key | null | undefined;
  workoutTimerSecondsStart: number | undefined;
  handleAddSecondsUserTimer: (seconds: number) => void;
}
