import { StyleSheet, Text, TextInput, View } from "react-native";

const FormInput = ({ title, placeholder, value, setValue }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text>{title}</Text>
      <View style={styles.inputCtn}>
        <TextInput
          placeholder={placeholder}
          style={{ fontSize: 16, color: "black" }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputCtn: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
