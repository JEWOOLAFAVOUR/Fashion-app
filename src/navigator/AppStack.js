import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import ProductDetail from "../screens/main/home/ProductDetail";
import BottomTab from "./BottomTab";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottom" component={BottomTab} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
