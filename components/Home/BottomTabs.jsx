import { StyleSheet, Text, View } from "react-native";

export const BottomTabIcon = [
  {
    name: "Home",
    active: "",
    inactive: "https://img.icons8.com/fluency-systems-regular/344/home.png",
  },
];

const BottomTabs = () => {
  return (
    <View>
      <Text style={{color: "white"}} >BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
