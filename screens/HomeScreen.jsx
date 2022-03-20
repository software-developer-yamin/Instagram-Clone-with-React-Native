import { StyleSheet, View } from "react-native";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
