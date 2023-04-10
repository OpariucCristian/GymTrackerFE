import { GestureResponderEvent } from "react-native";
import { Workout } from "../workout-list";
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
  handleUpdateExercise: (updatedExercise?: WorkoutExercise | undefined) => void;
  handleExitNewWorkoutModal:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  handleAddExercise: (exercise: WorkoutExercise, workoutId: string) => void;
  workoutUserTimerSeconds: number;
  workoutUserTimerKey: React.Key | null | undefined;
  workoutTimerSecondsStart: number | undefined;
  handleAddSecondsUserTimer: (seconds: number) => void;
}
