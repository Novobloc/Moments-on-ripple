import React, { useState } from "react";
import { StatusBar, View, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginHeader from "src/components/layout/LoginHeader";
import TextInput from "src/utils/inputs/TextInput";
import { IconPointFilled } from "tabler-icons-react-native";
import { Text } from "@/theme";
import { registerUser } from "src/api/user/registerUser";

const Register: React.FC = ({ navigation }: any) => {
  const { height } = Dimensions.get("window");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = () => {
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const userData = {
      email: email,
      password: password
    };

    registerUser(userData)
      .then((response) => {
        console.log("Registration successful", response.data);
        navigation.navigate("verifyemail");
      })
      .catch((error) => {
        console.error("Registration error", error);
        setError("Registration failed. Please check your credentials.");
      });
  };

  return (
    <View style={styles.modalContainer}>
      <SafeAreaView className="flex-1">
        <StatusBar barStyle="dark-content" />
        <View style={{ height: height - 120 }}>
          <View style={styles.Container}>
            <View>
              <LoginHeader path="entry" navigation={navigation} />
              <View className="mt-8">
                <Text variant="header" color="anchorGreenDark">
                  Create an account
                </Text>
              </View>

              <View className="mt-1">
                <TextInput label={"Email"} placeholder="Enter email" onChangeText={setEmail} isValid />
                <TextInput label={"Password"} placeholder="Enter password" onChangeText={setPassword} secureTextEntry={true} isValid />
              </View>

              <View className="mt-2">
                <Text className="text-xs leading-5">Password must contain:</Text>
                <View style={styles.dot}>
                  <IconPointFilled size={6} color="#022D2B" />
                  <Text className="text-xs leading-5 text-[#022D2B]">At least 8 characters</Text>
                </View>
                <View style={styles.dot}>
                  <IconPointFilled size={6} color="#022D2B" />
                  <Text className="text-xs leading-5 text-[#022D2B]">A mixture of both uppercase and lowercase letters</Text>
                </View>
                <View style={styles.dot}>
                  <IconPointFilled size={6} color="#022D2B" />
                  <Text className="text-xs leading-5 text-[#022D2B]">A mixture of letters and numbers</Text>
                </View>
                <View style={styles.dot}>
                  <IconPointFilled size={6} color="#022D2B" />
                  <Text className="text-xs leading-5 text-[#022D2B]">At least one special character, e.g., ! @ # ? ]</Text>
                </View>

                <View style={styles.terms}>
                  <TouchableOpacity onPress={handleRegistration}>
                    <View className="p-4 bg-[#000000] items-center rounded-md mt-6">
                      <Text className="text-base font-semibold text-white">Create an account</Text>
                    </View>
                  </TouchableOpacity>
                  {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
                </View>
              </View>
            </View>

            <View style={styles.haveAccount}>
              <Text className="text-sm font-normal text-[#022D2B]">Have an account already?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <View>
                  <Text className="ml-1 text-sm font-semibold text-[#022D2B] underline">Log in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F6F0",
    padding: 16
  },
  Container: {
    flex: 1,
    justifyContent: "space-between"
  },
  dot: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: 5
  },
  terms: {
    flexDirection: "column",
    marginTop: 24
  },
  creating: {
    flexDirection: "row"
  },
  haveAccount: {
    flexDirection: "row"
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3
  }
});
