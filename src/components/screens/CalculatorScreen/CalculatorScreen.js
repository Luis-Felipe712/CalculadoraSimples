import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../../Display.js';
import CalculatorButton from '../../CalculatorButton/CalculatorButton.js';

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttonsContainer}>
        <CalculatorButton onPress={handlePress} text="7" />
        <CalculatorButton onPress={handlePress} text="8" />
        <CalculatorButton onPress={handlePress} text="9" />
        <CalculatorButton onPress={handlePress} text="/" />
      </View>
      <View style={styles.buttonsContainer}>
        <CalculatorButton onPress={handlePress} text="4" />
        <CalculatorButton onPress={handlePress} text="5" />
        <CalculatorButton onPress={handlePress} text="6" />
        <CalculatorButton onPress={handlePress} text="*" />
      </View>
      <View style={styles.buttonsContainer}>
        <CalculatorButton onPress={handlePress} text="1" />
        <CalculatorButton onPress={handlePress} text="2" />
        <CalculatorButton onPress={handlePress} text="3" />
        <CalculatorButton onPress={handlePress} text="-" />
      </View>
      <View style={styles.buttonsContainer}>
        <CalculatorButton onPress={handlePress} text="C" />
        <CalculatorButton onPress={handlePress} text="0" />
        <CalculatorButton onPress={handlePress} text="=" />
        <CalculatorButton onPress={handlePress} text="+" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default CalculatorScreen;
