/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import { AuthContext } from '../../context/auth';

const SignIn = ({ navigation }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const {
    authContext: { signIn },
  } = useContext(AuthContext);

  const emailChange = val => {
    setData({
      ...data,
      email: val,
    });
  };

  const passwordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const submit = signInData => {
    signIn(signInData);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <View style={styles.content}>
            <View style={styles.headingContent}>
              <Text style={styles.heading}>Welcome!</Text>
            </View>
            <View style={styles.form}>
              <FormField
                fieldName="Email"
                placeholder="Your Email"
                autoCapitalize="none"
                method={emailChange}
              />
              <FormField
                fieldName="Password"
                placeholder="Your Password"
                autoCapitalize="none"
                secureTextEntry={true}
                method={passwordChange}
              />
              <SubmitButton text="Sign In" press={() => submit(data)} />
            </View>
            <View style={styles.signUpBtnContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpBtn}>
                  Don't have an account? Sign Up.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: 100,
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
  text: {
    position: 'absolute',
  },
  content: {
    flex: 2,
    marginTop: 10,
  },
  headingContent: {
    paddingVertical: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  form: {
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  signUpBtnContainer: {
    marginTop: 10,
  },
  signUpBtn: {
    textAlign: 'center',
  },
});

export default SignIn;
