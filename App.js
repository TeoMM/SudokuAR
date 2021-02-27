import * as Font from "expo-font";

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import ARScreen from "./components/ARScreen";
import AppLoading from "expo-app-loading";
import HistoryScreen from "./components/HistoryScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import PlayScreen from "./components/PlayScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

const App = () => {
  useEffect(() => {
    async function _loadAssetsAsync() {
      const fontAssets = cacheFonts([Ionicons.font]);
      console.log("a trec");
      await Promise.all([...fontAssets]);
    }
    _loadAssetsAsync();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="history"
        activeColor="#0a7cff"
        inactiveColor="gray"
        barStyle={{ backgroundColor: "#97d2fb" }}
      >
        <Tab.Screen
          name="Play"
          component={PlayScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="play" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="AR Solver"
          component={ARScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="barcode-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="clipboard-outline" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
