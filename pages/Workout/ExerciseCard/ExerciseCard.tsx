import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const ExerciseCard = ({
  name,
  handleAddExercise,
  id,
}: {
  name: string;
  handleAddExercise: any;
  id: string;
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
          title="Add to workout"
          onPress={() => handleAddExercise(name, sets, weight)}
        />
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
