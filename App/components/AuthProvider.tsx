import React, { useState, createContext, useContext, useEffect } from "react";

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
      
    // setAuthState({ authToken: storedAuthToken, isAuthenticated: true });
    console.log(authState);
    
    
  }, [authState.isAuthenticated]);

  return (
    <Auth.Provider value={{ ...authState, setAuthState }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(Auth);
