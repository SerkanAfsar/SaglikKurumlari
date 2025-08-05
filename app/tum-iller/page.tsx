import BreadCrumb from "@/Components/Common/BreadCrumb";
import CityListSection from "@/Components/Sections/CityListSection";
import { envVariables } from "@/utils/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye İl İlçe Sağlık Kurumları Listesi | Sağlık Kurumları",
  description: "Türkiye İl İlçe Sağlık Kurumları Listesi | Sağlık Kurumları",
  robots: "index,follow",
  publisher: "Sağlık Kurumları",
  authors: [
    {
      name: "Sağlık Kurumları",
      url: envVariables.NEXT_PUBLIC_SITE_NAME,
    },
  ],

  openGraph: {
    title: "Türkiye İl İlçe Sağlık Kurumları Listesi | Sağlık Kurumları",
    description: "Türkiye İl İlçe Sağlık Kurumları Listesi | Sağlık Kurumları",
    url: envVariables.NEXT_PUBLIC_SITE_NAME,
    locale: "tr_TR",
    siteName: "Sağlık Kurumları",
    authors: ["Sağlık Kurumları"],
    emails: ["info@saglikkurumlari.net"],
  },

  twitter: {
    card: "summary",
    description: "Türkiye İl İlçe Sağlık Kurumları Listesi | Sağlık Kurumları",
    title: "TTürkiye İl İlçe Sağlık Kurumları Listesi | Sağlık Kurumları",
    creator: "@saglikkurumlari",
  },

  alternates: {
    canonical: envVariables.NEXT_PUBLIC_SITE_NAME,
  },
};

export default function Page() {
  return (
    <>
      <BreadCrumb title="Sağlık Kurumları Listesi" />
      <CityListSection isTop={false} className="pt-16" />
    </>
  );
}
