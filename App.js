import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import "react-native"
import { ThemeProvider } from "styled-components/native";



import { Navigation } from "./src/infrastructure/navigation";
// import firebase from "firebase/app"
import { initializeApp } from 'firebase/app';
// import '@firebase/auth';
// import '@firebase/firestore';

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
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCDbU4mw9WIT1WfmqfVcUp8PdU0wAuIjbs",
  authDomain: "foodie-cabe7.firebaseapp.com",
  projectId: "foodie-cabe7",
  storageBucket: "foodie-cabe7.appspot.com",
  messagingSenderId: "744814749118",
  appId: "1:744814749118:web:3507032fa4213483d745ef",
  measurementId: "G-ZEVDK2PS84"
};
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const app=initializeApp(firebaseConfig);

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}