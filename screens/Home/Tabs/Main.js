import React from 'react';
import { StyleSheet, View } from 'react-native';
import Box from '../../../components/Box';

import categories from '../../../utils/services';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {categories.map(({ id, text, image, description, packages }) => (
        <Box
          key={id}
          category={text}
          image={image}
          press={() =>
            navigation.navigate('Modal', {
              id,
              text,
              image,
              description,
              packages,
            })
          }
        />
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
