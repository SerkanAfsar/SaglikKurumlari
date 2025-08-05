"use client";
import { cn, slugAllUrl } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Aside({
  districtList,
  cityName,
}: {
  districtList: string[];
  cityName: string;
}) {
  const pathName = usePathname();
  const [value, setValue] = useState<string>("");

  const result = value
    ? districtList.filter(
        (a) => a.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1,
      )
    : districtList;

  return (
    <aside className="font-quicksand flex-auto lg:flex-1/4">
      <ul className="flex w-full flex-col gap-3 md:grid md:grid-cols-2 lg:flex">
        <li className="block">
          <input
            type="text"
            value={value}
            className="bg-secondary block w-full rounded-md p-3.5 text-sm text-black placeholder:font-bold placeholder:text-white"
            onChange={(e) => setValue(e.target.value)}
            placeholder="İlçe Arayınız..."
          />
        </li>
        {result.map((item, index) => {
          const path = slugAllUrl(cityName, undefined, item);
          if (!item) return null;
          return (
            <li key={index} className="block">
              <Link
                className={cn(
                  "bg-primary flex w-full items-center justify-start gap-3 rounded-md p-3 font-bold text-white",
                  {
                    "bg-secondary font-bold text-white underline":
                      path == pathName || pathName.includes(path),
                  },
                )}
                href={path}
                title={`${item} Sağlık Kurumları`}
              >
                <span>{item} Sağlık Kurumları</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
