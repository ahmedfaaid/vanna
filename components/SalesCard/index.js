import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import colors from '../../utils/colors';

const SalesCard = ({ text, discount, image, color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.saleCard,
        { backgroundColor: colors[color] },
        Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow,
      ]}
      onPress={() => alert('Pressed')}>
      <Text style={styles.saleText}>{text}</Text>
      <Text style={styles.saleDiscount}>{discount}%</Text>
      <Text style={styles.off}>OFF</Text>
      <Image source={image} style={styles.saleImage} />
    </TouchableOpacity>
  );
};

export default SalesCard;

const styles = StyleSheet.create({
  saleCard: {
    width: '45%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  saleText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  saleDiscount: {
    fontSize: 28,
    fontWeight: '600',
    marginRight: 30,
  },
  off: {
    fontSize: 20,
    marginRight: 50,
  },
  saleImage: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  iosShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  androidShadow: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
