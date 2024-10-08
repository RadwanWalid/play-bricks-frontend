'use client';
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, createContext, useEffect } from "react";
import { useState } from "react";
import { PropsWithChildren } from "react";

type AuthContextType = {
    isLoggedIn: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
}

const defaults = {
    isLoggedIn: false,
    setIsLoggedIn: () => {},
}

const AuthContext = React.createContext<AuthContextType>(defaults);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedValue = (typeof window !== 'undefined' && window.localStorage) ? localStorage?.getItem('isLoggedIn') : null;
    return storedValue ? JSON.parse(storedValue) : false;
  });
  

  useEffect(() => {
    // Update localStorage whenever the login status changes
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
