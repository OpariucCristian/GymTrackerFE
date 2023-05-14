import {
  Box,
  CheckIcon,
  FormControl,
  Input,
  Pressable,
  Select,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { Text, Button, Modal } from "native-base";
import useToggle from "../../../../hooks/toogle-hook";
import styles from "./CustomExerciseInputField.styles";
import * as Haptics from "expo-haptics";
import CustomExerciseCardProps from "../../../../models/PropModels/CustomExerciseCardProps";
import { CustomExercise } from "../../../../models/custom-exercise";
import { TouchableHighlight } from "react-native-gesture-handler";

const CustomExerciseInputField = (props: CustomExerciseCardProps) => {
  const { addCustomExercise } = props;

  const [isInfoModalOpen, toggleInfoModalOpen] = useToggle(false);
  const [exerciseName, setExerciseName] = useState("");
  const [primaryMuscle, setPrimaryMuscle] = useState("");
  const [secondaryMuscle, setSecondaryMuscle] = useState("");

  const handleExerciseNameChange = (text: string) => {
    setExerciseName(text);
  };

  const handleAddCustomExercise = () => {
    const customExercise: CustomExercise = {
      name: exerciseName,
      primaryMuscles: [primaryMuscle],
      secondaryMuscles: [secondaryMuscle],
    };
    addCustomExercise(customExercise);
    toggleInfoModalOpen();
  };

  return (
    <React.Fragment>
      <Box style={styles.exerciseInputFieldContainer}>
        <TouchableHighlight onPress={toggleInfoModalOpen}>
          <Box style={styles.contentContainer}>
            <Text style={styles.exerciseText}>Add custom exercise</Text>
          </Box>
        </TouchableHighlight>
      </Box>

      <Modal isOpen={isInfoModalOpen}>
        <Box style={styles.exerciseInfoModalContainer}>
          <Modal.CloseButton onPress={toggleInfoModalOpen} />
          <Box style={styles.exerciseInfoModalContentContainer}>
            <FormControl>
              <FormControl.Label>Exercise name</FormControl.Label>
              <Input
                placeholder="Exercise name"
                onChangeText={(newName) => handleExerciseNameChange(newName)}
                value={exerciseName}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Primary muscle worked</FormControl.Label>
              <Select
                minWidth="200"
                accessibilityLabel="Choose Muscle group"
                placeholder="Primary Muscle group"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1"
                onValueChange={(itemValue) => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setPrimaryMuscle(itemValue.toString());
                }}
              >
                <Select.Item label="Chest" value="chest" />
                <Select.Item label="Arms" value="arms" />
                <Select.Item label="Back" value="back" />
                <Select.Item label="Legs" value="legs" />
                <Select.Item label="Core" value="core" />
                <Select.Item label="Other" value="other" />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Please choose a primary muscle!
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl>
              <FormControl.Label>Secondary muscle worked</FormControl.Label>
              <Select
                minWidth="200"
                accessibilityLabel="Choose Muscle group"
                placeholder="Secondary Muscle group"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1"
                onValueChange={(itemValue) => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setSecondaryMuscle(itemValue.toString());
                }}
              >
                <Select.Item label="Chest" value="chest" />
                <Select.Item label="Arms" value="arms" />
                <Select.Item label="Back" value="back" />
                <Select.Item label="Legs" value="legs" />
                <Select.Item label="Core" value="core" />
                <Select.Item label="Other" value="other" />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Please choose a secondary muscle!
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Button
            onPress={handleAddCustomExercise}
            style={styles.addNewExerciseButton}
          >
            Add new custom exercise
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default CustomExerciseInputField;
