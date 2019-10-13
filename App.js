import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFont = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />
    );
  }

  return <MealsNavigator />;
}
