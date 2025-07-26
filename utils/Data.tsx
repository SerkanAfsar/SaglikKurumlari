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

export const SliderData: {
  title: string;
  description: string;
  img: StaticImageData;
}[] = [
  {
    title: "Providing Best Medical Care",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ad quas. Beatae neque vitae ipsa distinctio, amet labore aperiam quos?",
    img: slider1Img,
  },
  {
    title: "Onur Tatile Gitti",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ad quas. Beatae neque vitae ipsa distinctio, amet labore aperiam quos?",
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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ad quas. Beatae neque vitae ipsa distinctio, amet labore aperiam quos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ad quas. Beatae neque vitae ipsa distinctio, amet labore aperiam quos?",
  },
  {
    icon: <Hospital />,
    title: "Sağlık Merkezleri",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ad quas. Beatae neque vitae ipsa distinctio, amet labore aperiam quos?",
  },
  {
    icon: <SquareActivity />,
    title: "Merkez Teşkilatları",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ad quas. Beatae neque vitae ipsa distinctio, amet labore aperiam quos?",
  },
];

export const DetailsData: DetailItemType[] = [
  {
    title: "Pediatric Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: <Activity size={70} strokeWidth="1.25px" className="text-primary" />,
  },
  {
    title: "Cardiology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: (
      <HeartHandshake size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Cardiology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: (
      <CalendarHeart size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Pediatric Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: <Activity size={70} strokeWidth="1.25px" className="text-primary" />,
  },
  {
    title: "Cardiology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: (
      <HeartHandshake size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Cardiology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: (
      <CalendarHeart size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Pediatric Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: <Activity size={70} strokeWidth="1.25px" className="text-primary" />,
  },
  {
    title: "Cardiology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: (
      <HeartHandshake size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
  {
    title: "Cardiology Clinic",
    description:
      "Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment. Pathology is the study of disease, it is the bridge between science and medicine.Also it underpins every aspect of patient care, from diagnostic testing and treatment.Pathology is the study of",
    icon: (
      <CalendarHeart size={70} strokeWidth="1.25px" className="text-primary" />
    ),
  },
];
