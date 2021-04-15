import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Box = ({ category, image }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={() => alert('Pressed')}>
      <View style={styles.innerBox}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlay} />
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '50%',
    height: 200,
    padding: 5,
  },
  innerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    flex: 1,
  },
  text: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    zIndex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
});

export default Box;
