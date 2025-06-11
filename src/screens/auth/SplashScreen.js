import { icons } from "@/src/constants";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
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
  const [akamsTodo, setAkamsTodo] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, todo: "Buy groceries", isChecked: true },
    { id: 2, todo: "Walk the dog", isChecked: false },
  ]);

  const addTodo = () => {
    // console.log(akamsTodo);

    if (akamsTodo.trim().length < 1) {
      return Alert.alert("Todo Empty", "Enter a todo", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    const newTodo = {
      id: Math.random(),
      todo: akamsTodo.trim(),
      isChecked: false,
    };

    setTodos([...todos, newTodo]);

    setAkamsTodo("");
  };

  console.log(todos);

  const deleteTodo = (id) => {
    console.log(id);

    const newTodo = todos.filter((data) => data.id !== id);

    setTodos(newTodo);

    console.log(newTodo);
  };

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
        <TouchableOpacity onPress={() => setTodos([])}>
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
                        source={item.isChecked ? icons.check2 : icons.check}
                        style={{ height: 22, width: 22, marginRight: 10 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
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
            value={akamsTodo}
            onChangeText={(value) => setAkamsTodo(value)}
          />
        </View>
        <TouchableOpacity onPress={() => addTodo()} style={styles.plus_icon}>
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
