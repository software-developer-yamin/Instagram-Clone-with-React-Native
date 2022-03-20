import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "#fff", textAlign: "center" }}>
              @{story.user.length > 11
                ? story.user
                    .substring(0, 10)
                    .replace(" ", "")
                    .toLocaleLowerCase() + "..."
                : story.user.replace(" ", "").toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
