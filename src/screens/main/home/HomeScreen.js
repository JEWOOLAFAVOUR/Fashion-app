import { StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {/* <Image source={require("../../../assets/icons/icon.png")} /> */}
      <Text onPress={() => navigation.navigate("ProductDetail")}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
