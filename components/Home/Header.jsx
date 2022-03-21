import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/header-logo.jpg")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewPost")} >
          <AntDesign
            name="plussquareo"
            style={{ marginLeft: 10 }}
            size={25}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            style={{ marginLeft: 10 }}
            size={25}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative" }}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>11</Text>
          </View>
          <FontAwesome5
            name="facebook-messenger"
            style={{ marginLeft: 10 }}
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadText: {
    color: "white",
    fontWeight: "600",
  },
});
