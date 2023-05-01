import React, { useState } from "react";
import { Linking, View } from "react-native";
import { Box, Button, Input, Modal, Text } from "native-base";
import Dropdown from "../../../../components/dropdown/Dropdown";
import ExerciseCardProps from "../../../../models/PropModels/ExerciseCardProps";
import styles from "./ExerciseInputField.styles";
import { generateUUID } from "../../../../utils/uuid";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Haptics from "expo-haptics";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../../../hooks/toogle-hook";

const ExerciseCard = (props: ExerciseCardProps) => {
  const {
    name,
    handleAddExercise,
    workoutId,
    youtubeLink,
    primaryMuscles,
    secondaryMuscles,
  } = props;

  const [isInfoModalOpen, toggleInfoModalOpen] = useToggle(false);

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

  const handleInfoIconPress = (): void => {
    toggleInfoModalOpen();
  };

  return (
    <React.Fragment>
      <Box style={styles.exerciseInputFieldContainer}>
        <Box style={styles.contentContainer}>
          <Text style={styles.exerciseText}>{name}</Text>
          <Box style={styles.workoutControlsContainer}>
            {youtubeLink && (
              <Text style={styles.youtubeIcon} onPress={handleInfoIconPress}>
                <FontAwesomeIcon size={25} icon={faCircleInfo} />
              </Text>
            )}

            <Button onPress={handleAddExercisePress}>Add</Button>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isInfoModalOpen}>
        <Box style={styles.exerciseInfoModalContainer}>
          <Modal.CloseButton onPress={toggleInfoModalOpen} />

          <Text>
            Primary muscles:{" "}
            {primaryMuscles?.map((muscle, index) => {
              return (
                <React.Fragment key={index}>
                  <Text>{`${muscle.charAt(0).toUpperCase()}${muscle.slice(
                    1
                  )}`}</Text>
                  {index !== primaryMuscles?.length - 1 && <Text>, </Text>}
                </React.Fragment>
              );
            })}
          </Text>
          <Text>
            Secondary muscles:{" "}
            {secondaryMuscles?.map((muscle, index) => {
              return (
                <React.Fragment key={index}>
                  <Text>{`${muscle.charAt(0).toUpperCase()}${muscle.slice(
                    1
                  )}`}</Text>
                  {index !== secondaryMuscles.length - 1 && <Text>, </Text>}
                </React.Fragment>
              );
            })}
          </Text>
          <Text onPress={() => Linking.openURL(`${youtubeLink}`)}>
            <FontAwesomeIcon size={30} icon={faYoutube} />
          </Text>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ExerciseCard;
