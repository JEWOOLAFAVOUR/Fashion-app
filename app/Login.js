import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Bottom")}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({});
