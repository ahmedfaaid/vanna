import React from 'react';
import { StyleSheet, View } from 'react-native';
import Box from '../../../components/Box';

const Main = () => {
  const categories = [
    {
      id: 'JBUTgEcwTAbCMxz75C2f',
      text: 'Grocery Shopping',
      image: require('../images/undraw_grocery.png'),
    },
    {
      id: 't639mNXGDrd8K6HdTH12',
      text: 'Plumbing',
      image: require('../images/undraw_plumbing.png'),
    },
    {
      id: '0zIBXQa6yCmTgC5aSBgx',
      text: 'Home Cleaning',
      image: require('../images/undraw_cleaning.png'),
    },
    {
      id: 'LxBSo5WOCuOVtesGzpQx',
      text: 'Painting',
      image: require('../images/undraw_painting.png'),
    },
    {
      id: '531MKimcJpWPSJ32H05k',
      text: 'Lawn Care',
      image: require('../images/undraw_lawn.png'),
    },
    {
      id: 'LugR3LLFyex839CqmKpR',
      text: 'Electrician',
      image: require('../images/undraw_electrician.png'),
    },
    {
      id: 'aW6210CdOKqRu9g4sdiK',
      text: 'Tech Help',
      image: require('../images/undraw_tech.png'),
    },
  ];

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
