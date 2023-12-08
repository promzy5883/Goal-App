import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ addGoal, visible, closeModal }) {
  const [enteredGoalValue, setEnteredGoalValue] = useState("");

  const handleAddGoal = () => {
    if (enteredGoalValue.trim().length > 0) {
      addGoal(enteredGoalValue);
      setEnteredGoalValue("");
    }
  };

  const handleGoalInputChange = (value) => {
    setEnteredGoalValue(value);
  };

  return (
    <Modal visible={visible} animationType="slide" style={styles.modalStyle}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={enteredGoalValue}
          onChangeText={handleGoalInputChange}
          style={styles.inputStyle}
          placeholder="Enter Goal"
        />
        <View style={styles.buttonsRow}>
          <Button title="Cancel" onPress={closeModal} color="#f31282" />
          <Button onPress={handleAddGoal} title="Add Goal" color="#b180f0" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#311b6b",
  },
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#e4D0ff",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#e4D0ff",
    color: "#120438",
  },
  modalStyle: {
    flex: 1,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingTop: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
