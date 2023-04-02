import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ExercisesPage from "../pages/Exercises";
import { WorkoutPage } from "../pages/Workout/Workout";
import LoginPage from "../pages/Login/Login";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name={"Login"} component={LoginPage} /> */}
      <Stack.Screen name={"Workout"} component={WorkoutPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
