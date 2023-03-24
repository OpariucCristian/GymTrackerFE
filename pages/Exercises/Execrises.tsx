import { useNavigation,NavigationProp } from "@react-navigation/native";
import React from "react";
import { ActionBar,Button, Text, View } from "react-native-ui-lib";
import { RootStackParamList } from "../../models/root-stack-param-list";
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/core';

const ExercisesPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Text>Exercises</Text>
      <Text>Exercise list</Text>
      <ActionBar
        actions={[
          { label: "Profile", onPress: () => navigation.navigate('Profile', {id:1}) },
          { label: "Start Workout", onPress: () => navigation.navigate('Workout', {id:1}) },
          { label: "Exercises", onPress: () => navigation.navigate('Exercises', {id:1}) },
        ]}
      />
    </>
  );
};

export default ExercisesPage;
