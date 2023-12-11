import React, { useEffect } from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import Header from "src/components/layout/Header";
import { useGlobalContext } from "src/context/GlobalContext/GlobalContext";
import MintMain from "src/components/mint/Main";
import { W3mButton } from "@web3modal/wagmi-react-native";

const MintPage: React.FC = ({ navigation }: any) => {
  const { setAppLoading, appLoading } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="bg-[#F0F6F0]  flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />
        <View style={{ paddingTop: 16 }}>
          <Header navigation={navigation} path={"entry"} />
          <MintMain />
          <W3mButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MintPage;
