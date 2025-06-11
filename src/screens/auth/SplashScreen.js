import { icons } from "@/src/constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SplashScreen = () => {
  const todos = [
    { id: 1, todo: "Buy groceries", isChecked: false },
    { id: 2, todo: "Walk the dog", isChecked: false },
  ];

  return (
    <View style={styles.page_container}>
      {/* HEADER  */}
      <View
        style={{ marginBottom: 20, flexDirection: "row", alignItems: "center" }}
      >
        <Text
          style={{ fontSize: 20, color: "black", fontWeight: "bold", flex: 1 }}
        >
          Hi Jacob,
        </Text>
        <TouchableOpacity>
          <Icon name="trash" size={25} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
      {/* Todos */}
      <StatusBar />
      <View>
        <FlatList
          data={todos}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.todo_container}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#333333",
                      fontSize: 16,
                      marginLeft: 20,
                      flex: 1,
                      textDecorationLine: item.isChecked
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.todo}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        source={icons.check}
                        style={{ height: 22, width: 22, marginRight: 10 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={icons.trash}
                        style={{ width: 22, height: 22 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* Add tasks */}
      <View style={styles.input_container}>
        <View style={styles.input_field}>
          <TextInput
            placeholder="Enter a new To-do"
            placeholderTextColor={"#B7B7B7"}
            style={{ paddingLeft: 20 }}
          />
        </View>
        <TouchableOpacity style={styles.plus_icon}>
          <Image source={icons.plus} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  todo_container: {
    height: 50,
    justifyContent: "center",
    borderColor: "#D1D1D1",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
  },

  input_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#D1D1D1",
  },

  input_field: {
    height: 45,
    flex: 1,
    borderColor: "#D1D1D1",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
  },

  plus_icon: {
    height: 45,
    width: 45,
    borderColor: "#D1D1D1",
    borderWidth: 2,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
