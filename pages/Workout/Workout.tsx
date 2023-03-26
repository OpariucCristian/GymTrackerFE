import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import {
  Button,
  View,
  Text,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import exerciseList from "../../constants/exerciseList";
import { ScrollView } from "react-native-gesture-handler";
import { Workout } from "../../models/workout-list-interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUUID } from "../../utils/uuid";

export function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [newWorkout, setNewWorkout] = useState<Workout | null>();
  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

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
  };

  const handleOpenModal = () => {
    setNewWorkout({ workoutId: generateUUID(), workoutExercises: [] });
    setIsNewWorkoutModalVisible(true);
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    updateLocalStorage();
  }, [workoutList]);

  return (
    <>
      <Button title={"New workout"} onPress={() => handleOpenModal()} />
      <Button title={"log"} onPress={() => console.log(workoutList)} />

      {workoutList &&
        workoutList?.map((workout, index) => {
          console.log(workoutList);
          return (
            <View key={index}>
              <View>
                <Text>Workout {index + 1}</Text>
                <Button
                  title={`Start workout ${index + 1}`}
                  onPress={() => handleStartWorkout(workout?.workoutId)}
                />
                <Button
                  title={`Delete workout ${index + 1}`}
                  onPress={() => handleDeleteWorkout(workout?.workoutId)}
                ></Button>
              </View>

              {workout.workoutExercises.map((exercise, exerciseIndex) => {
                return (
                  <View key={exerciseIndex}>
                    <Text>{exercise.exercise}</Text>
                    <Text>Sets: {exercise.sets}</Text>
                    <Text>
                      Weight: {exercise.weight} kg {"\n"}
                    </Text>
                  </View>
                );
              })}

              {}
            </View>
          );
        })}

      <View style={styles.navbar}>
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
      </View>

      <Modal visible={isNewWorkoutModalVisible}>
        <ScrollView>
          <Text style={styles.modalTitle}>Exercise list</Text>

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
        <Button title={"X Exit"} onPress={() => handleExitModal()} />
      </Modal>

      <Modal visible={isWorkoutModalVisible}>
        {
          <Button
            title={"asd"}
            onPress={() => console.log(currentWorkout)}
          ></Button>
        }

        {currentWorkout?.workoutExercises.map((exercise, exerciseIndex) => {
          return (
            <View key={exerciseIndex}>
              <Text>{exercise.exercise}</Text>
              <Text>Sets: {exercise.sets}</Text>
              <Text>
                Weight: {exercise.weight} kg {"\n"}
              </Text>
            </View>
          );
        })}
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
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
});

// export default WorkoutPage;
