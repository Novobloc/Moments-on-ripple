import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, SafeAreaView, StatusBar, Dimensions } from "react-native";
import { Box, Text } from "@/theme";
import UploadPicture from "src/utils/components/UploadPicture";

const WelcomeTitle = () => (
  <Box paddingTop="xl">
    <Text variant="headerMedium">Welcome to Mint Page</Text>
  </Box>
);

const MintMain: React.FC = () => {
  const { width } = Dimensions.get("window");
  return (
    <ScrollView>
      <SafeAreaView className="bg-[#F0F6F0] flex-1">
        <StatusBar barStyle="dark-content" />
        <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginHorizontal="md" width={width}>
          <View style={{ width: width - 40 }}>
            <Box flexDirection="column" justifyContent="space-between" flex={1} gap="lg">
              <UploadPicture />
            </Box>
          </View>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MintMain;
