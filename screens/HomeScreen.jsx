import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BottomTabs, { BottomTabIcons } from "../components/Home/BottomTabs";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";
import { db } from "../firebase";

const HomeScreen = () => {
  useEffect(
    () =>
      db.collectionGroup("posts").onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
      }),
    []
  );

  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={BottomTabIcons} />
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
