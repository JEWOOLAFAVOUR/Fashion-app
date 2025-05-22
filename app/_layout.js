import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import Bottom from "./Bottom";
import Login from "./Login";
import Random from "./Random";

const _layout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Bottom" component={Bottom} />
          <Stack.Screen name="Random" component={Random} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default _layout;

const styles = StyleSheet.create({});
