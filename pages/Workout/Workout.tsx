import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  ImageBackground,
  Animated,
  GestureResponderEvent,
} from "react-native";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import exerciseList from "../../constants/exerciseList";
import { TextInput, ScrollView, Swipeable } from "react-native-gesture-handler";
import { Workout } from "../../models/workout-list-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUUID } from "../../utils/uuid";
import { Box, Button, FlatList } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { WORKOUTIMAGE2 } from "../../assets/workout-backgrounds/Images";

export function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [newWorkout, setNewWorkout] = useState<Workout | null>();
  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

  const [newWorkoutName, setNewWorkoutName] = useState<string>("");

  const [isNewWorkoutModalVisible, setIsNewWorkoutModalVisible] =
    useState<boolean>(false);
  const [isWorkoutModalVisible, setIsWorkoutModalVisible] =
    useState<boolean>(false);

  const [currentWorkout, setCurrentWorkout] = useState<Workout>();

  const updateLocalStorage = async () => {
    console.log("runs");
    try {
      const jsonValue = JSON.stringify(workoutList);
      await AsyncStorage.setItem("workoutList", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getFromLocalStorage = async () => {
    if (workoutList.length === 0) {
      console.log("runs2");
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
    sets: string,
    weight: string,
    workoutId: string
  ) => {
    const newExercise = {
      exercise: name,
      sets: sets,
      weight: weight,
      workoutId: workoutId,
    };

    if (newWorkout) {
      setNewWorkout({
        ...newWorkout,
        workoutId,
        workoutName: newWorkoutName,
        workoutExercises: [...newWorkout.workoutExercises, newExercise],
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

  const handleDeleteWorkout = async (workoutId: string) => {
    const newWorkoutList = workoutList.filter((workout) => {
      console.log(workout.workoutId, workoutId);
      return workout.workoutId !== workoutId;
    });

    if (newWorkoutList.length === 0) {
      setWorkoutList([]);
    } else {
      setWorkoutList([...newWorkoutList]);
    }
    console.log(workoutList);
  };

  const handleExitModal = () => {
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
      {/* <Button onPress={() => console.log(workoutList)}>log</Button> */}

      {workoutList &&
        workoutList?.map((workout, index) => {
          console.log(workoutList);

          return (
            <Swipeable
              friction={3}
              leftThreshold={100}
              renderRightActions={(progress, workoutId) =>
                renderRightActions(progress, workout?.workoutId)
              }
            >
              <Box key={index} style={styles.workoutCard}>
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
                      onPress={() => handleStartWorkout(workout?.workoutId)}
                    >{`Start`}</Button>
                    {/* <Button
                      style={styles.deleteWorkoutButton}
                      onPress={() => handleDeleteWorkout(workout?.workoutId)}
                      colorScheme="secondary"
                    >
                      {`Delete`}
                    </Button> */}
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

      <Box style={styles.navbar}>
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
      </Box>

      <Modal visible={isNewWorkoutModalVisible}>
        <ScrollView>
          <Text style={styles.modalTitle}>Exercise list</Text>

          <TextInput
            placeholder="Workout name"
            value={newWorkoutName}
            onChangeText={(newName) => handleNewWorkoutNameChange(newName)}
          />

          {exerciseList.map((exercise, index) => (
            <ExerciseCard
              key={index}
              name={exercise.name}
              handleAddExercise={handleAddExercise}
              id={exercise.id}
              workoutId={newWorkout?.workoutId || ""}
            />
          ))}
        </ScrollView>
        <Button onPress={() => handleExitModal()}>X Exit</Button>
      </Modal>

      <Modal visible={isWorkoutModalVisible}>
        {<Button onPress={() => console.log(currentWorkout)}>asd</Button>}

        {currentWorkout?.workoutExercises.map((exercise, exerciseIndex) => {
          return (
            <Box key={exerciseIndex}>
              <Text>{exercise.exercise}</Text>
              <Text>Sets: {exercise.sets}</Text>
              <Text>
                Weight: {exercise.weight} kg {"\n"}
              </Text>
            </Box>
          );
        })}
      </Modal>
    </>
  );
}

const styles = EStyleSheet.create({
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
  modalTitle: {
    marginTop: "10%",
  },
  newWorkoutButton: {
    marginTop: "10%",
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
    height: "80%",
    marginTop: "60%",
    zIndex: 1,
  },
});

// export default WorkoutPage;
