import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth';

const ChatScreen = () => {
    const { userInfo } = useAuth();

  return (
    <View>
      <Text>ChatScreen is here Mr. {userInfo.name} and your email address is {userInfo.email}.</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})