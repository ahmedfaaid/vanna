import React from 'react';
import { StyleSheet, View } from 'react-native';
import Box from '../../../components/Box';

const Business = () => {
  const boxes = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      {boxes.map(box => (
        <Box key={box} category={box} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Business;
