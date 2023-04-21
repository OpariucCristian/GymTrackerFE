import React, { useState } from "react";
import { Linking, View } from "react-native";
import { Box, Button, Input, Text } from "native-base";
import Dropdown from "../../../../components/dropdown/Dropdown";
import ExerciseCardProps from "../../../../models/PropModels/ExerciseCardProps";
import styles from "./ExerciseInputField.styles";
import { generateUUID } from "../../../../utils/uuid";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Haptics from "expo-haptics";

const ExerciseCard = (props: ExerciseCardProps) => {
  const { name, handleAddExercise, workoutId, youtubeLink } = props;

  const firstSet = {
    setId: generateUUID(),
    weight: 0,
    reps: 0,
    isSetCompleted: false,
  };

  const exerciseId = generateUUID();

  const handleAddExercisePress = (): void => {
    handleAddExercise(
      {
        exercise: name,
        sets: [firstSet],
        exerciseId: exerciseId,
        workoutId: workoutId,
        isExerciseCompleted: false,
      },
      workoutId
    );

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <React.Fragment>
      <Box style={styles.exerciseInputFieldContainer}>
        <Box style={styles.contentContainer}>
          <Text style={styles.exerciseText}>{name}</Text>
          <Box style={styles.workoutControlsContainer}>
            {youtubeLink && (
              <Text
                style={styles.youtubeIcon}
                onPress={() => Linking.openURL(`${youtubeLink}`)}
              >
                <FontAwesomeIcon size={30} icon={faYoutube} />
              </Text>
            )}

            <Button onPress={handleAddExercisePress}>Add</Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ExerciseCard;
