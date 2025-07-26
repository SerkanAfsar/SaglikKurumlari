import CityListSection from "@/Components/Sections/CityListSection";
import DetailsSection from "@/Components/Sections/DetailsSection";
import InfoSection from "@/Components/Sections/InfoSection";
import ServicesSection from "@/Components/Sections/ServicesSection";
import SliderSection from "@/Components/Sections/SliderSection";

export default async function Home() {
  return (
    <>
      <SliderSection />
      <ServicesSection />
      <CityListSection />
      <InfoSection />
      <DetailsSection />
    </>
  );
}
