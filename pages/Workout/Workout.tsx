import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import { View, ImageBackground, Animated } from "react-native";
import ExerciseInputField from "./ExerciseInputField";
import exerciseList from "../../constants/exerciseList";
import { TextInput, ScrollView, Swipeable } from "react-native-gesture-handler";
import { Workout } from "../../models/workout-list-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUUID } from "../../utils/uuid";
import {
  Box,
  Button,
  FlatList,
  Input,
  NativeBaseProvider,
  Text,
  Modal,
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { getRandomWorkoutImage } from "../../assets/workout-backgrounds/Images";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";
import { WorkoutExercise } from "../../models/workout-exercise";
import WorkoutTimer from "./WorkoutTimer/WorkoutTimer";
import { api } from "../../api/api";
import { theme } from "../../styles/theme";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import useToggle from "../../hooks/toogle-hook";

export function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const [newWorkout, setNewWorkout] = useState<Workout | null>();
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");
  const [
    isNewWorkoutModalVisible,
    toggleIsNewWorkoutModalVisible,
    setIsNewWorkoutModalVisible,
  ] = useToggle(false);

  const [newWorkoutNameSearch, setNewWorkoutNameSearch] = useState<string>("");

  const [currentWorkout, setCurrentWorkout] = useState<Workout>();

  const [isWorkoutModalVisible, , setIsWorkoutModalVisible] = useToggle(false);

  const [isExerciseListModalOpen, toggleExerciseListModalOpen] =
    useToggle(false);

  const [workoutTimerSecondsStart, setWorkoutTimerSecondsStart] =
    useState<number>(0);

  const [workoutUserTimerSeconds, setWorkoutUserTimerSeconds] =
    useState<number>(0);
  const [workoutUserTimerKey, setWorkoutUserTimerKey] = useState<number>(0);

  const exerciseListMemo = React.useMemo(() => exerciseList, []);

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

  const handleNewWorkoutNameSearchChange = (newName: string) => {
    setNewWorkoutNameSearch(newName);
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

  const handleAddSecondsUserTimer = (seconds: number) => {
    setWorkoutUserTimerSeconds(seconds);
    setWorkoutUserTimerKey((prevKey) => prevKey + 1);
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
          <Modal
            animationPreset={"slide"}
            style={styles.newWorkoutModal}
            isOpen={isNewWorkoutModalVisible}
          >
            <Box style={styles.newWorkoutModalHeaderContainer}>
              {/* <Text style={styles.newWorkoutModalTitle}>Exercise list</Text> */}
              <Box style={styles.newWorkoutNameInputContainer}>
                <Input
                  variant="ghost"
                  placeholder="Workout name"
                  style={styles.newWorkoutNameInput}
                  value={newWorkoutName}
                  onChangeText={(newName) =>
                    handleNewWorkoutNameChange(newName)
                  }
                />

                <Box style={styles.workoutTimerContainer}>
                  <WorkoutTimer startFromSeconds={workoutTimerSecondsStart} />
                </Box>
              </Box>

              <Button
                variant={"solid"}
                style={styles.createNewWorkoutButton}
                onPress={handleSaveNewWorkout}
                isDisabled={newWorkout?.workoutExercises.length === 0}
              >
                <Text style={styles.createNewWorkoutButtonText}>
                  Finish Workout
                </Text>
              </Button>
            </Box>

            <CountdownCircleTimer
              size={200}
              key={workoutUserTimerKey}
              isPlaying={!!workoutUserTimerSeconds}
              duration={workoutUserTimerSeconds}
              colors={["#e73213", "#8c200e", "#9dbeb7", "#7f9993"]}
              colorsTime={[
                workoutUserTimerSeconds / 1.5,
                workoutUserTimerSeconds / 2,
                workoutUserTimerSeconds / 4,
                0,
              ]}
              onComplete={() => {
                handleAddSecondsUserTimer(0);
              }}
            >
              {({ remainingTime }: any) => {
                return remainingTime ? (
                  <Text style={styles.timerText}>{remainingTime}</Text>
                ) : (
                  <React.Fragment>
                    <Button
                      variant="ghost"
                      onPress={() => handleAddSecondsUserTimer(15)}
                    >
                      00:15
                    </Button>
                    <Button
                      variant="ghost"
                      onPress={() => handleAddSecondsUserTimer(30)}
                    >
                      00:30
                    </Button>
                    <Button
                      variant="ghost"
                      onPress={() => handleAddSecondsUserTimer(60)}
                    >
                      01:00
                    </Button>
                  </React.Fragment>
                );
              }}
            </CountdownCircleTimer>

            <FlatList
              style={styles.newWorkoutExerciseList}
              data={newWorkout?.workoutExercises}
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

            <Box style={styles.newWorkoutBottomActionsContainer}>
              <Button onPress={handleExitNewWorkoutModal} variant="secondary">
                <Text style={styles.exitNewWorkoutModalButtonText}>
                  Cancel workout
                </Text>
              </Button>

              <Button onPress={() => toggleExerciseListModalOpen()}>
                <Text style={styles.newWorkoutNewExerciseButtonText}>
                  Add new exercise
                </Text>
              </Button>
            </Box>

            <Modal
              isOpen={isExerciseListModalOpen}
              style={styles.exerciseListModal}
            >
              <Modal.CloseButton
                onPress={() => toggleExerciseListModalOpen()}
              ></Modal.CloseButton>
              <Box style={styles.exerciseListModalContentContainer}>
                <Box style={styles.searchForExerciseInputContainer}>
                  <Input
                    style={styles.searchForExerciseInput}
                    placeholder="Seach for exercises"
                    value={newWorkoutNameSearch}
                    onChangeText={(searchQuery) =>
                      handleNewWorkoutNameSearchChange(searchQuery)
                    }
                  />
                </Box>

                {!newWorkoutNameSearch ? (
                  <FlatList
                    data={exerciseListMemo}
                    renderItem={({ item, index }) => (
                      <ExerciseInputField
                        key={index}
                        name={item.name}
                        handleAddExercise={handleAddExercise}
                        workoutId={newWorkout?.workoutId || ""}
                        youtubeLink={item.youtubeLink}
                      />
                    )}
                  ></FlatList>
                ) : (
                  <FlatList
                    data={exerciseListMemo.filter((exercise) => {
                      return exercise.name
                        .toLowerCase()
                        .includes(newWorkoutNameSearch.toLowerCase());
                    })}
                    renderItem={({ item, index }) => (
                      <ExerciseInputField
                        key={index}
                        name={item.name}
                        handleAddExercise={handleAddExercise}
                        workoutId={newWorkout?.workoutId || ""}
                        youtubeLink={item.youtubeLink}
                      />
                    )}
                  ></FlatList>
                )}
              </Box>
            </Modal>
          </Modal>
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
}

const styles = EStyleSheet.create({
  workoutListContainer: {
    backgroundColor: "$backgroundColor",
  },
  workoutList: {
    marginBottom: "10%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  newWorkoutButton: {
    marginTop: "10%",
    marginBottom: "2.5%",
    width: "65%",
  },
  pastWorkoutsTextContainer: {
    backgroundColor: "$backgroundColor",
  },

  pastWorkoutsText: {
    fontSize: 33,
    paddingTop: 33 - 33 * 0.75,
    color: "#fff",
    fontWeight: "600",
    marginLeft: "10%",
    marginTop: "10%",
  },
  newWorkoutButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  newWorkoutButtonContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "$backgroundColor",
    alignItems: "center",
    width: "100%",
  },
  workoutHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
    marginLeft: "6%",
  },
  startWorkoutButton: {
    width: "28%",
    marginRight: "10%",
  },
  startWorkoutButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  deleteWorkoutButton: {
    width: "28%",
  },
  workoutExercise: {
    marginTop: "2%",
    marginLeft: "2%",
    display: "flex",
  },
  workoutCard: {
    display: "flex",
    width: "80%",
    borderRadius: 10,
    border: "1px solid black",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: "10%",
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  workoutExerciseTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  workoutExerciseDetails: {
    fontSize: 12,
    color: "white",
  },
  exercisesContainerScrollable: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
  },
  exercisesContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
    height: "50%",
    marginTop: "4%",
  },

  exerciseContainer: {
    color: "white",
    marginLeft: "1rem",
  },
  backgroundImage: {
    position: "relative",
    zIndex: -1,
    width: "100%",
    height: "11rem",
    borderRadius: 10,
  },
  darkness: {
    backgroundColor: "rgba(0,0,0,0.15)",
    width: "100%",
    height: 200,
  },
  deleteWorkoutCardButton: {
    right: "25%",
    height: "10.8rem",
    marginTop: "60%",
    zIndex: 1,
  },
  currentWorkoutInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginTop: "13%",
    marginLeft: "3%",
    marginBottom: "2%",
  },
  currentWorkoutModalTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  currentWorkoutButtonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
  },
  exitNewWorkoutModalButtonText: {
    fontWeight: "600",
  },
  newWorkoutModalHeaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "3%",

    flexDirection: "row",
    width: "95%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  createNewWorkoutButton: {
    width: "40%",
  },
  createNewWorkoutButtonText: {
    fontWeight: "600",
    color: "#fff",
  },
  newWorkoutModalTitle: {
    width: "60%",
  },
  newExerciseInputFields: {
    marginTop: "5%",
  },
  newWorkoutNameInputContainer: {
    display: "flex",
    gap: "-1rem",
    width: "50%",
  },
  newWorkoutNameInput: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  newWorkoutModal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "$backgroundColor",
  },
  exerciseListModal: {
    display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "$backgroundColor",
  },
  exerciseListModalContentContainer: {
    width: "100%",
    height: "85%",
    gap: "10%",
  },
  searchForExerciseInputContainer: {
    width: "80%",
    alignSelf: "center",
  },
  searchForExerciseInput: {
    color: "white",
  },
  newWorkoutNewExerciseButtonText: {
    fontWeight: "600",
    color: "#fff",
  },
  timerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "$darkGray",
  },
  workoutTimerContainer: {
    marginTop: "3%",
    marginLeft: "6%",
  },
  newWorkoutExerciseList: {
    width: "80%",
    alignSelf: "center",
  },
  newWorkoutBottomActionsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "10%",
  },
});

// export default WorkoutPage;
