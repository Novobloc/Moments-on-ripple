import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, SafeAreaView, StatusBar, Dimensions } from "react-native";
import { Box, Text } from "@/theme";
import ItemCard from "src/utils/components/ItemCard";

const ListMain = ({ assets }: any) => {
  const { width } = Dimensions.get("window");
  return (
    <ScrollView>
      <SafeAreaView className="bg-[#F0F6F0] flex-1">
        <StatusBar barStyle="dark-content" />
        <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginHorizontal="md" width={width}>
          <View style={{ width: width - 40 }}>
            <Box flexDirection="column" justifyContent="space-between" flex={1} gap="lg" marginTop="md">
              {assets &&
                assets.length > 0 &&
                assets.map((assetItem: any) => {
                  return <ItemCard data={assetItem} />;
                })}
            </Box>
          </View>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ListMain;
