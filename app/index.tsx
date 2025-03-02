import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/header';
import ToDoItem from '@/components/todoItem';
import AddToDo from '@/components/addTodo';

export default function Index() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const deleteItem = (key: string) => {
    setTodos((prevTodos) => prevTodos.filter((toDo) => toDo.key != key));
  };

  const addItem = (text: string) => {
    if (text.length > 5) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random.toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OOOOPS!', 'ToDos must be over 5 characters long', [
        { text: 'Understood', onPress: () => console.log('Alert CLosed') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={addItem} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <ToDoItem item={item} pressHandler={deleteItem} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
