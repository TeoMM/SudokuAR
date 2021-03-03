import React, { useEffect, useState } from "react";

import ARScreen from "./ARScreen";
import HistoryScreen from "./HistoryScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import PlayScreen from "./PlayScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function AppInterface() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="history"
        initialRouteName="Play"
        activeColor="#071E22"
        shifting={true}
      >
        <Tab.Screen
          name="AR Solver"
          component={ARScreen}
          options={{
            tabBarColor: "#1D7874",
            tabBarIcon: ({ color }) => (
              <Ionicons name="barcode-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Play"
          component={PlayScreen}
          options={{
            tabBarColor: "#02A171",
            tabBarIcon: ({ color }) => (
              <Ionicons name="play" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarColor: "#28A49E",
            tabBarIcon: ({ color }) => (
              <Ionicons name="clipboard-outline" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppInterface;