import React, { useEffect } from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import Header from "src/components/layout/Header";
import { useGlobalContext } from "src/context/GlobalContext/GlobalContext";
import HomeMain from "src/components/home/Main";
import CounterApp from "src/components/home/Counter";

const HomePage: React.FC = ({ navigation }: any) => {
  const { setAppLoading, appLoading, count, setCount } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(true);
    }, 5000);
  }, []);

  console.log(appLoading, "appLoading");

  return (
    <SafeAreaView className="bg-[#F0F6F0]  flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />
        <View style={{ paddingTop: 16 }}>
          <Header navigation={navigation} path={"entry"} />
          <HomeMain />
          <CounterApp count={count} setCount={setCount} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
