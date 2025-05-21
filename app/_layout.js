import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Fashion from "./Fashion";
import Instagram from "./Instagram";

const _layout = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Fashion" component={Fashion} />
          <Tab.Screen name="Instagram" component={Instagram} />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default _layout;

const styles = StyleSheet.create({});
