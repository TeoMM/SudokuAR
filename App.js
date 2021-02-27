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
  const [isReady, setReady] = useState(false);

  if (isReady) {
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
  } else {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setReady)}
      />
    );
  }

  async function loadResourcesAsync() {
    await Promise.all([Font.loadAsync({ ...Ionicons.font })]);
  }

  function handleLoadingError(error) {
    console.warn(error);
  }
  function handleFinishLoading(setReady) {
    setReady(true);
  }
};
export default App;
