import CityListSection from "@/Components/Sections/CityListSection";
import DetailsSection from "@/Components/Sections/DetailsSection";
import InfoSection from "@/Components/Sections/InfoSection";
import ServicesSection from "@/Components/Sections/ServicesSection";
import SliderSection from "@/Components/Sections/SliderSection";
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

export default async function Home() {
  return (
    <>
      <h1 className="hidden">Türkiye İl İlçe Sağlık Kurumları Merkezleri</h1>
      <SliderSection />

      <ServicesSection />
      <CityListSection className="md:mt-28 lg:mt-40 xl:mt-60" />
      <InfoSection />
      <DetailsSection />
    </>
  );
}
