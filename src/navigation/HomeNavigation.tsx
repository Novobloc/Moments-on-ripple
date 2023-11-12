import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "src/screens/tabs/Home";
import AccountScreen from "src/screens/tabs/Account";
import { IconHome2, IconSocial } from "tabler-icons-react-native";

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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconHome2 size={24} color={focused ? "#FFFFFF" : "#828282"} />,
          tabBarInactiveTintColor: "#828282",
          tabBarActiveTintColor: "#FFFFFF"
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => <IconSocial size={24} color={focused ? "#FFFFFF" : "#828282"} />,
          tabBarInactiveTintColor: "#828282",
          tabBarActiveTintColor: "#FFFFFF"
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
