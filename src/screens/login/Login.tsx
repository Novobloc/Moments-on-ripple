import React from "react";
import { StatusBar, View, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "src/components/login/LoginForm";
import LoginHeader from "src/components/layout/LoginHeader";
import { Box, Text } from "@/theme";

const Login: React.FC = ({ navigation }: any) => {
  const { height, width } = Dimensions.get("window");

  const navigateToForgotScreen = () => {
    navigation.navigate("forgot");
  };

  return (
    <SafeAreaView className="bg-[#F0F6F0] flex-1">
      <StatusBar barStyle="dark-content" />
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginHorizontal="md" width={width}>
        <View style={{ height: height - 120, width: width - 40 }}>
          <Box flexDirection="column" justifyContent="space-between" flex={1}>
            <LoginHeader path="entry" navigation={navigation} />
            <LoginForm onPress={navigateToForgotScreen} />

            <Box flexDirection="row">
              <Text color="blackPrimary">Have an account already?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Box>
                  <Text color="blackPrimary" variant="label" marginLeft="sm" textDecorationLine="underline">
                    Log in
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default Login;
