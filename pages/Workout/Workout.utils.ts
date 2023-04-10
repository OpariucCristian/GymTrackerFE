import AsyncStorage from "@react-native-async-storage/async-storage";
import { Workout } from "../../models/workout-list";

export const updateLocalStorageWorkoutList = async (
  workoutList: Workout[]
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(workoutList);
    await AsyncStorage.setItem("workoutList", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getWorkoutListFromLocalStorage = async (
  workoutList: Workout[]
): Promise<Workout[] | undefined> => {
  if (workoutList.length === 0) {
    try {
      const jsonValue = await AsyncStorage.getItem("workoutList");
      const savedWorkoutList = jsonValue != null ? JSON.parse(jsonValue) : [];
      return savedWorkoutList;
    } catch (e) {
      console.log(e);
    }
  }
};
