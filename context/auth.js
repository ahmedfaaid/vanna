import React, { createContext, useMemo, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { createProfile } from '../utils/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        try {
          await auth().signInWithEmailAndPassword(data.email, data.password);
        } catch (err) {
          console.log(err);
        }
      },
      signOut: async () => {
        try {
          await auth().signOut();
        } catch (err) {
          console.log(err);
        }
      },
      signUp: async data => {
        try {
          const created = await auth().createUserWithEmailAndPassword(data);

          const { displayName, email, phoneNumber } = created.user;

          await createProfile({ displayName, email, phoneNumber });
        } catch (err) {
          console.log(err);
        }
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{ user, setUser, authContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
