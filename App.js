import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
WebBrowser.maybeCompleteAuthSession();
export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "368086526660-dn5vp6hclvvmpvur7o7rch3922vffjpj.apps.googleusercontent.com",
    iosClientId:
      "368086526660-v3vg37qnlt0bddbh1rns47lt7h06d2ek.apps.googleusercontent.com",
    webClientId:
      "368086526660-tsgm662gimdgt42av0ro6m70ndvv5tc9.apps.googleusercontent.com",
  });
  React.useEffect(() => {
    handleSingInWithGoogle();
  }, [response]);
  async function handleSingInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }
  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {}
  };
  const handleDeleteLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem("@user");
      setUserInfo(null);
    } catch (error) {
      console.log("Error deleting from local storage:", error);
    }
  };
  return (
    // <View style={styles.container}>
    //     <Text>{JSON.stringify(userInfo, null, 2)}</Text>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <Button title="Sign in with Google" onPress={() => promptAsync()} />
    //     <Button title="Delete Local Storage" onPress={handleDeleteLocalStorage} />
    //  {userInfo != null && <Home />}
    //     <StatusBar style="auto" />
    //   </View>

    <NavigationContainer>
      <AuthProvider userInfo={userInfo}>
        <StackNavigator  />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
