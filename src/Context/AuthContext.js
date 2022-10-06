import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};