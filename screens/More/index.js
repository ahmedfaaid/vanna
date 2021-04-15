import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SubmitButton from '../../components/SubmitButton';
import { AuthContext } from '../../context/auth';

const MoreStack = createStackNavigator();

const More = () => {
  const {
    authContext: { signOut },
  } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SubmitButton text="Sign Out" press={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default More;

export const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} />
    </MoreStack.Navigator>
  );
};
