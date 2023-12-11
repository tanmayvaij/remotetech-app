import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  useFonts,
} from "@expo-google-fonts/josefin-sans";
import * as ExpoSplashScreen from "expo-splash-screen";
import { ResourceProviderProps } from "../types";

ExpoSplashScreen.preventAutoHideAsync();

const ResourceProvider: React.FC<ResourceProviderProps> = ({ children }) => {
  let [fontsLoaded] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  (async () => {
    await ExpoSplashScreen.hideAsync();
  })();

  return children;
};

export default ResourceProvider;
