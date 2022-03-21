import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NavigationProvider from "./screens/NavigationProvider";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationProvider/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
