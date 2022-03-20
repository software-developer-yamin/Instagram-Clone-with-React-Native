import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

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
    name: "Account",
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
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
