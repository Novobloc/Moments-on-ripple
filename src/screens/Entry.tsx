import React, { useEffect } from "react";
import { StatusBar, View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/theme";
import { W3mButton } from "@web3modal/wagmi-react-native";
import { useAccount, useSendTransaction } from "wagmi";
import { useLinkTo } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

const Entry: React.FC = ({ navigation }: any) => {
  const { height, width } = Dimensions.get("window");
  const { isConnected } = useAccount();
  const linkTo = useLinkTo();

  useFocusEffect(
    React.useCallback(() => {
      console.log(isConnected, "q");

      if (isConnected) {
        linkTo("/home");
      }
    }, [isConnected])
  );

  return (
    <View style={styles.modalContainer}>
      <SafeAreaView className=" flex-1">
        <StatusBar barStyle="dark-content" />
        <View style={{ height: height - 120 }}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <View style={styles.mainContainers}>
              <Image style={{ width, height: 180 }} source={require("src/assets/images/home-logo.png")} />
            </View>
          </TouchableOpacity>
          <View style={styles.subContainer}>
            <Text variant="headerLarge" color="anchorGreenDark">
              Embrace
            </Text>
            <Text variant="headerLarge" color="anchorGreenDark">
              the Present
            </Text>
            <Text variant="body" color="anchorGreenDark" paddingTop="md">
              Capturing Timeless Moments, One Frame at a Time
            </Text>

            <TouchableOpacity>
              <View className="p-4 mt-6 bg-[#000000] items-center rounded-md">
                <W3mButton label={"Connect Wallet"} connectStyle={{ backgroundColor: "black" }} />
              </View>
            </TouchableOpacity>
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
    backgroundColor: "#fff"
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
  },
  haveAccountText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Poppins_400Regular"
  }
});
