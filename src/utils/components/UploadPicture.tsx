import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text } from "@/theme";

export default function UploadPicture({ mint, isLoading, isSuccess, data }: any) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <TouchableOpacity onPress={() => mint()} disabled={!mint || isLoading}>
        <View style={{ padding: 16, backgroundColor: "#000000", alignItems: "center", borderRadius: 8, marginTop: 6 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Upload</Text>
        </View>
      </TouchableOpacity>

      {isSuccess && (
        <Text>
          Successfully minted your NFT!
          {data?.hash}
        </Text>
      )}
    </View>
  );
}
