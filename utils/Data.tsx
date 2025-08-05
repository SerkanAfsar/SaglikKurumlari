import { StaticImageData } from "next/image";
import slider1Img from "../public/images/banners/banner1.jpeg";
import slider2Img from "../public/images/banners/banner2.jpeg";
import {
  Activity,
  CalendarHeart,
  HeartHandshake,
  Hospital,
  Phone,
  SquareActivity,
} from "lucide-react";
import { DetailItemType } from "@/Components/Sections/DetailsSection/DetailItem";
import { EnvType } from "@/types";

export const SliderData: {
  title: string;
  description: string;
  img: StaticImageData;
}[] = [
  {
    title: "Devlet Hastaneleri",
    description:
      "Türkiyenin her il ve ilçesinde kayıtlı bulunan hastanalerin telefon numaraları,adresleri ve eposta adresleri sistemimizde mevcuttur..",
    img: slider1Img,
  },
  {
    title: "Özel Hastaneler",
    description:
      "İl ve İlçelere göre seçim yapabilir tam hizmet listesine ulaşabilirsiniz. Sistemimizde Üniversite Hastaneleri,Devlet Hastaneleri ve Aile Sağlık Merkezleri gibi kurumlar bulunmaktadır",
    img: slider2Img,
  },
];

export const ServicesData: {
  title: string;
  description: string;
  icon: any;
}[] = [
  {
    icon: <Phone />,
    title: "Hastaneler",
    description:
      "İl ilçelere bağlı olarak tüm hastanelerin listesini seçebilir ve iletişim bilgilerine ulaşabilirsiniz...",
  },
  {
    icon: <Hospital />,
    title: "Sağlık Merkezleri",
    description:
      "İl ilçelere bağlı olarak tüm sağlık merkezlerinin listesini seçebilir ve iletişim bilgilerine ulaşabilirsiniz...",
  },
  {
    icon: <SquareActivity />,
    title: "Merkez Teşkilatları",
    description:
      "İl ilçelere bağlı olarak tüm merkez teşkilatlarının listesini seçebilir ve iletişim bilgilerine ulaşabilirsiniz...",
  },
];

export const DetailsData: DetailItemType[] = [
  {
    title: "Devlet Hastaneleri",
    description:
      "İl İlçelere göre sıralanmış Devlet Hastaneleri Listesi.Telefon Numaraları,adresleri ve eposta adreslerine ulaşabilirsiniz..",
    icon: <Activity size={70} strokeWidth="1.25px" className="text-primary" />,
  },
  {
    title: "Özel Hastaneler",
    description:
      "İl İlçelere göre sıralanmış Özel Hastaneler Listesi.Telefon Numaraları,adresleri ve eposta adreslerine ulaşabilirsiniz..",
    icon: (
      <HeartHandshake size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Toplum Sağlık Merkezleri",
    description:
      "İl İlçelere göre sıralanmış Toplum Sağlık Merkezleri Listesi.Telefon Numaraları,adresleri ve eposta adreslerine ulaşabilirsiniz..",
    icon: (
      <CalendarHeart size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Aile Sağlığı Merkezleri",
    description:
      "İl İlçelere göre sıralanmış Aile Sağlığı Merkezleri Listesi.Telefon Numaraları,adresleri ve eposta adreslerine ulaşabilirsiniz..",
    icon: <Activity size={70} strokeWidth="1.25px" className="text-primary" />,
  },
  {
    title: "Sağlık Bakanlığı Merkez Teşkilatı",
    description:
      "İl İlçelere göre sıralanmış Sağlık Bakanlığı Merkez Teşkilat Listesi.Telefon Numaraları,adresleri ve eposta adreslerine ulaşabilirsiniz..",
    icon: (
      <HeartHandshake size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
];

export const FooterQuickMenuListData: { title: string; href: string }[] = [
  {
    title: "İstanbul Sağlık Merkezleri",
    href: "/saglik-kurumlari/istanbul",
  },
  {
    title: "Ankara Sağlık Merkezleri",
    href: "/saglik-kurumlari/ankara",
  },
  {
    title: "Ankara Sağlık Merkezleri",
    href: "/saglik-kurumlari/izmir",
  },
  {
    title: "Bursa Sağlık Merkezleri",
    href: "/saglik-kurumlari/bursa",
  },
  {
    title: "Eskişehir Sağlık Merkezleri",
    href: "/saglik-kurumlari/eskisehir",
  },
  {
    title: "Bilecik Sağlık Merkezleri",
    href: "/saglik-kurumlari/bilecik",
  },
  {
    title: "Muğla Sağlık Merkezleri",
    href: "/saglik-kurumlari/mugla",
  },
  {
    title: "Malatya Sağlık Merkezleri",
    href: "/saglik-kurumlari/malatya",
  },
  {
    title: "Elazığ Sağlık Merkezleri",
    href: "/saglik-kurumlari/elazig",
  },
  {
    title: "Gaziantep Sağlık Merkezleri",
    href: "/saglik-kurumlari/gaziantep",
  },
  {
    title: "Şanlıurfa Sağlık Merkezleri",
    href: "/saglik-kurumlari/sanliurfa",
  },
  {
    title: "Aydın Sağlık Merkezleri",
    href: "/saglik-kurumlari/aydin",
  },
];

export const envVariables: EnvType = {
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME!,
};
