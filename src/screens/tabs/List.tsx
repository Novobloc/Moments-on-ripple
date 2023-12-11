import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import Header from "src/components/layout/Header";
import ListMain from "src/components/list/Main";
import { http, createPublicClient } from "viem";
import { wagmiContract } from "src/ethers/contract";
import { XRPL } from "src/utils/CustomChain";

const ListPage: React.FC = ({ navigation }: any) => {
  const [assets, setAssets]: any = useState([]);

  const client = createPublicClient({
    chain: XRPL,
    transport: http()
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assetsData] = await Promise.all([
          client.readContract({
            ...wagmiContract,
            functionName: "getAssets"
          })
        ]);
        console.log(assetsData, "assetsData");
        setAssets(assetsData);

        // Do something with the data (e.g., set state or perform other actions)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function

    return () => {};
  }, []);

  return (
    <SafeAreaView className="bg-[#F0F6F0]  flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />
        <View style={{ paddingTop: 16 }}>
          <Header navigation={navigation} path={"entry"} />
          <ListMain assets={assets} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPage;
