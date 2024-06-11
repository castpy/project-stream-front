"use client"
import React, { createContext, useContext, useState } from "react";

type CustomerContextType = {
  customer: {
    id: string | null;
    name: string | null;
    email: string | null;
  } | undefined;
  setCustomer: React.Dispatch<
    React.SetStateAction<{
      id: string | null;
      name: string | null;
      email: string | null;
    } | undefined>
  >;
};

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [customer, setCustomer] = useState<{
    id: string | null;
    name: string | null;
    email: string | null;
  } | undefined>(undefined);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within a CustomerProvider");
  }
  return context;
};