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

function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const [newWorkout, setNewWorkout] = useState<Workout | null>();
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
    console.log(newExercise);
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
      const updatedWorkoutExercises = newWorkout.workoutExercises.map(
        (exercise) => {
          if (exercise.exerciseId === updatedExercise.exerciseId) {
            return updatedExercise;
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

  const handleStartWorkout = (workoutId: string) => {
    workoutList.forEach((workout) => {
      if (workout.workoutId === workoutId) {
        setNewWorkout(workout);
      }
    });

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

  const handleSaveNewWorkout = () => {
    setIsNewWorkoutModalVisible(false);

    if (newWorkout?.workoutExercises.length !== 0 && newWorkout) {
      const doesWorkoutExist = workoutList.find((workout) => {
        return workout.workoutId === newWorkout.workoutId;
      });

      if (doesWorkoutExist) {
        const updatedWorkoutList = workoutList.map((workout) => {
          if (workout.workoutId === newWorkout.workoutId) {
            return newWorkout;
          } else {
            return workout;
          }
        });

        setWorkoutList([...updatedWorkoutList]);
      } else {
        const randomImage = getRandomWorkoutImage();

        const updatedNewWorkout = {
          ...newWorkout,
          image: randomImage,
          workoutName: newWorkoutName || `Workout ${workoutList.length + 1}`,
        };

        setWorkoutList([...workoutList, updatedNewWorkout]);
      }

      setNewWorkout(null);
      setNewWorkoutName("");
    }
  };

  const handleOpenModal = () => {
    setIsNewWorkoutModalVisible(true);
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
              onPress={() => handleOpenModal()}
              style={styles.newWorkoutButton}
            >
              <Text style={styles.newWorkoutButtonText}>
                Start a workout from scratch
              </Text>
            </Button>
          </Box>

          {workoutList.length !== 0 && (
            <PastWorkouts
              {...{ workoutList, handleStartWorkout, handleDeleteWorkout }}
            />
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
              }}
            />
          )}
        </Box>
      </NativeBaseProvider>
    </>
  );
}

export default WorkoutPage;
