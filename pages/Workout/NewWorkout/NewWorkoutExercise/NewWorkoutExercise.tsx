import { Box, Button, Checkbox, Input, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { WorkoutExercise } from "../../../../models/workout-exercise";
import CurrentWorkoutExerciseProps from "../../../../models/PropModels/CurrentWorkoutExerciseProps";
import styles from "./NewWorkoutExercise.styles";
import CurrentWorkoutExerciseSet from "./NewWokroutExerciseSet/NewWorkoutExerciseSet";
import { ExerciseSet } from "../../../../models/exercise-set";
import { generateUUID } from "../../../../utils/uuid";

const NewWorkoutExercise = (props: CurrentWorkoutExerciseProps) => {
  const { exercise, handleUpdateExercise } = props;

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

  // const updateExercise = (isExerciseCompleted: boolean): void => {
  //   if (isExerciseCompleted) {
  //     const updatedSetsNumber = Number(updatedSets);
  //     const updatedWeightNumber = Number(updatedWeight);
  //     const updatedRepsNumber = Number(updatedReps);

  //     const updatedExercise: WorkoutExercise = {
  //       exercise: exercise.exercise,
  //       sets: updatedSetsNumber,
  //       weight: updatedWeightNumber,
  //       reps: updatedRepsNumber,
  //       workoutId: exerciseworkoutId,
  //       exerciseId: exerciseId,
  //       isExerciseCompleted: isExerciseCompleted,
  //     };

  //     handleUpdateExercise(isExerciseCompleted, updatedExercise);
  //   } else {
  //     handleUpdateExercise(isExerciseCompleted, undefined, exerciseId);
  //   }
  // };

  // useEffect(() => {
  //   setUpdatedSets(sets?.toString());
  //   setUpdatedWeight(weight?.toString());
  //   setUpdatedReps(reps?.toString());
  // }, []);

  // useEffect(() => {
  //   updateExercise(isChecked);
  // }, [isChecked]);

  const addEmptySet = (): void => {
    const emptySet: ExerciseSet = {
      reps: 0,
      weight: 0,
      setId: generateUUID(),
      isSetCompleted: false,
    };

    const updatedExercise: WorkoutExercise = {
      exercise: exercise.exercise,
      workoutId: exercise.workoutId,
      exerciseId: exercise.exerciseId,
      isExerciseCompleted: exercise.isExerciseCompleted,
      sets: [...exercise.sets, emptySet],
    };

    handleUpdateExercise(false, updatedExercise, exercise.exerciseId);
  };

  return (
    <React.Fragment>
      <Box style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.exercise}</Text>
        {/* <Box style={styles.exerciseControlsContainer}>
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
        </Box> */}
        {exercise.sets.map((set: ExerciseSet) => {
          return (
            <Box style={styles.setContainer}>
              {/* <Text style={styles.setNumber}>Set {set.setNumber}</Text>
              <Text style={styles.setWeight}>Weight: {set.weight}kg</Text>
              <Text style={styles.setReps}>Reps: {set.reps}</Text> */}
              <CurrentWorkoutExerciseSet
                set={set}
                updateExercise={handleUpdateExercise}
              />
            </Box>
          );
        })}

        <Button onPress={() => addEmptySet()}>Add new set</Button>
      </Box>
    </React.Fragment>
  );
};

export default NewWorkoutExercise;
