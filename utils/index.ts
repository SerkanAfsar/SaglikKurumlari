import { GetList } from "@/Services";
import { DataType } from "@/types";
import clsx from "clsx";
import { ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export async function ResultSetData<K extends keyof DataType>(key: K) {
  const result = await GetList();
  if (!result) {
    throw new Error("Err Fetch Failed");
  }
  const arr = new Set(result.map((item) => item[key]));
  return [...arr];
}

export async function GetCityDetailData(
  citySlug: string,
  districtSlug?: string,
  typeSlug?: string,
) {
  const result = await GetList();
  if (!result) {
    throw new Error("Err Fetch Failed");
  }
  const cityDetail = result.filter((a) => slugUrl(a.dc_SEHIR) == citySlug);

  let listData;
  if (districtSlug) {
    if (districtSlug.includes("turunde")) {
      listData = cityDetail.filter(
        (a) => slugUrl(`${a.dc_KURUM_TURU} türünde`) == districtSlug,
      );
    } else {
      listData = cityDetail.filter((a) => slugUrl(a.dc_ILCE) == districtSlug);
    }

    if (typeSlug) {
      listData = listData.filter((a) => slugUrl(a.dc_KURUM_TURU) == typeSlug);
    }
  } else {
    if (typeSlug) {
      listData = cityDetail.filter((a) => slugUrl(a.dc_KURUM_TURU) == typeSlug);
    } else {
      listData = cityDetail;
    }
  }
  let typeDetail;

  if (districtSlug && !districtSlug.includes("turunde")) {
    typeDetail = [
      ...new Set(
        cityDetail
          .filter((a) => slugUrl(a.dc_ILCE) == districtSlug)
          .map((item) => item.dc_KURUM_TURU),
      ),
    ];
  } else {
    typeDetail = [...new Set(cityDetail.map((item) => item.dc_KURUM_TURU))];
  }

  return {
    districtList: [...new Set(cityDetail.map((item) => item.dc_ILCE))],
    typeDetail,
    listData,
    cityName: cityDetail[0].dc_SEHIR,
  };
}

export const slugUrl = (value: string = "Deneme") => {
  return slugify(value, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "tr", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
};

export const slugAllUrl = (
  cityName: string,
  type?: string,
  districtName?: string,
  districtSlugType?: boolean,
) => {
  let url = `/saglik-kurumlari/${slugUrl(cityName)}`;
  if (districtName) {
    url += districtSlugType ? `/${districtName}` : `/${slugUrl(districtName)}`;
  }
  if (type) {
    url += `/${slugUrl(type)}`;
  }

  return url;
};
