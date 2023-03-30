import { Box, Button, Checkbox, Input, Text, FormControl } from "native-base";
import React, { useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { WorkoutExercise } from "../../../models/workout-exercise";

const CurrentWorkoutExercise = ({
  exercise,
  sets,
  weight,
  reps,
  workoutId,
  exerciseId,
  handleUpdateExercise,
}: {
  exercise: string;
  sets?: number | undefined;
  weight: number | undefined;
  reps: number | undefined;
  workoutId: string;
  exerciseId: string;
  handleUpdateExercise: (
    isExerciseCompleted: boolean,
    updatedExercise?: WorkoutExercise,
    updatedExerciseId?: string
  ) => void;
}) => {
  const [updatedSets, setUpdatedSets] = useState<string>();
  const [updatedWeight, setUpdatedWeight] = useState<string>();
  const [updatedReps, setUpdatedReps] = useState<string>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSetsChange = (sets: string): void => {
    setUpdatedSets(sets);
  };

  const handleWeightChange = (weight: string): void => {
    setUpdatedWeight(weight);
  };

  const handleRepsChange = (reps: string): void => {
    setUpdatedReps(reps);
  };

  const handleOnCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const updateExercise = (isExerciseCompleted: boolean): void => {
    if (isExerciseCompleted) {
      console.log("updates");
      const updatedSetsNumber = Number(updatedSets);
      const updatedWeightNumber = Number(updatedWeight);
      const updatedRepsNumber = Number(updatedReps);

      const updatedExercise: WorkoutExercise = {
        exercise: exercise,
        sets: updatedSetsNumber,
        weight: updatedWeightNumber,
        reps: updatedRepsNumber,
        workoutId: workoutId,
        exerciseId: exerciseId,
        isExerciseCompleted: isExerciseCompleted,
      };

      handleUpdateExercise(isExerciseCompleted, updatedExercise);
    } else {
      handleUpdateExercise(isExerciseCompleted, undefined, exerciseId);
    }
  };

  useEffect(() => {
    setUpdatedSets(sets?.toString());
    setUpdatedWeight(weight?.toString());
    setUpdatedReps(reps?.toString());
  }, []);

  useEffect(() => {
    updateExercise(isChecked);
  }, [isChecked]);

  return (
    <React.Fragment>
      <Box style={styles.exerciseContainer}>
        <Text>{exercise}</Text>
        <Box style={styles.exerciseControlsContainer}>
          <Box>
            <Text>Sets:</Text>
            <Input
              isDisabled={isChecked}
              size={"sm"}
              placeholder="Sets"
              keyboardType="numeric"
              style={styles.inputField}
              onChangeText={handleSetsChange}
              value={updatedSets?.toString() || ""}
            />
          </Box>

          <Box>
            <Text>Weight:</Text>
            <Input
              isDisabled={isChecked}
              size={"sm"}
              placeholder="Kg"
              keyboardType="numeric"
              style={styles.inputField}
              onChangeText={handleWeightChange}
              value={updatedWeight?.toString() || ""}
            />
          </Box>

          <Box>
            <Text>Reps:</Text>
            <Input
              isDisabled={isChecked}
              size={"sm"}
              placeholder="Reps"
              keyboardType="numeric"
              style={styles.inputField}
              onChangeText={handleRepsChange}
              value={updatedReps?.toString() || ""}
            />
          </Box>

          <Checkbox
            colorScheme="lightBlue"
            size="lg"
            isChecked={isChecked}
            value={"test"}
            accessibilityLabel={"Checkbox"}
            onChange={handleOnCheck}
          />
          {/* <Button
            onPress={() =>
              handleUpdateExercise(
                exercise,
                updatedSets,
                updatedWeight,
                updatedReps,
                workoutId,
                exerciseId
              )
            }
          >
            <Text> Test update</Text>
          </Button> */}
        </Box>
      </Box>
    </React.Fragment>
  );
};

const styles = EStyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  exerciseControlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CurrentWorkoutExercise;