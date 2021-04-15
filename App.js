import 'react-native-gesture-handler';
import React from 'react';
import AppStack from './screens/AppStack';
import {AuthProvider} from './context/auth';

const App = () => {
  return (
    <AuthProvider>
      <AppStack />
    </AuthProvider>
  );
};

export default App;
