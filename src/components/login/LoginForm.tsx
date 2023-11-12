import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { loginUser } from "src/api/user/loginUser";
import TextInput from "src/utils/inputs/TextInput";
import { Text } from "@/theme";

const LoginForm = ({ onPress }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const data = {
      email: email,
      password: password
    };

    loginUser(data)
      .then((response: any) => {
        console.log("Login successful", response);
      })
      .catch((error: any) => {
        console.log("Login failed", error);
        setError("Login failed. Please check your credentials.");
      });
  };

  return (
    <View>
      <Text className="text-2xl leading-9 font-semibold mb-1">Login</Text>

      <TextInput label={"Email"} placeholder={"Enter your email address"} onChangeText={setEmail} error={"Incorrect email format"} isValid />
      <TextInput
        label={"Password"}
        placeholder="Enter your password"
        className="lowercase"
        secureTextEntry={true}
        onChangeText={setPassword}
        error={"Incorrect password"}
        isValid
      />

      <TouchableOpacity onPress={handleLogin}>
        <View className="p-4 bg-[#000000] items-center rounded-md mt-6">
          <Text className="text-base font-semibold text-white">Log in</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress()}>
        <Text className="text-sm font-medium text-[#022D2B] mt-4 underline">Forgot password?</Text>
      </TouchableOpacity>

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
    </View>
  );
};

export default LoginForm;
