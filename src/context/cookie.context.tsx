"use client";
import Cookies from "js-cookie";
import React, { createContext, useContext, useState, useEffect } from "react";

const CookieContext = createContext<
  | {
      currentCookie: string | undefined;
      setCurrentCookie: (value: string | undefined, remember: boolean) => void;
    }
  | undefined
>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentCookie, setCurrentCookie] = useState<string | undefined>();

  useEffect(() => {
    const cookie = Cookies.get(
      process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string
    );
    setCurrentCookie(cookie);
  }, []);

  const updateCookie = (value: string | undefined, remember: boolean) => {
    const inOneDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    if (value === undefined) {
      Cookies.remove(process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string);
    } else {
      if (remember) {
        Cookies.set(
          process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string,
          value,
          {
            expires: inOneDay,
            secure: true,
          }
        );
      } else {
        Cookies.set(
          process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string,
          value,
          {
            secure: true,
          }
        );
      }
    }
    setCurrentCookie(value);
  };

  return (
    <CookieContext.Provider
      value={{ currentCookie, setCurrentCookie: updateCookie }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCustomerCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCustomerCookie must be used within a CookieProvider");
  }
  return context;
};
