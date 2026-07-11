import { GetCityDetailData, slugUrl } from "@/utils";

import Aside from "../Components/Aside";

import LayoutHeader from "../Components/LayoutHeader";
import BreadCrumb, { BreadCrumbType } from "@/Components/Common/BreadCrumb";
import { notFound } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
};
export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const result = await GetCityDetailData(slug[0], slug[1], slug[2]);
  if (!result) {
    return notFound();
  }

  const cityName = result.cityName;
  const districtName =
    slug[1] && slug[1].indexOf("turunde") == -1 && result.listData[0]?.dc_ILCE;
  const type =
    slug[2] &&
    result.listData.find((a) => slugUrl(a.dc_KURUM_TURU) == slug[2])
      ?.dc_KURUM_TURU;

  let customTitle = cityName;
  if (districtName) {
    customTitle += " " + districtName;
  }
  if (type) {
    customTitle += " " + type;
  } else {
    customTitle += " Sağlık Kurumları";
  }

  const arr: BreadCrumbType["arr"] = [{ title: cityName, url: slug[0] }];
  if (districtName) {
    arr.push({ title: districtName, url: slug[1] });
  }
  if (type) {
    arr.push({
      title: type,
      url: slug[2],
    });
  }

  const saglik =
    type === "Aile Sağlığı Merkezleri"
      ? "Sağlık Ocakları -  En Yakın Sağlık Ocağı"
      : undefined;

  let sentence = cityName;
  if (districtName) {
    sentence += ` ${districtName}`;
  }
  if (type) {
    sentence += ` ${type}`;
  }

  if (saglik) {
    sentence += ` ${saglik}`;
  }

  return (
    <>
      <BreadCrumb item={{ title: customTitle, arr }} />
      <div className="hidden">
        <h2>{`${sentence} Sağlık Kurumları`}</h2>
        <h3>{`${sentence} Sağlık Kurumları Telefon Numaraları`}</h3>
        <h4>{`${sentence} Sağlık Kurumları Adresleri`}</h4>
        <h5>{`${sentence} Sağlık Kurumları E-Posta Adresleri`}</h5>
      </div>
      <div className="container flex flex-col gap-6 py-6 lg:flex-row">
        <Aside cityName={result.cityName} districtList={result.districtList} />
        <section className="font-quicksand m-0 flex flex-auto flex-col p-0 lg:flex-3/4">
          <LayoutHeader
            cityName={result.cityName}
            districtSlug={slug[1]}
            typeDetail={result.typeDetail}
          />
          <div>{children}</div>
        </section>
      </div>
    </>
  );
}
