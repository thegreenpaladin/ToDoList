import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "../components/Task";

function HomeScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemSection}>
        <Text style={styles.sectionHeading}>Today's tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTaskSection}
      >
        <TextInput
          style={styles.taskInput}
          placeholder="Add new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addTaskBtn}>
            <Text style={styles.addSymbol}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  itemSection: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  sectionHeading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  addTaskSection: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  taskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    backgroundColor: "white",
    width: 250,
  },
  addTaskBtn: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addSymbol: {
    fontSize: 30,
    color: "lightgrey",
  },
});

export default HomeScreen;
