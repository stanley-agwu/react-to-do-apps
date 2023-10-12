import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  const submit_ResetInput = ()=>{
    submitHandler(text)
    setText("")
  }

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new todo task...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color= '#9956c2' onPress={submit_ResetInput} title='add todo' />
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
});