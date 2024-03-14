import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CalculatorButton = ({ onPress, text }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onPress(text)} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CalculatorButton;
