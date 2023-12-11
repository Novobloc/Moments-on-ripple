import React from "react";
import { View, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import AppleIcon from "src/assets/images/home-logo.png";
import { Text } from "@/theme";
import { W3mButton } from "@web3modal/wagmi-react-native";

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
          <Text variant="subheaderBold" gap="md">
            Hello 
          </Text>
         
        </View>
      </TouchableNativeFeedback>
      <View style={styles.icon}>
      <W3mButton />
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
