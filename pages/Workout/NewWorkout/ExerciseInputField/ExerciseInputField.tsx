import React, { useState } from "react";
import { View } from "react-native";
import { Box, Button, Input } from "native-base";
import Dropdown from "../../../../components/dropdown/Dropdown";
import ExerciseCardProps from "../../../../models/PropModels/ExerciseCardProps";
import styles from "./ExerciseInputField.styles";
import { generateUUID } from "../../../../utils/uuid";

const ExerciseCard = (props: ExerciseCardProps) => {
  const { name, handleAddExercise, workoutId, youtubeLink } = props;

  return (
    <View style={styles.cardContainer}>
      <Dropdown label={name} youtubeLink={youtubeLink}>
        <React.Fragment>
          <Box style={styles.dropDownContentContainer}>
            <Box style={styles.workoutControlsContainer}>
              <View style={styles.button}>
                <Button
                  onPress={() =>
                    handleAddExercise(
                      {
                        exercise: name,
                        sets: [
                          {
                            setId: generateUUID(),
                            weight: 0,
                            reps: 0,
                            isSetCompleted: false,
                          },
                        ],
                        exerciseId: generateUUID(),
                        workoutId: workoutId,
                        isExerciseCompleted: false,
                      },
                      workoutId
                    )
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
