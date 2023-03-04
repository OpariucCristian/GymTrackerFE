import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button } from "react-native";
import {Colors, Typography, View, ActionBar, PageControl, Carousel} from 'react-native-ui-lib'; //eslint-disable-line
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WorkoutPage from "./pages/Workout";

const Stack = createNativeStackNavigator();

export default function App() {
  const [test, setTest] = useState();
 
  // const fetchFromBe = async () => {
  //   const exercises = await (
  //     await fetch("http://localhost:3000/getExercises")
  //   ).json();

  //   setTest(exercises);
  // };

  // useEffect(() => {
  //   fetchFromBe();
  // }, []);

  const mockScreens = [{name : 'Profile', component: WorkoutPage },{name : 'Workout', component: WorkoutPage }, {name : 'Exercises', component: WorkoutPage }]

  return (
<>
<NavigationContainer>
   <Stack.Navigator>

      {mockScreens.map((screen,index:number) =>{
        return <Stack.Screen key={index} name={screen.name} component={screen.component}/>
      })}
    
   </Stack.Navigator>
</NavigationContainer>

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
