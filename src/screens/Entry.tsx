import React from "react";
import { StatusBar, View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/theme";

const Entry: React.FC = ({ navigation }: any) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.modalContainer}>
      <SafeAreaView className=" flex-1">
        <StatusBar barStyle="dark-content" />
        <View style={{ height: height - 120 }}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <View style={styles.mainContainers}>
              <Image style={{ width, height: 132 }} source={require("src/assets/images/apple.png")} />
            </View>
          </TouchableOpacity>
          <View style={styles.subContainer}>
            <Text variant="headerLarge" color="anchorGreenDark">
              Build with
            </Text>
            <Text variant="headerLarge" color="anchorGreenDark">
              React Native
            </Text>
            <Text variant="body" color="anchorGreenDark" paddingTop="md">
              We are building react native apps using expo
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <View className="p-4 mt-6 bg-[#000000] items-center rounded-md">
                <Text variant="subheader" color="white">
                  Create an account
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.haveAccount}>
              <Text variant="body" color="anchorGreenDark">
                Have an account already?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <View>
                  <Text variant="bodyBold" color="blackPrimary" className="underline ml-1">
                    Log in
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F6F0"
  },
  mainContainers: {
    flexDirection: "row",
    paddingHorizontal: 2,
    marginTop: 50
  },
  subContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 32
  },
  haveAccount: {
    flexDirection: "row",
    marginTop: 32
  }
});
