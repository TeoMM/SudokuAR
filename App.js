import * as Font from "expo-font";

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import AppInterface from "./components/AppInterface";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [isReady, setReady] = useState(false);

  if (isReady) {
    return <AppInterface />;
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
