import React, { useEffect, useState } from "react";
import { ExerciseSet } from "../../../../models/exercise-set";
import { Box, Checkbox, Input, Text } from "native-base";
import styles from "../CurrentWorkoutExercise.styles";
interface CurrentWorkoutExerciseSetProps {
  set: ExerciseSet;
  updateExercise: (isExerciseCompleted: boolean) => void;
}
const CurrentWorkoutExerciseSet = (props: CurrentWorkoutExerciseSetProps) => {
  const { set, updateExercise } = props;

  const [updatedWeight, setUpdatedWeight] = useState<string>();
  const [updatedReps, setUpdatedReps] = useState<string>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleWeightChange = (weight: string): void => {
    setUpdatedWeight(weight);
  };

  const handleRepsChange = (reps: string): void => {
    setUpdatedReps(reps);
  };

  const handleOnCheck = (): void => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setUpdatedWeight(set.weight?.toString());
    setUpdatedReps(set.reps?.toString());
  }, []);

  useEffect(() => {
    updateExercise(isChecked);
  }, [isChecked]);
  return (
    <Box style={styles.exerciseControlsContainer}>
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
  );
};

export default CurrentWorkoutExerciseSet;
