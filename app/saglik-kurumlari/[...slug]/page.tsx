import { GetCityDetailData } from "@/utils";

import ContentWrapper from "../Components/ContentWrapper";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const result = await GetCityDetailData(slug[0], slug[1], slug[2]);

  return <ContentWrapper result={{ ...result, distictSlug: slug[1] }} />;
}
