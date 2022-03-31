import { faker } from "@faker-js/faker";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, zIndex: 100 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25,
        ].map((_, index) => (
          <View key={index}>
            <Image
              source={{ uri: faker.image.avatar() }}
              style={styles.story}
            />
            <Text style={{ color: "#fff", textAlign: "center" }}>
              @
              {faker.name.findName().length > 9
                ? faker.name
                    .findName()
                    .substring(0, 6)
                    .replace(" ", "")
                    .toLocaleLowerCase() + "..."
                : faker.name.findName().replace(" ", "").toLocaleLowerCase()}
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
    marginLeft: 18,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
