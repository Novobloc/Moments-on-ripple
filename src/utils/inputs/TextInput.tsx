import { Text } from "@/theme";
import React from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { IconInfoCircle } from "tabler-icons-react-native";

const TextInput = ({ label, placeholder, error, isValid, ...props }: any) => {
  return (
    <View className="mt-5">
      <Text variant="body">{label}</Text>
      <RNTextInput
        {...props}
        placeholder={placeholder}
        placeholderTextColor="#828282"
        rules={{ required: "Email is required!" }}
        style={{
          fontFamily: "Poppins_400Regular",
          backgroundColor: "#FFFFFF",
          fontSize: 16,
          padding: 16,
          marginTop: 8,
          borderColor: "#BDBDBD",
          borderRadius: 4,
          borderWidth: 1
        }}
      />
      {isValid && isValid === false ? (
        <View className="text-sm rounded-sm py-2 flex flex-row space-x-2">
          <IconInfoCircle name="check" size={24} color="#CF0000" />
          <Text style={{ color: "#CF0000", marginTop: 2 }}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default TextInput;
