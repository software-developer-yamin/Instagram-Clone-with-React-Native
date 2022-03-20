import { StyleSheet, View } from "react-native";
import AddNewPost from "../components/NewPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <View style={styles.container}>
      <AddNewPost />
    </View>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
