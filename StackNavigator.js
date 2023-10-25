import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import useAuth from "./hooks/useAuth";
import Login from "./Login";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    const { userInfo } = useAuth();
  return (
    <Stack.Navigator>
      {userInfo != null ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="LoginScreen" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
