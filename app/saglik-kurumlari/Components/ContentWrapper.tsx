import { GetCityDetailData } from "@/utils";
import MedicalItem from "./MedicalItem";

type ContentWrapperType = Awaited<ReturnType<typeof GetCityDetailData>> & {
  distictSlug?: string;
};
export default function ContentWrapper({
  result,
}: {
  result: ContentWrapperType;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {result.listData.map((item, index) => (
          <MedicalItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
