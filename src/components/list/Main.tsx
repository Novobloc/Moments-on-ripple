import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, SafeAreaView, StatusBar, Dimensions } from "react-native";
import { Box, Text } from "@/theme";
import ItemCard from "src/utils/components/ItemCard";

const WelcomeTitle = () => (
  <Box paddingTop="xl">
    <Text variant="headerMedium">Welcome to List Page</Text>
  </Box>
);

const imageData = {
  imageUrl: "https://avatars.githubusercontent.com/u/52450973?v=4",
  name: "My DP",
  description: "This is my favorite image"
};

const ListMain: React.FC = () => {
  const { width } = Dimensions.get("window");
  return (
    <ScrollView>
      <SafeAreaView className="bg-[#F0F6F0] flex-1">
        <StatusBar barStyle="dark-content" />
        <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginHorizontal="md" width={width}>
          <View style={{ width: width - 40 }}>
            <Box flexDirection="column" justifyContent="space-between" flex={1} gap="lg" marginTop="md">
              <ItemCard data={imageData} />
              <ItemCard data={imageData} />
              <ItemCard data={imageData} />
            </Box>
          </View>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ListMain;
