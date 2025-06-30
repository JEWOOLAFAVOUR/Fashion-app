import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormInput from "./FormInput";
const SplashScreen = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const body = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    console.log(body);
  };

  return (
    <View style={styles.page}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        Create account
      </Text>
      {/* inputs */}
      <View style={{ marginTop: 20 }}>
        <FormInput
          title={"First Name"}
          placeholder={"Enter first name"}
          value={firstname}
          setValue={setFirstName}
        />
        <FormInput
          title={"Last Name"}
          placeholder={"Enter last name"}
          value={lastname}
          setValue={setLastName}
        />
        <FormInput
          title={"Email"}
          placeholder={"Enter email"}
          value={email}
          setValue={setEmail}
        />
        <FormInput
          title={"Password"}
          placeholder={"Enter password"}
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* btn */}
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
        <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputCtn: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    backgroundColor: "#042732",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
