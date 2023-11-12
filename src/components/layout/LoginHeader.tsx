import React from "react";
import { IconChevronLeft } from "tabler-icons-react-native";
import { View, Image, TouchableOpacity } from "react-native";
import { Box, Text } from "@/theme";
import AppleIcon from "src/assets/logos/apple.png";

type ILoginHeader = {
  navigation: any;
  path: string;
};

const LoginHeader = ({ navigation, path }: ILoginHeader) => (
  <Box flexDirection="row" alignItems="center" justifyContent="space-between">
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
      <Box flexDirection="row">
        <IconChevronLeft name="arrowleft" size={24} color="#022D2B" />
        <Text variant="subheader">Back</Text>
      </Box>
    </TouchableOpacity>
    <Box>
      <Image source={AppleIcon} className="w-5 h-6" />
    </Box>
    <View style={{ width: 60 }}></View>
  </Box>
);

export default LoginHeader;
