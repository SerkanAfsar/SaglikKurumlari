import { GetCityDetailData } from "@/utils";

import Aside from "../Components/Aside";

import LayoutHeader from "../Components/LayoutHeader";
import BreadCrumb from "@/Components/Common/BreadCrumb";
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

  return (
    <>
      <BreadCrumb title={`${result.cityName} Sağlık Kurumları`} />
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
