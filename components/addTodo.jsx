import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        clearButtonMode='always'
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <View style={styles.button}>
        <Button onPress={() => submitHandler(text)} title='Add ToDo' color='white' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    width: '100%',
    backgroundColor: 'coral',
  },
});
