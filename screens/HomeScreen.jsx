import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BottomTabs, { BottomTabIcons } from "../components/Home/BottomTabs";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { db } from "../firebase";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      db.collectionGroup("posts").orderBy("createdAt","desc").onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      }),
    []
  );

  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
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
