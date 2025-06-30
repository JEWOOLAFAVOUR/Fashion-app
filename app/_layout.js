import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import AppStack from "../src/navigator/AppStack";
import AuthStack from "../src/navigator/AuthStack";

const _layout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Main" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default _layout;

const styles = StyleSheet.create({});
