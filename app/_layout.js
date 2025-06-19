import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const _layout = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log("product data", data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text>_layout</Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ height: 30, width: 30 }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10,
  },
});

// import {
//   NavigationContainer,
//   NavigationIndependentTree,
// } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import { StyleSheet } from "react-native";
// import AppStack from "../src/navigator/AppStack";
// import AuthStack from "../src/navigator/AuthStack";

// const _layout = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationIndependentTree>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Auth" component={AuthStack} />

//           <Stack.Screen name="Main" component={AppStack} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NavigationIndependentTree>
//   );
// };

// export default _layout;

// const styles = StyleSheet.create({});
