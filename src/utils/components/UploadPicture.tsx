import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text } from "@/theme";
import axios from "axios";
import "viem/window";
import { wagmiContract } from "src/ethers/contract";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

export default function UploadPicture() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { config } = usePrepareContractWrite({
    address: wagmiContract.address,
    abi: wagmiContract.abi,
    functionName: "createAsset",
    args: ["Satya Wallet", "Sen test", imageUrl],
    enabled: true
  });

  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  });

  const uploadImage = async () => {
    const apiUrl = "https://upload-image-and-return-url-by-thichthicodeteam.p.rapidapi.com/api/upload-image";
    const apiKey = "5fe7069d20mshbb5cc34958b7454p1c4b33jsnfb8ebe7c9e6e";
    setIsUploading(true);
    const formData: any = new FormData();
    formData.append("file", {
      uri: image,
      name: "image.jpg",
      type: "image/jpg"
    });
    console.log(formData, "formData");

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Accept: "*/*",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "upload-image-and-return-url-by-thichthicodeteam.p.rapidapi.com",
          "Content-Type": "multipart/form-data"
        }
      });

      // Handle the response as needed
      console.log("Upload response:", response.data.link);
      setIsUploading(false);
      setImageUrl(response.data.link);
    } catch (error) {
      // Handle errors
      console.error("Upload error:", error);
    }
  };

  useEffect(() => {
    console.log(imageUrl, "imageUrl");

    if (imageUrl && imageUrl.length > 0 && !isLoading) {
      write?.();
    }
  }, [imageUrl, isLoading, write]);

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

      <TouchableOpacity onPress={() => uploadImage()} disabled={!write || isLoading}>
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
      {isUploading && <Text>Uploading the image .....</Text>}
    </View>
  );
}
