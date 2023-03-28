import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Button } from "native-base";

const ExerciseCard = ({
  name,
  handleAddExercise,
  id,
  workoutId,
}: {
  name: string;
  handleAddExercise: (
    name: string,
    sets: string,
    weight: string,
    workoutId: string
  ) => void;
  id: string;
  workoutId: string;
}) => {
  const [sets, setSets] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const handleSetsChange = (sets: string) => {
    setSets(sets);
  };

  const handleWeightChange = (weight: string) => {
    setWeight(weight);
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.exerciseName}>{name}</Text>
      <TextInput
        placeholder="Sets"
        style={styles.inputField}
        onChangeText={(sets) => handleSetsChange(sets)}
        value={sets}
      />
      <TextInput
        placeholder="Kg"
        style={styles.inputField}
        onChangeText={(weight) => handleWeightChange(weight)}
        value={weight}
      />

      <View style={styles.button}>
        <Button
          disabled={!sets || !weight}
          onPress={() => handleAddExercise(name, sets, weight, workoutId)}
        >
          Add to workout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 4,
    paddingHorizontal: 10,
  },
  inputField: {
    width: "15%",
    borderWidth: 1,
    borderColor: "gray",
  },
  button: {
    width: "25%",
  },
  exerciseName: {
    width: "25%",
  },
});

export default ExerciseCard;
