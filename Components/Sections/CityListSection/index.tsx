import FillSvg from "@/Components/Common/FillSvg";
import { ResultSetData } from "@/utils";
import CityListWrapper from "./CityListWrapper";

export default async function CityListSection() {
  const result = await ResultSetData("dc_SEHIR");
  return (
    <section className="bg-secondary fill-secondary relative mt-60">
      <FillSvg />
      <div className="font-quicksand container text-white lg:-mt-10">
        <h3 className="mx-auto mb-6 block w-full text-center text-xl font-bold uppercase lg:text-3xl">
          Şehir Listesinden Arama yapabilirsiniz
        </h3>
        <CityListWrapper cityList={result} />
      </div>
    </section>
  );
}
