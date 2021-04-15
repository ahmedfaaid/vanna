import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SubmitButton = ({ text, press }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={press}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    marginVertical: 10,
    backgroundColor: '#D90429',
    paddingVertical: 10,
    width: '80%',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

export default SubmitButton;
