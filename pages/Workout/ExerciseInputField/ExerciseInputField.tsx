import React, { useState } from "react";
import { View } from "react-native";
import { Box, Button, Input } from "native-base";
import Dropdown from "../../../components/dropdown/Dropdown";
import ExerciseCardProps from "../../../models/PropModels/ExerciseCardProps";
import styles from "./ExerciseInputField.styles";

const ExerciseCard = (props: ExerciseCardProps) => {
  const { name, handleAddExercise, workoutId, youtubeLink } = props;

  const [weight, setWeight] = useState<number>();
  const [reps, setReps] = useState<number>();

  const handleWeightChange = (weight: number) => {
    setWeight(weight);
  };

  const handleRepsChange = (reps: number) => {
    setReps(reps);
  };

  return (
    <View style={styles.cardContainer}>
      <Dropdown label={name} youtubeLink={youtubeLink}>
        <React.Fragment>
          <Box style={styles.dropDownContentContainer}>
            <Box style={styles.workoutControlsContainer}>
              <Box style={styles.inputFieldContainer}>
                <Input
                  size={"sm"}
                  placeholder="Kg"
                  keyboardType="numeric"
                  style={styles.inputField}
                  onChangeText={(weight) => handleWeightChange(Number(weight))}
                  value={weight?.toString() || ""}
                />
              </Box>

              <Box style={styles.inputFieldContainer}>
                <Input
                  size={"sm"}
                  placeholder="Reps"
                  keyboardType="numeric"
                  style={styles.inputField}
                  onChangeText={(reps) => handleRepsChange(Number(reps))}
                  value={reps?.toString() || ""}
                />
              </Box>

              <View style={styles.button}>
                <Button
                  isDisabled={!weight || !reps}
                  onPress={() =>
                    handleAddExercise(name, reps, weight, workoutId)
                  }
                >
                  Add
                </Button>
              </View>
            </Box>
          </Box>
        </React.Fragment>
      </Dropdown>
    </View>
  );
};

export default ExerciseCard;
