import React, { createContext, useState, useContext } from 'react';

// Create a new context for the user state
const UserContext = createContext();

// Custom hook to use the user context
export const useUserContext = () => useContext(UserContext);

// UserProvider component to provide the user state to its children
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};