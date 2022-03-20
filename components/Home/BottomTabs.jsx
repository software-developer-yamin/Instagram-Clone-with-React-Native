import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";

export const BottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/344/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/344/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios-glyphs/344/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/344/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/external-nawicon-glyph-nawicon/344/ffffff/external-shop-location-nawicon-glyph-nawicon.png",
    inactive:
      "https://img.icons8.com/external-nawicon-detailed-outline-nawicon/344/ffffff/external-shop-location-nawicon-detailed-outline-nawicon.png",
  },
  {
    name: "Profile",
    active:
      "https://lh3.googleusercontent.com/ogw/ADea4I5tfC6tDLzsiqJRDsPoa-Sjz-GUUTPfPDehgih0=s32-c-mo",
    inactive:
      "https://lh3.googleusercontent.com/ogw/ADea4I5tfC6tDLzsiqJRDsPoa-Sjz-GUUTPfPDehgih0=s32-c-mo",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTap, setActiveTap] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTap(icon.name)}>
      <Image
        source={{ uri: activeTap === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTap === "Profile" && icon.name === activeTap
            ? styles.profilePic(activeTap)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#000",
    zIndex: 999,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTap = "") => ({
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: activeTap === "Profile" ? 2 : 0,
  }),
});
