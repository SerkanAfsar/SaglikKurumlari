"use client";

import { slugAllUrl } from "@/utils";
import Link from "next/link";
import { title } from "process";
import { useState } from "react";
import img from "../../../public/images/logo.webp";
import Image from "next/image";

export default function CityListWrapper({ cityList }: { cityList: string[] }) {
  const [value, setValue] = useState<string>("");
  const result = value
    ? cityList.filter(
        (a) => a.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1,
      )
    : cityList;
  return (
    <div className="flex flex-col gap-6">
      <input
        className="bg-primary mx-auto inline-block w-[300px] rounded-md p-3 text-sm text-white outline-none placeholder:text-white"
        placeholder="İl Arayınız..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {result.map((item, index) => (
          <Link
            href={slugAllUrl(item)}
            title={`${title} Sağlık Kurumları`}
            className="text-primary flex h-full min-h-32 items-center justify-center rounded-md bg-white p-6 text-center text-lg font-bold uppercase transition-all hover:scale-105 hover:shadow"
            key={index}
          >
            <Image src={img} width={55} height={50} alt="Sağlık Kurumları" />
            <span>{item} Sağlık Kurumları</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
