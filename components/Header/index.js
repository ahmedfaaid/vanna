import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { AuthContext } from '../../context/auth';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.overlay} />
        <Image
          source={require('./images/undraw_Relaxing_at_home.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Text style={styles.welcome}>WELCOME, </Text>
            {user.displayName.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    padding: 5,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcome: {
    color: '#D90429',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    zIndex: 1,
  },
});

export default Header;
