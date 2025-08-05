"use client";
import { ResultSetData } from "@/utils";
import React, { createContext, use, useEffect, useState } from "react";

export type HeaderContextType = {
  isMobileOpened: boolean;
  setIsMobileOpened: React.Dispatch<React.SetStateAction<boolean>>;
  cityList: string[];
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export default function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileOpened, setIsMobileOpened] = useState<boolean>(false);
  const [cityList, setCityList] = useState<string[]>([]);

  async function GetCityList() {
    const result = await ResultSetData("dc_SEHIR");
    if (result) {
      setCityList(result);
    }
  }

  useEffect(() => {
    const process = async () => {
      await GetCityList();
    };
    process();
  }, []);

  return (
    <HeaderContext.Provider
      value={{ isMobileOpened, setIsMobileOpened, cityList }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export const useHeaderContext = () => {
  const context = use(HeaderContext);
  if (!context) {
    throw new Error("Header Context is Not Provided");
  }
  return context;
};
