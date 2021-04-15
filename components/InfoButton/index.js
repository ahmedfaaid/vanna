import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function InfoButton({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
  },
  box: {
    width: '100%',
    height: 100,
  },
  innerBox: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default InfoButton;
