import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../../utils/colors';

const SalesCard = ({ text, discount, image, color }) => {
  return (
    <TouchableOpacity
      style={[styles.saleCard, { backgroundColor: colors[color] }]}>
      <Text>{text}</Text>
      <Text>{discount}%</Text>
      <Text>OFF</Text>
      <Image source={image} style={styles.saleImage} />
    </TouchableOpacity>
  );
};

export default SalesCard;

const styles = StyleSheet.create({
  saleCard: {
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  saleImage: {
    flex: 1,
    width: '10%',
    resizeMode: 'contain',
  },
});
