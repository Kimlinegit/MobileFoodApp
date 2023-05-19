import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default CustomTextInput;
