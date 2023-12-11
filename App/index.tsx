import ResourceProvider from "./components/ResourceProvider";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store";
import RootNavigator from "./navigators/RootNavigator";
import AuthProvider from "./components/AuthProvider";

const App = () => {
  return (
    <>
      <StatusBar />
      <ResourceProvider>
        <Provider store={store}>
          <AuthProvider>
            <RootNavigator />
          </AuthProvider>
        </Provider>
      </ResourceProvider>
    </>
  );
};

export default App;
