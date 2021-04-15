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

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#D90429" />
      <View style={styles.top}>
        <View style={styles.imageContainer}>
          <View style={styles.inner}>
            <Image
              source={require('./images/undraw_visionary_technology.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.getStarted}>Get Started</Text>
        <View style={styles.btnsContainer}>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#D90429' }]}
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: '#FFF',
                  borderColor: '#EF233C',
                },
              ]}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.btnText, { color: '#2B2D42' }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D90429',
  },
  imageContainer: {
    flex: 1,
    width: '60%',
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
  top: {
    flex: 2,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStarted: {
    color: '#2B2D42',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  btnsContainer: {
    width: '90%',
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    marginVertical: 10,
    paddingVertical: 10,
    width: '80%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

export default Splash;
