import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import AppStack from "../src/navigator/AppStack";
import AuthStack from "../src/navigator/AuthStack";
import mercy_provision_store from "../src/redux/store";

const _layout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={mercy_provision_store}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="Main" component={AppStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
