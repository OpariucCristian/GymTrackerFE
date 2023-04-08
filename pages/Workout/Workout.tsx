import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import { View, ImageBackground, Animated } from "react-native";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import { Workout } from "../../models/workout-list-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUUID } from "../../utils/uuid";
import {
  Box,
  Button,
  FlatList,
  NativeBaseProvider,
  Text,
  Modal,
} from "native-base";
import { getRandomWorkoutImage } from "../../assets/workout-backgrounds/Images";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";
import { WorkoutExercise } from "../../models/workout-exercise";
import WorkoutTimer from "./WorkoutTimer/WorkoutTimer";
import { api } from "../../api/api";
import { theme } from "../../styles/theme";
import useToggle from "../../hooks/toogle-hook";
import NewWorkout from "./NewWorkout/NewWorkout";
import styles from "./Workout.styles";

const WorkoutPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const [newWorkout, setNewWorkout] = useState<Workout | null>();
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");

  const [currentWorkout, setCurrentWorkout] = useState<Workout>();

  const [workoutTimerSecondsStart, setWorkoutTimerSecondsStart] =
    useState<number>(0);
  const [workoutUserTimerSeconds, setWorkoutUserTimerSeconds] =
    useState<number>(0);
  const [workoutUserTimerKey, setWorkoutUserTimerKey] = useState<number>(0);

  const [
    isNewWorkoutModalVisible,
    toggleIsNewWorkoutModalVisible,
    setIsNewWorkoutModalVisible,
  ] = useToggle(false);

  const [isWorkoutModalVisible, , setIsWorkoutModalVisible] = useToggle(false);

  const updateLocalStorage = async () => {
    try {
      const jsonValue = JSON.stringify(workoutList);
      await AsyncStorage.setItem("workoutList", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getFromLocalStorage = async () => {
    if (workoutList.length === 0) {
      try {
        const jsonValue = await AsyncStorage.getItem("workoutList");
        jsonValue != null ? setWorkoutList(JSON.parse(jsonValue)) : null;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleAddExercise = (
    name: string,
    sets: number | undefined,
    weight: number | undefined,
    reps: number | undefined,
    workoutId: string
  ) => {
    const newExercise = {
      exercise: name,
      sets,
      weight,
      reps,
      workoutId,
      exerciseId: generateUUID(),
      isExerciseCompleted: false,
    };

    if (newWorkout && sets && weight) {
      setNewWorkout({
        ...newWorkout,
        workoutId,
        workoutExercises: [...newWorkout.workoutExercises, newExercise],
      });
    }
  };

  const handleUpdateExercise = (
    isExerciseCompleted: boolean,
    updatedExercise?: WorkoutExercise,
    updatedExerciseId?: string
  ) => {
    if (currentWorkout && updatedExercise && isExerciseCompleted) {
      const updatedWorkoutExercises = currentWorkout.workoutExercises.map(
        (exercise) => {
          if (exercise.exerciseId === updatedExercise.exerciseId) {
            return updatedExercise;
          } else {
            return exercise;
          }
        }
      );

      setCurrentWorkout({
        ...currentWorkout,
        workoutExercises: updatedWorkoutExercises,
      });
    } else if (currentWorkout && updatedExerciseId && !isExerciseCompleted) {
      const updatedWorkoutExercises = currentWorkout.workoutExercises.map(
        (exercise) => {
          if (exercise.exerciseId === updatedExerciseId) {
            return {
              ...exercise,
              isExerciseCompleted: false,
            };
          } else {
            return exercise;
          }
        }
      );
      setCurrentWorkout({
        ...currentWorkout,
        workoutExercises: updatedWorkoutExercises,
      });
    }
  };

  const handleStartWorkout = (workoutId: string) => {
    workoutList.forEach((workout) => {
      if (workout.workoutId === workoutId) {
        setCurrentWorkout(workout);
      }
    });

    setIsWorkoutModalVisible(true);
  };

  const handleFinishWorkout = () => {
    if (currentWorkout) {
      const updatedWorkoutList = workoutList.map((workout) => {
        if (workout.workoutId === currentWorkout.workoutId) {
          return currentWorkout;
        } else {
          return workout;
        }
      });
      if (updatedWorkoutList.length !== 0) {
        setWorkoutList(updatedWorkoutList);
      }
    }
    setIsWorkoutModalVisible(false);
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

  const isWorkoutNotFinished = () => {
    if (currentWorkout) {
      const areAllExercisesCompleted = currentWorkout.workoutExercises.every(
        (exercise) => {
          return exercise.isExerciseCompleted;
        }
      );

      return !areAllExercisesCompleted;
    }
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    updateLocalStorage();
  }, [workoutList]);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    workoutId: string
  ) => {
    return (
      <Box
        style={{
          alignContent: "center",
          justifyContent: "center",
          width: 70,
        }}
      >
        <Button
          style={styles.deleteWorkoutCardButton}
          variant="secondary"
          onPress={(id) => handleDeleteWorkout(workoutId)}
        >
          X
        </Button>
      </Box>
    );
  };

  return (
    <>
      <NativeBaseProvider theme={theme}>
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
          <Box style={styles.pastWorkoutsTextContainer}>
            <Text style={styles.pastWorkoutsText}>Your past workouts</Text>
          </Box>
        )}
        <ScrollView style={styles.workoutListContainer}>
          <Box>
            {workoutList.length !== 0 &&
              workoutList?.reverse().map((workout, index) => {
                const id = workout.workoutId || "";
                return (
                  <Swipeable
                    friction={3}
                    overshootFriction={50}
                    renderRightActions={(progress, workoutId) =>
                      renderRightActions(progress, id)
                    }
                    key={index}
                  >
                    <Box style={styles.workoutCard}>
                      <ImageBackground
                        source={workout.image}
                        resizeMode="cover"
                        style={styles.backgroundImage}
                      >
                        <View style={styles.darkness}>
                          <Box style={styles.workoutHeader}>
                            <Text style={styles.workoutTitle}>{`${
                              workout?.workoutName
                                ? workout?.workoutName
                                : `Workout ${index + 1}`
                            }`}</Text>

                            <Button
                              variant={"solid"}
                              style={styles.startWorkoutButton}
                              onPress={() => handleStartWorkout(id)}
                            >
                              <Text style={styles.startWorkoutButtonText}>
                                Start
                              </Text>
                            </Button>
                          </Box>

                          <Box style={styles.exercisesContainer}>
                            <ScrollView
                              horizontal={true}
                              style={styles.exercisesContainerScrollable}
                            >
                              {workout
                                ? workout?.workoutExercises.map(
                                    (exercise, exerciseIndex) => {
                                      return (
                                        <Box
                                          key={exerciseIndex}
                                          style={styles.exerciseContainer}
                                        >
                                          <Text
                                            style={styles.workoutExerciseTitle}
                                          >
                                            {exercise.exercise}
                                          </Text>
                                          <Text
                                            style={
                                              styles.workoutExerciseDetails
                                            }
                                          >
                                            Sets: {exercise.sets}
                                          </Text>
                                          <Text
                                            style={
                                              styles.workoutExerciseDetails
                                            }
                                          >
                                            Weight: {exercise.weight} kg {"\n"}
                                          </Text>
                                        </Box>
                                      );
                                    }
                                  )
                                : null}
                            </ScrollView>
                          </Box>
                        </View>
                      </ImageBackground>
                    </Box>
                  </Swipeable>
                );
              })}
          </Box>
        </ScrollView>

        {isNewWorkoutModalVisible && (
          <NewWorkout
            isNewWorkoutModalVisible={isNewWorkoutModalVisible}
            newWorkoutName={newWorkoutName}
            handleNewWorkoutNameChange={handleNewWorkoutNameChange}
            handleSaveNewWorkout={handleSaveNewWorkout}
            newWorkout={newWorkout}
            handleUpdateExercise={handleUpdateExercise}
            handleExitNewWorkoutModal={handleExitNewWorkoutModal}
            handleAddExercise={handleAddExercise}
            handleAddSecondsUserTimer={handleAddSecondsUserTimer}
            workoutUserTimerSeconds={workoutUserTimerSeconds}
            workoutUserTimerKey={workoutUserTimerKey}
            workoutTimerSecondsStart={workoutTimerSecondsStart}
          />
        )}

        <Modal animationPreset={"slide"} isOpen={isWorkoutModalVisible}>
          <Box style={styles.currentWorkoutInfo}>
            <Text style={styles.currentWorkoutModalTitle}>
              {currentWorkout?.workoutName}
            </Text>
            <WorkoutTimer />
          </Box>

          <FlatList
            data={currentWorkout?.workoutExercises}
            renderItem={({ item, index }) => (
              <CurrentWorkoutExercise
                sets={item.sets}
                weight={item.weight}
                exercise={item.exercise}
                reps={item.reps}
                key={index}
                workoutId={item.workoutId}
                exerciseId={item.exerciseId}
                handleUpdateExercise={handleUpdateExercise}
              />
            )}
          />

          <Box style={styles.currentWorkoutButtonsContainer}>
            <Button
              variant="secondary"
              onPress={toggleIsNewWorkoutModalVisible}
            >
              Exit workout
            </Button>

            <Button
              variant="solid"
              isDisabled={isWorkoutNotFinished()}
              onPress={handleFinishWorkout}
            >
              Finish workout
            </Button>
          </Box>
        </Modal>
      </NativeBaseProvider>
    </>
  );
};

export default WorkoutPage;
