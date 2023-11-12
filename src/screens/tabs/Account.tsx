import React, { useEffect } from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import Header from "src/components/layout/Header";
import { useGlobalContext } from "src/context/GlobalContext/GlobalContext";
import AccountMain from "src/components/account/Main";

const AccountPage: React.FC = ({ navigation }: any) => {
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
          <AccountMain />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountPage;
