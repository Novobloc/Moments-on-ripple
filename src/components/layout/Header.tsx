import React from "react";
import { Text, View, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { IconBell, IconMessageCircle2, IconUserCircle } from "tabler-icons-react-native";
import AppleIcon from "src/assets/logos/apple.png";

type IHeader = {
  navigation: any;
  path: string;
};

const Header = ({ navigation, path }: IHeader) => (
  <View style={{ paddingHorizontal: 16 }}>
    <View style={styles.header}>
      <TouchableNativeFeedback onPress={() => navigation.navigate(path)}>
        <View style={styles.mainhead}>
          <Image source={AppleIcon} className="w-5 h-6" />
          <Text className="text-base leading-[21px] font-medium">Hello John</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.icon}>
        <IconBell name="bell" size={21} color="#181818" />
        <IconMessageCircle2 name="message" size={21} color="#181818" />
        <IconUserCircle name="user" size={21} color="#181818" />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F0F6F0"
  },
  mainhead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  icon: {
    flexDirection: "row",
    gap: 16
  }
});

export default Header;
