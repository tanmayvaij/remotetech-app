import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "./data/ScreenNames";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import ResourceProvider from "./components/ResourceProvider";
import { StatusBar } from "react-native";

const App = () => {

  const Stack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <>
    <StatusBar />
    <ResourceProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="ONBOARDING_SCREEN"
            component={OnBoardingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ResourceProvider>
    </>
  );
};

export default App;
