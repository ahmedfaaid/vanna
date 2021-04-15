import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Modal = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <FontAwesome5 name="times" color="#D90429" solid />
      </TouchableOpacity>
      <Text>Modal</Text>
    </SafeAreaView>
  );
};

export default Modal;
