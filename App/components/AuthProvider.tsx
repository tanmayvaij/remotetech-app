import React, { useState, createContext, useContext, useEffect } from "react";
import { getItemAsync } from "expo-secure-store";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthStateProps {
  authToken: string;
  isAuthenticated: boolean;
}

interface ContextProps extends AuthStateProps {
  setAuthState: React.Dispatch<React.SetStateAction<AuthStateProps>>;
}

const Auth = createContext<ContextProps>({
  authToken: "",
  isAuthenticated: false,
  setAuthState: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState({
    authToken: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    (async () => {
      const storedAuthToken = await getItemAsync("authToken");
      if (storedAuthToken)
        setAuthState({ authToken: storedAuthToken, isAuthenticated: true });
    })();
  }, [authState.isAuthenticated]);

  return (
    <Auth.Provider value={{ ...authState, setAuthState }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(Auth);
