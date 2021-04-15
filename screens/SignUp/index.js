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

const SignUp = ({ navigation }) => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { signUp } = useContext(AuthContext);

  const nameChange = val => {
    setData({
      ...data,
      name: val,
    });
  };

  const phoneChange = val => {
    setData({
      ...data,
      phone: val,
    });
  };

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

  const confirmPasswordChange = val => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };

  const submit = signUpData => {
    signUp(signUpData);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <View style={styles.content}>
            <View style={styles.headingContent}>
              <Text style={styles.heading}>Get Started!</Text>
            </View>
            <View style={styles.form}>
              <FormField
                fieldName="Name"
                placeholder="Your Full Name"
                autoCapitalize="words"
                method={nameChange}
              />
              <FormField
                fieldName="Phone Number"
                placeholder="Your Phone Number"
                autoCapitalize="words"
                type="phone-pad"
                method={phoneChange}
              />
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
              <FormField
                fieldName="Confirm Password"
                placeholder="Confirm Password"
                autoCapitalize="none"
                secureTextEntry={true}
                method={confirmPasswordChange}
              />
              <SubmitButton text="Sign Up" press={submit} />
            </View>
            <View style={styles.signInBtnContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.signInBtn}>
                  Already Signed Up? Sign In.
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
  signInBtnContainer: {
    marginTop: 10,
  },
  signInBtn: {
    textAlign: 'center',
  },
});

export default SignUp;
