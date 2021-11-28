import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AuthContext } from '../../context/auth';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Hi, <Text style={styles.name}>Kojo</Text>!{' '}
        <Icon name="handshake-o" size={30} />
      </Text>
      <Text style={styles.select}>Select a store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  name: {
    color: '#D90429',
  },
});

export default Header;
