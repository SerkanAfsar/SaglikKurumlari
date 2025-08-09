import { GetCityDetailData, slugUrl } from "@/utils";
import ContentWrapper from "../Components/ContentWrapper";
import { GetList } from "@/Services";
import { Metadata } from "next";
import { envVariables } from "@/utils/Data";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const allDataResult = await GetList();
  if (!allDataResult) {
    return {};
  }

  const cityList = allDataResult.filter((a) => slugUrl(a.dc_SEHIR) == slug[0]);
  const districtList = cityList.filter((a) => slugUrl(a.dc_ILCE) == slug[1]);
  const type = cityList.filter((a) => slugUrl(a.dc_KURUM_TURU) == slug[2]);

  const cityName = cityList[0]?.dc_SEHIR;
  const districtName = districtList[0]?.dc_ILCE;
  const typeName = type[0]?.dc_KURUM_TURU;

  let stringVal = "";
  if (cityName) {
    stringVal += cityName;
  }
  if (districtName) {
    stringVal += " " + districtName;
  }
  if (typeName) {
    stringVal += " " + typeName;
  }

  const value = `${stringVal} | Sağlık Kurumları Telefon Numaraları ve Adresleri`;

  let url = `${envVariables.NEXT_PUBLIC_SITE_NAME}`;
  if (slug[0]) {
    url += `/${slug[0]}`;
  }
  if (slug[1]) {
    url += `/${slug[1]}`;
  }
  if (slug[2]) {
    url += `/${slug[2]}`;
  }

  return {
    title: value,
    description: value,
    robots: "index,follow",
    publisher: "Sağlık Kurumları",
    authors: [
      {
        name: "Sağlık Kurumları",
        url: envVariables.NEXT_PUBLIC_SITE_NAME,
      },
    ],

    openGraph: {
      title: value,
      description: value,
      url,
      locale: "tr_TR",
      siteName: "Sağlık Kurumları",
      authors: ["Sağlık Kurumları"],
      emails: ["info@saglikkurumlari.net"],
    },

    twitter: {
      card: "summary",
      description: value,
      title: value,
      creator: "@saglikkurumlari",
    },

    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const result = await GetCityDetailData(slug[0], slug[1], slug[2]);
  if (!result) {
    return notFound();
  }
  if (!result.listData.length) {
    return notFound();
  }

  return <ContentWrapper result={{ ...result!, distictSlug: slug[1] }} />;
}

export async function generateStaticParams() {
  const arr: { slug: string[] }[] = [];

  const data = await GetList();
  const cityList = [...new Set(data?.map((a) => a.dc_SEHIR))];

  for (const city of cityList) {
    const cityUrl = slugUrl(city);
    arr.push({ slug: [cityUrl] });

    const cityTypeList = [
      ...new Set(
        data?.filter((a) => a.dc_SEHIR == city).map((a) => a.dc_KURUM_TURU),
      ),
    ];

    for (const cityTypeItem of cityTypeList) {
      const typeUrl = slugUrl(`${cityTypeItem} türünde`);
      arr.push({ slug: [cityUrl, typeUrl] });
    }

    const districtList = [
      ...new Set(data?.filter((a) => a.dc_SEHIR == city).map((a) => a.dc_ILCE)),
    ];

    for (const district of districtList) {
      const districtUrl = slugUrl(district);
      if (districtUrl) {
        arr.push({ slug: [cityUrl, districtUrl] });
      }

      const typeList = [
        ...new Set(
          data
            ?.filter((a) => a.dc_SEHIR == city && a.dc_ILCE == district)
            .map((item) => item.dc_KURUM_TURU),
        ),
      ];

      for (const typeName of typeList) {
        const typeNameUrl = slugUrl(typeName);
        if (districtUrl && typeNameUrl) {
          arr.push({ slug: [cityUrl, districtUrl, typeNameUrl] });
        }
      }
    }
  }
  return arr;
}

export const revalidate = 7200;
export const dynamic = "force-static";
