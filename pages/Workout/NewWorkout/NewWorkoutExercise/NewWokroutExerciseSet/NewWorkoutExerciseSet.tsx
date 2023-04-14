import React, { useEffect, useState } from "react";
import { ExerciseSet } from "../../../../../models/exercise-set";
import { Box, Center, Checkbox, FormControl, Input, Text } from "native-base";
import styles from "./NewWorkoutExerciseSet.styles";

interface CurrentWorkoutExerciseSetProps {
  set: ExerciseSet;
  updateSet: (updatedSet: ExerciseSet) => void;
  setNumber: number;
  isFirstSet: boolean;
}
const NewWorkoutExerciseSet = (props: CurrentWorkoutExerciseSetProps) => {
  const { set, updateSet, setNumber, isFirstSet } = props;

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
        <Box style={styles.exerciseInputContainer}>
          <FormControl>
            {isFirstSet && (
              <FormControl.Label style={styles.inputFieldLabel}>
                <Text style={styles.inputFieldLabelText}>Set</Text>
              </FormControl.Label>
            )}

            <Input
              size={"sm"}
              placeholder={`${setNumber}`}
              variant="ghost"
              style={styles.inputField}
              value={`${setNumber}`}
              isFullWidth={true}
              textAlign={"center"}
            />
          </FormControl>
        </Box>

        <Box style={styles.exerciseInputContainer}>
          <FormControl>
            {isFirstSet && (
              <FormControl.Label style={styles.inputFieldLabel}>
                <Text style={styles.inputFieldLabelText}>Weight</Text>
              </FormControl.Label>
            )}
            <Input
              isDisabled={isChecked}
              size={"sm"}
              placeholder="Kg"
              variant="ghost"
              keyboardType="number-pad"
              returnKeyType="done"
              style={styles.inputField}
              onChangeText={handleWeightChange}
              value={updatedWeight?.toString() || ""}
              isFullWidth={true}
              maxLength={4}
              textAlign={"center"}
            />
          </FormControl>
        </Box>

        <Box style={styles.exerciseInputContainer}>
          <FormControl>
            {isFirstSet && (
              <FormControl.Label style={styles.inputFieldLabel}>
                <Text style={styles.inputFieldLabelText}>Reps</Text>
              </FormControl.Label>
            )}
            <Input
              isDisabled={isChecked}
              size={"sm"}
              placeholder="Reps"
              variant="ghost"
              keyboardType="number-pad"
              returnKeyType="done"
              style={styles.inputField}
              onChangeText={handleRepsChange}
              value={updatedReps?.toString() || ""}
              isFullWidth={true}
              maxLength={4}
              textAlign={"center"}
            />
          </FormControl>
        </Box>

        <Box style={styles.checkboxContainer}>
          <FormControl>
            {isFirstSet && (
              <FormControl.Label style={styles.inputFieldLabel}>
                <Text style={styles.inputFieldLabelCheckboxText}>✓</Text>
              </FormControl.Label>
            )}
            <Checkbox
              size="sm"
              isChecked={isChecked}
              isDisabled={!updatedWeight || !updatedReps}
              value={"exerciseComplete"}
              accessibilityLabel={"Checkbox"}
              onChange={handleOnCheck}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default NewWorkoutExerciseSet;
