"use client";
import { cn, slugAllUrl } from "@/utils";
import { useHeaderContext } from "./Contexts/HeaderContext";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeaderAside() {
  const { isMobileOpened, setIsMobileOpened, cityList } = useHeaderContext();
  const [value, setValue] = useState<string>("");
  const pathName = usePathname();

  useEffect(() => {
    setIsMobileOpened(false);
  }, [pathName, setValue, setIsMobileOpened]);

  useEffect(() => {
    if (!isMobileOpened) {
      setValue("");
    }
  }, [isMobileOpened]);

  useLayoutEffect(() => {
    if (isMobileOpened) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isMobileOpened]);

  const cityListResult = value
    ? cityList.filter(
        (a) => a.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1,
      )
    : cityList;

  return (
    <aside
      className={cn(
        "font-quicksand invisible fixed inset-0 -z-20 block h-full w-full bg-black/50 opacity-0 transition-all duration-300",
        isMobileOpened && "visible z-20 opacity-100",
      )}
    >
      <nav
        className={cn(
          "bg-primary -ml-[100%] block h-full w-[240px] text-white transition-all duration-1000",
          isMobileOpened && "ml-0",
        )}
      >
        <div className="sticky inset-0 flex w-full items-center justify-between p-3 text-lg font-bold text-white uppercase shadow">
          <Link href={"/"} title="Sağlık Kurumları">
            Sağlık Kurumları
          </Link>
          <X
            size={25}
            className="cursor-pointer"
            onClick={() => setIsMobileOpened(false)}
            color="#fff"
          />
        </div>
        <ul className="flex h-full w-full flex-col gap-3 overflow-auto overscroll-contain font-bold">
          <li className="bg-primary sticky inset-0 z-10 w-full px-3 text-white">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-secondary w-full rounded-md px-3 py-2 text-white outline-none placeholder:text-white focus:outline-none"
              placeholder="Arama Yapınız..."
            />
          </li>
          {!value && (
            <li>
              <Link href={"/"} className="block px-3 py-1">
                Anasayfa
              </Link>
            </li>
          )}
          {cityListResult.map((city, index) => (
            <li key={index}>
              <Link
                className="block px-3 py-1"
                title={`${city} Sağlık Kurumları`}
                href={slugAllUrl(city)}
              >
                {city} Sağlık Kurumları
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
