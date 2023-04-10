import React, { useEffect, useState } from "react";
import { ExerciseSet } from "../../../../../models/exercise-set";
import { Box, Checkbox, Input, Text } from "native-base";
import styles from "./NewWorkoutExerciseSet.styles";

interface CurrentWorkoutExerciseSetProps {
  set: ExerciseSet;
  updateSet: (updatedSet: ExerciseSet) => void;
  setNumber: number;
}
const NewWorkoutExerciseSet = (props: CurrentWorkoutExerciseSetProps) => {
  const { set, updateSet, setNumber } = props;

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
    const updatedSet: ExerciseSet = {
      setId: set.setId,
      weight: Number(updatedWeight),
      reps: Number(updatedReps),
      isSetCompleted: isChecked,
    };
    updateSet(updatedSet);
  }, [isChecked]);
  return (
    <Box style={styles.exerciseControlsContainer}>
      <Box style={styles.exerciseInfoInputContainer}>
        <Box>
          <Text style={styles.inputField}>{setNumber}</Text>
        </Box>

        <Box style={styles.exerciseInputContainer}>
          <Input
            isDisabled={isChecked}
            size={"sm"}
            placeholder="Kg"
            variant="ghost"
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={handleWeightChange}
            value={updatedWeight?.toString() || ""}
          />
        </Box>

        <Box style={styles.exerciseInputContainer}>
          <Input
            isDisabled={isChecked}
            size={"sm"}
            placeholder="Reps"
            variant="ghost"
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={handleRepsChange}
            value={updatedReps?.toString() || ""}
          />
        </Box>
      </Box>

      <Checkbox
        size="sm"
        isChecked={isChecked}
        isDisabled={!updatedWeight || !updatedReps}
        value={"test"}
        accessibilityLabel={"Checkbox"}
        onChange={handleOnCheck}
      />
    </Box>
  );
};

export default NewWorkoutExerciseSet;
