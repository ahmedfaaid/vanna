import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormField = ({
  fieldName,
  placeholder,
  autoCapitalize,
  secureTextEntry,
  type,
  method,
}) => {
  return (
    <View style={styles.inputSection}>
      <Text style={styles.inputLabel}>{fieldName}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={type}
        onChangeText={method}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#000',
    marginBottom: 10,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
  },
});

export default FormField;
