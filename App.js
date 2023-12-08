//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [addGoalModal, setAddGoalModal] = useState(false);

  const addGoal = (goal) => {
    setListOfGoals((previous) => [
      ...previous,
      { text: goal, key: Math.random().toString() },
    ]);
    setAddGoalModal(false);
  };

  const deleteGoal = (id) => {
    setListOfGoals((prev) => prev.filter((data) => data.key !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.containerStyle}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={() => setAddGoalModal(true)}
        />
        <GoalInput
          addGoal={addGoal}
          visible={addGoalModal}
          closeModal={() => setAddGoalModal(false)}
        />
        <View style={styles.goalContainer}>
          <FlatList
            style={{
              paddingHorizontal: 20,
            }}
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  deleteItem={deleteGoal}
                  text={itemData.item.text}
                />
              );
            }}
            /* Just incase you want to use the key extractor method
          keyExtractor={(item, index) => {return //UNIQUE KEY}}
           */
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 40,
    flex: 1,
  },

  goalContainer: {
    flex: 7,
    paddingBottom: 15,
    marginTop: 15,
  },
});
