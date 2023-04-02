import React, { useEffect, useState } from "react";
import { View, StyleSheet, Linking } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Box, Button, Input, Text } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import Dropdown from "../../../components/dropdown/Dropdown";
import { generateUUID } from "../../../utils/uuid";

const ExerciseCard = ({
  name,
  handleAddExercise,
  workoutId,
  youtubeLink,
}: {
  name: string;
  handleAddExercise: (
    name: string,
    sets: number | undefined,
    weight: number | undefined,
    reps: number | undefined,
    workoutId: string
  ) => void;
  workoutId: string;
  youtubeLink?: string;
}) => {
  const [sets, setSets] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [reps, setReps] = useState<number>();

  const handleSetsChange = (sets: number) => {
    setSets(sets);
  };

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
                  placeholder="Sets"
                  keyboardType="numeric"
                  style={styles.inputField}
                  onChangeText={(sets) => handleSetsChange(Number(sets))}
                  value={sets?.toString() || ""}
                />
              </Box>

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
                  isDisabled={!sets || !weight || !reps}
                  onPress={() =>
                    handleAddExercise(name, sets, reps, weight, workoutId)
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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  cardContainer: {
    flex: 1,
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
    padding: 4,
    paddingHorizontal: 10,
  },
  inputFieldContainer: {
    width: "4rem",
  },
  inputField: {
    height: "2rem",
  },
  button: {
    width: "25%",
  },
  exerciseName: {
    alignSelf: "center",
    width: "25%",
  },

  dropDownContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  workoutControlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 4,
    paddingHorizontal: 10,
  },
});

export default ExerciseCard;
