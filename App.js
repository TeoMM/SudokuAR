import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Solve the puzzle!</Text>
    </View>
  );
}
function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>History!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const App = () => {
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
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="play" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="AR Solver"
          component={SettingsScreen}
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
