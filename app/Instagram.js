import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Instagram = ({ route }) => {
  const navigation = useNavigation();

  // const data = route.params;

  console.log(route);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 50, alignSelf: "center" }}>
        {/* <Text>{data.akams.description}</Text> */}
      </View>
    </View>
  );
};

export default Instagram;

const styles = StyleSheet.create({});
