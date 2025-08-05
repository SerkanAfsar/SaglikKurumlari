import { cn } from "@/utils";
import Link from "next/link";
import logo from "../../public/images/logo.webp";
import Image from "next/image";
import HeaderMenuDepartments from "./HeaderMenuDepartments";
import CustomLinkButton from "../UI/CustomLinkButton";
import { Hospital, Menu } from "lucide-react";
import HeaderMenuNav from "./HeaderMenuNav";
import CustomElement from "../Common/CustomElement";
import { useHeaderContext } from "./Contexts/HeaderContext";

export default function HeaderMenu({
  isScrolled = false,
}: {
  isScrolled: boolean;
}) {
  const { setIsMobileOpened } = useHeaderContext();
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
          <span className="hidden md:block">Sağlık Kurumları</span>
        </Link>
        <CustomElement className="ml-auto hidden items-center justify-between gap-6 xl:flex">
          <HeaderMenuNav />
          <HeaderMenuDepartments />
          <CustomLinkButton
            href={"/tum-iller"}
            title="Tüm İller"
            className="hover:bg-secondary gap-3 rounded-3xl px-6 py-4 text-sm font-bold text-white uppercase transition-all"
            linkType="secondary"
          >
            <Hospital size={20} />
            <span>Tüm İller</span>
          </CustomLinkButton>
        </CustomElement>
        <Menu
          className="block cursor-pointer xl:hidden"
          color="#283B6A"
          size={30}
          onClick={() => setIsMobileOpened(true)}
        />
      </CustomElement>
    </CustomElement>
  );
}
