import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addPuffPuff, removePuffPuff } from "../../redux/action";

const SplashScreen = () => {
  const puff_puff = useSelector((state) => state.puff_puff);
  const dispatch = useDispatch();

  return (
    <View style={styles.page}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
        {puff_puff} Puff Puff
      </Text>
      <View style={{ marginBottom: 30 }} />
      <Button
        title="Remove Puff-Puff"
        onPress={() => dispatch(removePuffPuff(1))}
      />
      <View style={{ marginBottom: 30 }} />
      <Button title="Add Puff-Puff" onPress={() => dispatch(addPuffPuff(5))} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 20,
  },
});

// import { useNavigation } from "expo-router";
// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { registerUser } from "../../api/auth";
// import FormInput from "./FormInput";

// const SplashScreen = () => {
//   const navigation = useNavigation();
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async () => {
//     const body = { firstname, lastname, email, password };

//     const response = await registerUser(body);

//     console.log("response from registerUser:", response);

//     if (response?.data?.created === true) {
//       navigation.navigate("VerifyEmail", { item: response.data.user });
//     } else if (response?.data?.checkStatus === "verify-later") {
//       navigation.navigate("VerifyEmail", { item: response.data });
//     } else {
//       console.log("errrrrrrrrrrrrr", response);
//     }

//     // navigation.navigate("VerifyEmail");
//   };

//   return (
//     <View style={styles.page}>
//       <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
//         Login account
//       </Text>
//       {/* inputs */}
//       <View style={{ marginTop: 20 }}>
//         <FormInput
//           title={"First Name"}
//           placeholder={"Enter first name"}
//           value={firstname}
//           setValue={setFirstName}
//         />
//         <FormInput
//           title={"Last Name"}
//           placeholder={"Enter last name"}
//           value={lastname}
//           setValue={setLastName}
//         />
//         <FormInput
//           title={"Email"}
//           placeholder={"Enter email"}
//           value={email}
//           setValue={setEmail}
//         />
//         <FormInput
//           title={"Password"}
//           placeholder={"Enter password"}
//           value={password}
//           setValue={setPassword}
//         />
//       </View>
//       {/* btn */}
//       <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
//         <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>
//           Submit
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     paddingHorizontal: 20,
//     paddingTop: 10,
//   },
//   inputCtn: {
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginTop: 10,
//     justifyContent: "center",
//     paddingHorizontal: 10,
//   },
//   button: {
//     height: 50,
//     backgroundColor: "#042732",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 5,
//     marginTop: 20,
//   },
// });
