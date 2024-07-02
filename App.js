import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants-screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";



export default function App() {
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  const [RobotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!LatoLoaded || !RobotoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation/>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}