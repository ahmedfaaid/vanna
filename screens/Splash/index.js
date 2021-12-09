/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../utils/colors';

const Splash = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[colors.yellow, colors.yellow, colors.red]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 1 }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView edges={['top']} style={styles.contentContainer}>
        <View style={{ marginBottom: 100 }}>
          <Image
            source={require('./images/goEasy_white.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>A helping hand for your home</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.btnText}>Get Started </Text>
          <Icon name="arrow-right" size={18} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 23,
    color: colors.white,
    marginTop: -80,
  },
  btn: {
    paddingVertical: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
});

export default Splash;
