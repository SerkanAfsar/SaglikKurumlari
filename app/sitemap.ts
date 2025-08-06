import type { MetadataRoute } from "next";

import { GetList } from "@/Services";
import { envVariables } from "@/utils/Data";
import { slugAllUrl, slugUrl } from "@/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const arr: MetadataRoute.Sitemap = [];

  const data = await GetList();
  const cityList = [...new Set(data?.map((a) => a.dc_SEHIR))];

  for (const city of cityList) {
    arr.push({
      url: `${envVariables.NEXT_PUBLIC_SITE_NAME}${slugAllUrl(city)}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    });

    const cityTypeList = [
      ...new Set(
        data?.filter((a) => a.dc_SEHIR == city).map((a) => a.dc_KURUM_TURU),
      ),
    ];

    for (const cityTypeItem of cityTypeList) {
      const typeUrl = slugUrl(`${cityTypeItem} türünde`);

      arr.push({
        url: `${envVariables.NEXT_PUBLIC_SITE_NAME}${slugAllUrl(city, typeUrl)}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
      });
    }

    const districtList = [
      ...new Set(data?.filter((a) => a.dc_SEHIR == city).map((a) => a.dc_ILCE)),
    ];

    for (const district of districtList) {
      if (district) {
        arr.push({
          url: `${envVariables.NEXT_PUBLIC_SITE_NAME}${slugAllUrl(city, undefined, district)}`,
          lastModified: new Date(),
          changeFrequency: "daily",
          priority: 0.7,
        });
      }

      const typeList = [
        ...new Set(
          data
            ?.filter((a) => a.dc_SEHIR == city && a.dc_ILCE == district)
            .map((item) => item.dc_KURUM_TURU),
        ),
      ];

      for (const typeName of typeList) {
        if (district && typeName) {
          arr.push({
            url: `${envVariables.NEXT_PUBLIC_SITE_NAME}${slugAllUrl(city, typeName, district, false)}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.7,
          });
        }
      }
    }
  }

  return [
    {
      url: envVariables.NEXT_PUBLIC_SITE_NAME,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${envVariables.NEXT_PUBLIC_SITE_NAME}/tum-iller`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...arr,
  ];
}
