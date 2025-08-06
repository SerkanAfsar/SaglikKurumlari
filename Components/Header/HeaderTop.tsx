import { Facebook, Instagram, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

export default function HeaderTop() {
  return (
    <section className="bg-primary font-roboto py-4 text-sm text-white shadow">
      <div className="flexCenterBetween container flex-col gap-3 md:flex-row">
        <ul className="headerTopNav flex gap-3">
          <li>
            <MapPin />
            <span>Anasayfa</span>
          </li>
          <li>
            <MapPin />
            <span>Hakkımızda</span>
          </li>
          <li>
            <MapPin />
            <span>İletişim</span>
          </li>
        </ul>
        <div className="headerSocial flexCenter">
          <Link href={"/"} title="Facebook">
            <Facebook />
          </Link>
          <Link href={"/"} title="İnstagram">
            <Instagram />
          </Link>
          <Link href={"/"} title="Twitter">
            <Twitter />
          </Link>
        </div>
      </div>
    </section>
  );
}
