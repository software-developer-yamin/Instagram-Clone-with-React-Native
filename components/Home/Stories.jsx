import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <Image source={{ uri: story.image }} />
        ))}
      </ScrollView>
      <Text style={{ color: "#fff" }}>Stories</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
     story: {
          
     }
});
