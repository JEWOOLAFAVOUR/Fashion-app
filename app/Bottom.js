// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text } from "react-native";
import Fashion from "./Fashion";
import Instagram from "./Instagram";

const Bottom = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Fashion"
        component={Fashion}
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: focused ? 12 : 10,
                }}
              >
                Home
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={{
                  uri: focused
                    ? "https://img.icons8.com/?size=100&id=2797&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=73&format=png&color=000000",
                }}
                style={{
                  height: focused ? 25 : 20,
                  width: focused ? 25 : 20,
                  tintColor: focused ? "red" : "black",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Instagram"
        component={Instagram}
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: focused ? 12 : 10,
                }}
              >
                Search
              </Text>
            );
          },
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=132&format=png&color=000000",
                }}
                style={{
                  height: focused ? 25 : 20,
                  width: focused ? 25 : 20,
                  tintColor: focused ? "red" : "black",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
