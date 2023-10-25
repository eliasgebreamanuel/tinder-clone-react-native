import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import tw from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          title="Go To Chat Screen"
          onPress={() => navigation.navigate("Chat")}
          style={{ width: "50%" }} // Set the desired percentage value
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
