import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../../models/root-stack-param-list";
import { Text } from "native-base";

const ExercisesPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Text>Exercises</Text>
      <Text>Exercise list</Text>
    </>
  );
};

export default ExercisesPage;
