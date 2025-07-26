import { cn } from "@/utils";
import Link from "next/link";
import logo from "../../public/images/logo.webp";
import Image from "next/image";
import HeaderMenuDepartments from "./HeaderMenuDepartments";
import CustomLinkButton from "../UI/CustomLinkButton";
import { CalendarDays, Menu } from "lucide-react";
import HeaderMenuNav from "./HeaderMenuNav";
import CustomElement from "../Common/CustomElement";

export default function HeaderMenu({
  isScrolled = false,
}: {
  isScrolled: boolean;
}) {
  return (
    <CustomElement
      as="section"
      className={cn(
        "bg-white py-5 shadow xl:py-0",
        isScrolled && "animate-headerSlideDown fixed top-0 right-0 left-0",
      )}
    >
      <CustomElement className="flexCenterBetween relative container">
        <Link
          title="Anasayfa"
          href={"/"}
          className="font-quicksand text-primary flex items-center justify-center gap-3 text-2xl font-bold"
        >
          <Image src={logo} alt="Logo" width={55} height={50} />
          <span>Sağlık Kurumları</span>
        </Link>
        <CustomElement className="ml-auto hidden items-center justify-between gap-6 xl:flex">
          <HeaderMenuNav />
          <HeaderMenuDepartments />
          <CustomLinkButton
            href={"/"}
            title="Tüm İller"
            className="gap-3 rounded-3xl px-6 py-4 text-sm font-bold text-white uppercase"
            linkType="secondary"
          >
            <CalendarDays size={20} /> <span>Tüm İller</span>
          </CustomLinkButton>
        </CustomElement>
        <Menu className="block xl:hidden" />
      </CustomElement>
    </CustomElement>
  );
}
