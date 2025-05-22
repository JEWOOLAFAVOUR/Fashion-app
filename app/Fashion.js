import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Fashion = () => {
  const navigation = useNavigation();
  const alphabet = [
    { id: 1, letter: "A", description: "A for Apple", color: "#FF6B6B" },
    { id: 2, letter: "B", description: "B for Ball", color: "#FFD93D" },
    { id: 3, letter: "C", description: "C for Cat", color: "#6BCB77" },
    { id: 4, letter: "D", description: "D for Dog", color: "#4D96FF" },
    { id: 5, letter: "E", description: "E for Elephant", color: "#9D4EDD" },
    { id: 6, letter: "F", description: "F for Fish", color: "#FFA41B" },
    { id: 7, letter: "G", description: "G for Goat", color: "#43AA8B" },
    { id: 8, letter: "H", description: "H for Hat", color: "#F15BB5" },
    { id: 9, letter: "I", description: "I for Ice cream", color: "#00BBF9" },
    { id: 10, letter: "J", description: "J for Jug", color: "#FF9F1C" },
    { id: 11, letter: "K", description: "K for Kite", color: "#3A86FF" },
    { id: 12, letter: "L", description: "L for Lion", color: "#8338EC" },
    { id: 13, letter: "M", description: "M for Monkey", color: "#FB5607" },
    { id: 14, letter: "N", description: "N for Nose", color: "#FF006E" },
    { id: 15, letter: "O", description: "O for Orange", color: "#F3722C" },
    { id: 16, letter: "P", description: "P for Parrot", color: "#06D6A0" },
    { id: 17, letter: "Q", description: "Q for Queen", color: "#EF476F" },
    { id: 18, letter: "R", description: "R for Rabbit", color: "#118AB2" },
    { id: 19, letter: "S", description: "S for Sun", color: "#FFD166" },
    { id: 20, letter: "T", description: "T for Tiger", color: "#073B4C" },
    { id: 21, letter: "U", description: "U for Umbrella", color: "#F94144" },
    { id: 22, letter: "V", description: "V for Van", color: "#90BE6D" },
    { id: 23, letter: "W", description: "W for Watch", color: "#577590" },
    { id: 24, letter: "X", description: "X for Xylophone", color: "#FFB703" },
    { id: 25, letter: "Y", description: "Y for Yak", color: "#A8DADC" },
    { id: 26, letter: "Z", description: "Z for Zebra", color: "#6A4C93" },
  ];

  return (
    <View style={styles.page}>
      <FlatList
        data={alphabet}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Random", { akams: item })}
              activeOpacity={0.5}
              style={[
                styles.container,
                { backgroundColor: item.color, marginBottom: 15 },
              ]}
            >
              <Text>{item.letter}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Fashion;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  container: {
    height: 50,
    // backgroundColor: "blue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
