import React, { createContext } from "react";

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const user = {
    name: "Nelson Sylvanus",
    age: 35,
    bio: "Aspiring full stack engineer"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
