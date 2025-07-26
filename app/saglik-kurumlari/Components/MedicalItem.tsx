import { DataType } from "@/types";
import { Hospital, Mail, MapPinHouse, Phone } from "lucide-react";

export default function MedicalItem({ item }: { item: DataType }) {
  return (
    <div className="border-primary flex h-full flex-col overflow-hidden rounded-md border-2">
      <div className="bg-primary w-full rounded-br-none rounded-bl-none p-3 text-center font-bold text-white">
        {item.dc_KURUM_ADI}
      </div>
      <div className="flex flex-auto flex-col gap-3 p-3">
        <div className="perItem">
          <Hospital />
          <span>{item.dc_KURUM_TURU}</span>
        </div>
        <div className="perItem">
          <MapPinHouse />
          <span>{item.dc_ADRES}</span>
        </div>
        <div className="perItem">
          <Phone />
          <span>{item.dc_TELEFON}</span>
        </div>
        {item.dc_E_POSTA && (
          <div className="perItem">
            <Mail />
            <span>{item.dc_E_POSTA}</span>
          </div>
        )}
      </div>
    </div>
  );
}
