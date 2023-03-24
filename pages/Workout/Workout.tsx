import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
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
import exerciseList from "../../Constants/exerciseList";
import { ScrollView } from "react-native-gesture-handler";
import { WorkoutList } from "../../models/workout-list-interface";

export function WorkoutPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [newWorkout, setNewWorkout] = useState<WorkoutList[]>([]);
  const [workoutList, setWorkoutList] = useState<WorkoutList[][]>([]);

  const [isNewWorkoutModalVisible, setIsNewWorkoutModalVisible] =
    useState<boolean>(false);
  const [isWorkoutModalVisible, setIsWorkoutModalVisible] =
    useState<boolean>(false);

  const [currentWorkout, setCurrentWorkout] = useState<WorkoutList[]>();

  const handleAddExercise = (name: string, sets: string, weight: string) => {
    setNewWorkout([
      ...newWorkout,
      { exercise: name, sets, weight, workoutId: workoutList.length + 1 },
    ]);
  };

  const handleExitModal = () => {
    if (newWorkout.length !== 0) {
      setWorkoutList([...workoutList, newWorkout]);
    }

    setIsNewWorkoutModalVisible(false);
    setNewWorkout([]);
  };

  const handleStartWorkout = (workoutId: number) => {
    workoutList.map((workoutArray) => {
      workoutArray.forEach((workout) => {
        if (workout.workoutId === workoutId) {
          setCurrentWorkout(workoutArray);
          return;
        }
      });
    });

    setIsWorkoutModalVisible(true);
  };

  return (
    <>
      <Button
        title={"New workout"}
        onPress={() => setIsNewWorkoutModalVisible(true)}
      />
      <Button title={"log"} onPress={() => console.log(workoutList)} />

      {workoutList &&
        workoutList.map((workout, index) => {
          return (
            <View key={index}>
              <View>
                <Text>Workout {index + 1}</Text>
                <Button
                  title={`Start workout ${index + 1}`}
                  onPress={() => handleStartWorkout(index + 1)}
                />
              </View>

              {workout.map((exercise, exerciseIndex) => {
                return (
                  <View key={exerciseIndex}>
                    <Text>{exercise.exercise}</Text>
                    <CheckBox></CheckBox>
                    <Text>Sets: {exercise.sets}</Text>
                    <Text>
                      Weight: {exercise.weight} kg {"\n"}
                    </Text>
                  </View>
                );
              })}
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
            />
          ))}
        </ScrollView>
        <Button title={"X Press me bro"} onPress={() => handleExitModal()} />
      </Modal>

      <Modal visible={isWorkoutModalVisible}>
        {
          <Button
            title={"asd"}
            onPress={() => console.log(currentWorkout)}
          ></Button>
        }

        {currentWorkout?.map((exercise, exerciseIndex) => {
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
