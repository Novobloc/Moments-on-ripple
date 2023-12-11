import React from "react";
import { Image, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Box, Text } from "@/theme";

const ItemCard = ({ data }: any) => {
  const { width } = useWindowDimensions();

  const getCardWidth = () => {
    if (width < 414) {
      return width - 45;
    } else {
      return 335;
    }
  };

  return (
    <React.Fragment>
      <TouchableOpacity>
        <View
          style={{ width: getCardWidth(), height: 150 }}
          className="bg-white rounded-lg overflow-hidden border border-neutral-200 justify-start items-start flex flex-row"
        >
          <Image className="w-auto" style={{ height: 150, width: 120 }} source={{ uri: data.imageUrl }} />
          <Box paddingHorizontal="md" gap="sm" paddingTop="sm" flexDirection="column">
            <Text variant="subheaderBold">{data.name}</Text>
            <Text variant="body">{data.description}</Text>
          </Box>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default ItemCard;
