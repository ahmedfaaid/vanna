import React from 'react';
import { StyleSheet, View } from 'react-native';
import Box from '../../../components/Box';

import categories from '../../../utils/services';

const Main = () => {
  return (
    <View style={styles.container}>
      {categories.map(({ id, text, image }) => (
        <Box key={id} category={text} image={image} />
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

export default Main;
