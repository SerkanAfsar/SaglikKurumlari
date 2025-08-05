import FillSvg from "@/Components/Common/FillSvg";
import { cn, ResultSetData } from "@/utils";
import CityListWrapper from "./CityListWrapper";

export default async function CityListSection({
  isTop = true,
  className,
}: {
  isTop?: boolean;
  className?: string;
}) {
  const result = await ResultSetData("dc_SEHIR");
  return (
    <section className={cn("bg-secondary fill-secondary relative", className)}>
      {isTop && <FillSvg />}
      <div className="font-quicksand container text-white lg:-mt-10">
        <h3 className="mx-auto mb-6 block w-full text-center text-xl font-bold uppercase lg:text-3xl">
          Şehir Listesinden Arama yapabilirsiniz
        </h3>
        <CityListWrapper cityList={result} />
      </div>
    </section>
  );
}
