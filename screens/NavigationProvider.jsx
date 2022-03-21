// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createNativeStackNavigator();

function NavigationProvider() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationProvider;
// ... other code from the previous section
