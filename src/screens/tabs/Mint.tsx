import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import Header from "src/components/layout/Header";
import { useGlobalContext } from "src/context/GlobalContext/GlobalContext";
import MintMain from "src/components/mint/Main";
import "viem/window";
import { wagmiContract } from "src/ethers/contract";

import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

const MintPage: React.FC = ({ navigation }: any) => {
  const { setAppLoading, appLoading } = useGlobalContext();

  const { config } = usePrepareContractWrite({
    address: wagmiContract.address,
    abi: wagmiContract.abi,
    functionName: "createAsset",
    args: ["Satya Wallet", "Sen test", "https://avatars.githubusercontent.com/u/52450973?v=4"],
    enabled: true
  });

  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  });

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
          <MintMain mint={write} isLoading={isLoading} isSuccess={isSuccess} data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MintPage;
