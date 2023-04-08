import { Box, Checkbox, Input, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { WorkoutExercise } from "../../../models/workout-exercise";
import CurrentWorkoutExerciseProps from "../../../models/PropModels/CurrentWorkoutExerciseProps";
import styles from "./CurrentWorkoutExercise.styles";

const CurrentWorkoutExercise = (props: CurrentWorkoutExerciseProps) => {
  const {
    exercise,
    sets,
    weight,
    reps,
    workoutId,
    exerciseId,
    handleUpdateExercise,
  } = props;

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
        <Text style={styles.exerciseName}>{exercise}</Text>
        <Box style={styles.exerciseControlsContainer}>
          <Box>
            <Text style={styles.exerciseControlText}>Sets:</Text>
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
            <Text style={styles.exerciseControlText}>Weight:</Text>
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
            <Text style={styles.exerciseControlText}>Reps:</Text>
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
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CurrentWorkoutExercise;
