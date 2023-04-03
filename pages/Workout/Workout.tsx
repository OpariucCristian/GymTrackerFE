import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import {
  View,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  ImageBackground,
  Animated,
  GestureResponderEvent,
} from "react-native";
import ExerciseInputField from "./ExerciseInputField";
import exerciseList from "../../constants/exerciseList";
import { TextInput, ScrollView, Swipeable } from "react-native-gesture-handler";
import { Workout } from "../../models/workout-list-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUUID } from "../../utils/uuid";
import { Box, Button, FlatList, Input, Text } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { WORKOUTIMAGE2 } from "../../assets/workout-backgrounds/Images";
import CurrentWorkoutExercise from "./CurrentWorkoutExercise";
import { WorkoutExercise } from "../../models/workout-exercise";
import WorkoutTimer from "./WorkoutTimer/WorkoutTimer";
import { api } from "../../api/api";

export function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const [newWorkout, setNewWorkout] = useState<Workout | null>();
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");
  const [isNewWorkoutModalVisible, setIsNewWorkoutModalVisible] =
    useState<boolean>(false);
  const [newWorkoutNameSearch, setNewWorkoutNameSearch] = useState<string>("");

  const [currentWorkout, setCurrentWorkout] = useState<Workout>();

  const [isWorkoutModalVisible, setIsWorkoutModalVisible] =
    useState<boolean>(false);

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
        workoutName: newWorkoutName || `Workout ${workoutList.length + 1}`,
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

  const handleExitWorkoutModal = () => {
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
    setIsNewWorkoutModalVisible(false);
    setNewWorkout(null);
    setNewWorkoutName("");
  };

  const handleSaveNewWorkout = () => {
    if (newWorkout?.workoutExercises.length !== 0 && newWorkout) {
      setWorkoutList([...workoutList, newWorkout]);
    }

    setIsNewWorkoutModalVisible(false);
    setNewWorkout(null);
    setNewWorkoutName("");
  };

  const handleOpenModal = () => {
    setNewWorkout({ workoutId: generateUUID(), workoutExercises: [] });
    setIsNewWorkoutModalVisible(true);
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
          colorScheme="secondary"
          onPress={(id) => handleDeleteWorkout(workoutId)}
        >
          X
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Box style={styles.newWorkoutButtonContainer}>
        <Button
          onPress={() => handleOpenModal()}
          style={styles.newWorkoutButton}
        >
          New workout
        </Button>
      </Box>

      {/* Test button
      <Button
        onPress={() =>
          api.post("/auth/signup", {
            username: "secondUser",
            email: "firstuser@firstuser.com",
            password: "firstUser",
            roles: ["user"],
          })
        }
      >
        Test BE
      </Button> */}

      <ScrollView style={styles.workoutListContainer}>
        {workoutList &&
          workoutList?.map((workout, index) => {
            const id = workout.workoutId || "";
            return (
              <Swipeable
                friction={3}
                overshootFriction={50}
                overshootLeft={false}
                renderRightActions={(progress, workoutId) =>
                  renderRightActions(progress, id)
                }
                key={index}
              >
                <Box style={styles.workoutCard}>
                  <ImageBackground
                    source={WORKOUTIMAGE2}
                    resizeMode="cover"
                    style={styles.backgroundImage}
                  >
                    <Box style={styles.workoutHeader}>
                      <Text style={styles.workoutTitle}>{`${
                        workout?.workoutName
                          ? workout?.workoutName
                          : `Workout ${index + 1}`
                      }`}</Text>
                      <Text>{newWorkoutName}</Text>
                      <Button
                        style={styles.startWorkoutButton}
                        onPress={() => handleStartWorkout(id)}
                      >{`Start`}</Button>
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
                                    <Text style={styles.workoutExerciseTitle}>
                                      {exercise.exercise}
                                    </Text>
                                    <Text style={styles.workoutExerciseDetails}>
                                      Sets: {exercise.sets}
                                    </Text>
                                    <Text style={styles.workoutExerciseDetails}>
                                      Weight: {exercise.weight} kg {"\n"}
                                    </Text>
                                  </Box>
                                );
                              }
                            )
                          : null}
                      </ScrollView>
                    </Box>
                  </ImageBackground>
                </Box>
              </Swipeable>
            );
          })}
      </ScrollView>
      {/* <Box style={styles.navbar}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile", { id: 1 })}
        >
          <Text>Profile</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Workout", { id: 1 })}
        >
          <Text>Start Workout</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Exercises", { id: 1 })}
        >
          <Text>Exercises</Text>
        </TouchableWithoutFeedback>
      </Box> */}

      <Modal visible={isNewWorkoutModalVisible}>
        <Box style={styles.newWorkoutModalHeaderContainer}>
          {/* <Text style={styles.newWorkoutModalTitle}>Exercise list</Text> */}
          <Box style={styles.newWoorkoutNameInputContainer}>
            <Input
              placeholder="Workout name"
              value={newWorkoutName}
              onChangeText={(newName) => handleNewWorkoutNameChange(newName)}
            />
          </Box>

          <Button
            style={styles.createNewWorkoutButton}
            onPress={handleSaveNewWorkout}
            isDisabled={newWorkout?.workoutExercises.length === 0}
            colorScheme="success"
          >
            Create new workout
          </Button>
        </Box>

        <Box style={styles.newWorkoutNameInput}>
          <Input
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

        <Button
          style={styles.exitNewWorkoutModalButton}
          onPress={handleExitNewWorkoutModal}
        >
          X Exit
        </Button>
      </Modal>

      <Modal visible={isWorkoutModalVisible}>
        <Box style={styles.currentWorkoutInfo}>
          <Text style={styles.currentWorkoutModalTitle}>
            {currentWorkout?.workoutName}
          </Text>
          <WorkoutTimer />
        </Box>
        {currentWorkout?.workoutExercises.map((exerciseItem, exerciseIndex) => {
          const { sets, weight, exercise, reps, workoutId, exerciseId } =
            exerciseItem;
          return (
            <CurrentWorkoutExercise
              sets={sets}
              weight={weight}
              exercise={exercise}
              reps={reps}
              key={exerciseIndex}
              workoutId={workoutId}
              exerciseId={exerciseId}
              handleUpdateExercise={handleUpdateExercise}
            />
          );
        })}
        <Box style={styles.currentWorkoutButtonsContainer}>
          <Button colorScheme={"secondary"} onPress={handleExitWorkoutModal}>
            Exit workout
          </Button>

          <Button
            isDisabled={isWorkoutNotFinished()}
            onPress={handleFinishWorkout}
          >
            Finish workout
          </Button>
        </Box>
      </Modal>
    </>
  );
}

const styles = EStyleSheet.create({
  workoutListContainer: {
    marginBottom: "10%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: "2.5%",
    marginBottom: "2.5%",
    width: "35%",
  },
  newWorkoutButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  workoutHeader: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
    marginLeft: "1%",
  },
  startWorkoutButton: {
    width: "28%",
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
  deleteWorkoutCardButton: {
    right: "25%",
    height: "78%",
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
  exitNewWorkoutModalButton: {
    paddingBottom: "5%",
  },
  newWorkoutModalHeaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "3%",

    flexDirection: "row",
    width: "95%",
    marginTop: "12%",
    marginBottom: "5%",
  },
  createNewWorkoutButton: {
    width: "40%",
  },
  newWorkoutModalTitle: {
    width: "60%",
  },
  newWorkoutNameInput: {
    width: "90%",
    paddingBottom: "3%",
    alignSelf: "center",
  },
  newExerciseInputFields: {
    marginTop: "5%",
  },
  newWoorkoutNameInputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
  },
});

// export default WorkoutPage;
