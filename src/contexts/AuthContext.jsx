import { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const authContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </authContext.Provider>
  );
};

export const Guard = ({ component }) => {
  const { isAuthenticated } = useContext(authContext);

  return isAuthenticated ? component : <Navigate to="/login" />;
};
