import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => (
  <View style={styles.display}>
    <Text style={styles.displayText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  display: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  displayText: {
    fontSize: 36,
  },
});

export default Display;
