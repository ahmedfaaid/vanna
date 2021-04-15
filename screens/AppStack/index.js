import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import AppDrawerScreen from '../AppDrawer';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Splash from '../Splash';
import Loading from '../Loading';

import { AuthContext } from '../../context/auth';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'Sign In' }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: 'Sign Up' }}
    />
  </AuthStack.Navigator>
);

const AppStack = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line no-shadow
  const onAuthStateChanged = user => {
    setUser(user);

    if (isLoading) {
      setIsLoading(false);
    }
  };

  let screenToShow;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);

      if (isLoading) {
        setIsLoading(false);
      }
    });
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    screenToShow = <Loading />;
  }

  if (user) {
    screenToShow = <AppDrawerScreen />;
  } else {
    screenToShow = <AuthStackScreen />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>{screenToShow}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppStack;
