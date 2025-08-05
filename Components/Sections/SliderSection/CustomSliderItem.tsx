import { SliderData } from "@/utils/Data";
import { Ambulance, Cross, HeartPlus, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function CustomSliderItem({
  item,
}: {
  item: (typeof SliderData)[0];
}) {
  return (
    <>
      <Image
        src={item.img}
        alt={item.title}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="flexCenter inset-0 container h-full w-full flex-col !items-start gap-6 text-left">
        <h2
          className="text-primary font-quicksand max-w-3xl text-center text-4xl font-bold md:text-left md:text-7xl md:leading-20"
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></h2>
        <p className="text-primary font-roboto max-w-xl text-center leading-7 font-bold md:block md:text-left">
          {item.description}
        </p>
        <div className="sliderIcons flexCenter">
          <div>
            <div>
              <Ambulance strokeWidth={1} />
            </div>
            <span>Hastaneler</span>
          </div>
          <div>
            <div>
              <HeartPlus strokeWidth={1} />
            </div>
            <span>Özel Hastaneler</span>
          </div>
          <div>
            <div>
              <HeartPulse strokeWidth={1} />
            </div>
            <span>Aile Sağlık Merkezleri</span>
          </div>
          <div>
            <div>
              <Cross strokeWidth={1} />
            </div>
            <span>Üniversite Hastaneleri</span>
          </div>
        </div>
      </div>
    </>
  );
}
