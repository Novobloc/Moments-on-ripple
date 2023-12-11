import "./global";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "src/screens/login/Login";
import Register from "src/screens/register/Register";
import Entry from "src/screens/Entry";
import HomeNavigation from "src/navigation/HomeNavigation";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "@/theme";
import { GlobalProvider } from "src/context/GlobalContext/GlobalContext";
import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, arbitrum, polygonMumbai } from "viem/chains";
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from "@web3modal/wagmi-react-native";

const Stack = createStackNavigator();
const projectId = "c0b4df56380357438dc758cd083c9bbb";
const chains = [mainnet, polygon, arbitrum];

// 2. Create config
const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com"
  }
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  defaultChain: polygonMumbai
});

export default function App(): JSX.Element {
  const [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!fontsLoaded) return <></>;

  return (
    <ThemeProvider value={DefaultTheme}>
      <RestyleThemeProvider theme={theme}>
        <GlobalProvider>
          <WagmiConfig config={wagmiConfig}>
            <Web3Modal />
            <NavigationContainer>
              <Stack.Navigator initialRouteName="entry">
                <Stack.Screen name="entry" component={Entry} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name="register" component={Register} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name="home" component={HomeNavigation} options={{ headerShown: false, animationEnabled: false }} />
              </Stack.Navigator>
            </NavigationContainer>
          </WagmiConfig>
        </GlobalProvider>
      </RestyleThemeProvider>
    </ThemeProvider>
  );
}
