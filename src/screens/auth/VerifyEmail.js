import { verifyEmail } from "@/src/api/auth";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormInput from "./FormInput";

const VerifyEmail = ({ route }) => {
  const akams = route.params?.item;
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    const body = {
      otp: otp,
      userId: akams.userId,
    };
    console.log("...........", body);
    console.log("OTP submitted:", otp);
    const response = await verifyEmail(body);

    console.log("response to api", response);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 30,
        paddingHorizontal: 30,
      }}
    >
      <FormInput
        title={"Enter Otp"}
        placeholder={"enter otp number "}
        value={otp}
        setValue={setOtp}
      />

      <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
        <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#042732",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
