import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ExercisesPage from "../pages/Exercises";
// import ProfilePage from "../pages/Profile";
import { WorkoutPage } from "../pages/Workout/Workout";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* {mockScreens.map((screen,index:number) =>{
      return <Stack.Screen key={index} name={screen.name} component={screen.component}/>
    })} */}
      {/* <Stack.Screen  name={"Profile"} component={ProfilePage}/> */}
      <Stack.Screen name={"Workout"} component={WorkoutPage} />
      {/* <Stack.Screen  name={"Exercises"} component={ExercisesPage}/> */}
      {/* <Stack.Screen  name={"Test"} component={Test}/> */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
