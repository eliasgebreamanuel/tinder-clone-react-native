import { View, Text } from 'react-native';
import React, { createContext, useContext } from 'react';
//import * as Google from "expo-google-app-auth";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signout } from '@firebase/auth';
const AuthContext = createContext({});
export const AuthProvider = ({ userInfo, children }) => {
  return (
    <AuthContext.Provider value={{userInfo: userInfo}}>
        {children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
    return useContext(AuthContext);
}

