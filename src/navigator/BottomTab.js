import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/main/cart/CartScreen";
import FavouriteScreen from "../screens/main/favourite/FavouriteScreen";
import HomeScreen from "../screens/main/home/HomeScreen";
import ProfileScreen from "../screens/main/profile/ProfileScreen";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
