import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Modal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtnContainer}
        onPress={() => navigation.pop()}>
        <MaterialIcon
          name="close"
          color="#D90429"
          solid
          style={styles.closeBtn}
        />
      </TouchableOpacity>
      <Text>Modal</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  closeBtnContainer: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  closeBtn: {
    fontSize: 25,
    fontWeight: '300',
  },
});

export default Modal;
