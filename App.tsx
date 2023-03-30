import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { NativeBaseProvider } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

export default function App() {
  EStyleSheet.build({
    $textColor: "#0275d8",
    $lightGray: "#f2f2f2",
    $darkGray: "#d3d3d3",
  });
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
