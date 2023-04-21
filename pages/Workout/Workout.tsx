import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import { Workout } from "../../models/workout-list";
import { generateUUID } from "../../utils/uuid";
import { Box, Button, NativeBaseProvider, Text } from "native-base";
import { getRandomWorkoutImage } from "../../assets/workout-backgrounds/Images";
import { WorkoutExercise } from "../../models/workout-exercise";
import { api } from "../../api/api";
import { theme } from "../../styles/theme";
import useToggle from "../../hooks/toogle-hook";
import NewWorkout from "./NewWorkout";
import styles from "./Workout.styles";
import PastWorkouts from "./PastWorkouts/PastWorkouts";
import {
  getWorkoutListFromLocalStorage,
  updateLocalStorageWorkoutList,
} from "./Workout.utils";
import * as Haptics from "expo-haptics";

function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const [newWorkout, setNewWorkout] = useState<Workout | null | undefined>();
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");

  const [workoutTimerSecondsStart, setWorkoutTimerSecondsStart] =
    useState<number>(0);
  const [workoutUserTimerSeconds, setWorkoutUserTimerSeconds] =
    useState<number>(0);
  const [workoutUserTimerKey, setWorkoutUserTimerKey] = useState<number>(0);

  const [isNewWorkoutModalVisible, _, setIsNewWorkoutModalVisible] =
    useToggle(false);

  const handleGetWorkoutListFromLocalStorage = async () => {
    const savedWorkoutList = await getWorkoutListFromLocalStorage(workoutList);
    if (savedWorkoutList) {
      setWorkoutList(savedWorkoutList);
    }
  };

  const handleAddExercise = (
    newExercise: WorkoutExercise,
    workoutId: string
  ) => {
    if (newWorkout) {
      setNewWorkout({
        ...newWorkout,
        workoutId: workoutId,
        workoutExercises: [...newWorkout.workoutExercises, newExercise],
      });
    }
  };

  const handleUpdateExercise = (updatedExercise?: WorkoutExercise) => {
    if (newWorkout && updatedExercise) {
      let isExerciseNotCompleted = updatedExercise.sets.some(
        (s) => s.isSetCompleted === false
      );

      const updatedWorkoutExercises = newWorkout.workoutExercises.map(
        (exercise) => {
          if (exercise.exerciseId === updatedExercise.exerciseId) {
            return {
              ...updatedExercise,
              isExerciseCompleted: !isExerciseNotCompleted,
            };
          } else {
            return exercise;
          }
        }
      );

      setNewWorkout({
        ...newWorkout,
        workoutExercises: updatedWorkoutExercises,
      });
    }
  };

  const handleDeleteExercise = (exerciseId: string) => {
    if (newWorkout) {
      const updatedWorkoutExercises = newWorkout.workoutExercises.filter(
        (exercise) => {
          return exercise.exerciseId !== exerciseId;
        }
      );

      setNewWorkout({
        ...newWorkout,
        workoutExercises: updatedWorkoutExercises,
      });
    }
  };

  const handleStartWorkout = (workoutId: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    const newCurrentWorkout = workoutList.find((workout) => {
      return workout.workoutId === workoutId;
    });

    if (newCurrentWorkout) {
      setNewWorkout(newCurrentWorkout);
    }

    setIsNewWorkoutModalVisible(true);
  };

  const handleDeleteWorkout = async (workoutId: string) => {
    const newWorkoutList = workoutList.filter((workout) => {
      return workout.workoutId !== workoutId;
    });

    if (newWorkoutList.length === 0) {
      setWorkoutList([]);
    } else {
      setWorkoutList([...newWorkoutList]);
    }
  };

  const handleExitNewWorkoutModal = () => {
    setNewWorkout(null);
    setWorkoutTimerSecondsStart(0);
    handleAddSecondsUserTimer(0);
    setNewWorkoutName("");
    setIsNewWorkoutModalVisible(false);
  };

  const handleSaveNewWorkout = (
    updatedNewWorkout: Workout | null | undefined
  ) => {
    setIsNewWorkoutModalVisible(false);

    if (updatedNewWorkout?.workoutExercises.length !== 0 && updatedNewWorkout) {
      const doesWorkoutExist = workoutList.find((workout) => {
        return workout.workoutId === updatedNewWorkout.workoutId;
      });
      updatedNewWorkout.workoutExercises.forEach((exercise) => {
        exercise.sets.forEach((set) => {
          set.isSetCompleted = false;
        });
        exercise.isExerciseCompleted = false;
      });

      if (doesWorkoutExist) {
        const updatedWorkoutList = workoutList.map((workout) => {
          if (workout.workoutId === updatedNewWorkout.workoutId) {
            return updatedNewWorkout;
          } else {
            return workout;
          }
        });

        setWorkoutList([...updatedWorkoutList]);
      } else {
        const randomImage = getRandomWorkoutImage();

        const freshWorkout = {
          ...updatedNewWorkout,
          image: randomImage,
          workoutName: newWorkoutName || `Workout ${workoutList.length + 1}`,
        };

        setWorkoutList([...workoutList, freshWorkout]);
      }

      setNewWorkout(null);
      setNewWorkoutName("");
    }
  };

  const handleOpenModal = () => {
    setIsNewWorkoutModalVisible(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setNewWorkout({ workoutId: generateUUID(), workoutExercises: [] });
  };

  const handleNewWorkoutNameChange = (newName: string) => {
    setNewWorkoutName(newName);
  };

  const handleAddSecondsUserTimer = (seconds: number) => {
    setWorkoutUserTimerSeconds(seconds);
    setWorkoutUserTimerKey((prevKey: number) => prevKey + 1);
  };

  useEffect(() => {
    handleGetWorkoutListFromLocalStorage();
  }, []);

  useEffect(() => {
    updateLocalStorageWorkoutList(workoutList);
  }, [workoutList]);

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <Box style={styles.workoutPageContainer}>
          <Box style={styles.newWorkoutButtonContainer}>
            <Button
              variant={"solid"}
              onPress={handleOpenModal}
              style={styles.newWorkoutButton}
            >
              <Text style={styles.newWorkoutButtonText}>
                Start a new workout
              </Text>
            </Button>
          </Box>

          {workoutList.length !== 0 ? (
            <PastWorkouts
              {...{ workoutList, handleStartWorkout, handleDeleteWorkout }}
            />
          ) : (
            <Box style={styles.pastWorkoutsTextContainer}>
              <Text style={styles.pastWorkoutsText}>Your past workouts</Text>
              <Text style={styles.pastWorkoutsTextInfo}>
                {`You currently have no past workouts.
Your finished workouts will appear here.`}
              </Text>
            </Box>
          )}

          {isNewWorkoutModalVisible && (
            <NewWorkout
              {...{
                isNewWorkoutModalVisible,
                newWorkoutName,
                handleNewWorkoutNameChange,
                handleSaveNewWorkout,
                newWorkout,
                handleUpdateExercise,
                handleExitNewWorkoutModal,
                handleAddExercise,
                handleAddSecondsUserTimer,
                workoutUserTimerSeconds,
                workoutUserTimerKey,
                workoutTimerSecondsStart,
                handleDeleteExercise,
              }}
            />
          )}
        </Box>
      </NativeBaseProvider>
    </>
  );
}

export default WorkoutPage;
