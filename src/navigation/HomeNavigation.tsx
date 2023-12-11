import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MintScreen from "src/screens/tabs/Mint";
import ListScreen from "src/screens/tabs/List";
import { IconHome2, IconSocial, IconBrandMinecraft, IconCameraDollar } from "tabler-icons-react-native";

const Tab = createBottomTabNavigator();

const HomeNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          paddingBottom: 40,
          height: 100
        }
      }}
    >
   
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconBrandMinecraft size={24} color={focused ? "#FFFFFF" : "#828282"} />,
          tabBarInactiveTintColor: "#828282",
          tabBarActiveTintColor: "#FFFFFF"
        }}
      />
      <Tab.Screen
        name="Mint"
        component={MintScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconCameraDollar size={24} color={focused ? "#FFFFFF" : "#828282"} />,
          tabBarInactiveTintColor: "#828282",
          tabBarActiveTintColor: "#FFFFFF"
        }}
      />
     
    </Tab.Navigator>
  );
};

export default HomeNavigation;
