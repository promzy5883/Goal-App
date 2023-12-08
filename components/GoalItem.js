import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ text, id, deleteItem }) {
  return (
    <Pressable
      onPress={() => deleteItem(id)}
      style={({ pressed }) => pressed && { opacity: 0.7 }}
    >
      <View style={styles.goalBox}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalBox: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 12,
    backgroundColor: "#5e0acc",
    marginBottom: 10,
  },
});
