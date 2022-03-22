// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NewPostScreen from "./NewPostScreen";
import SignUpScreen from "./SignUpScreen";

const Stack = createNativeStackNavigator();

function NavigationProvider() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleUser = (user) => user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => auth.onAuthStateChanged((user) => handleUser(user)), []);

  console.log(currentUser);

  return (
    <NavigationContainer>
      {currentUser ? <SignInStack /> : <SignOutStack />}
    </NavigationContainer>
  );
}

const SignInStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="NewPost" component={NewPostScreen} />
  </Stack.Navigator>
);

const SignOutStack = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

export default NavigationProvider;
