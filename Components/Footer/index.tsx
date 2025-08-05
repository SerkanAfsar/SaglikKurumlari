import Link from "next/link";
import FooterAbout from "./FooterAbout";
import FooterQuickMenu from "./FooterQuickMenu";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col gap-6 py-6 lg:flex-row">
        <FooterAbout />
        <FooterQuickMenu />
      </div>
      <div className="bg-secondary block w-full p-3">
        <div className="font-quicksand text-primary container flex flex-col items-center justify-center text-sm font-bold md:flex-row md:justify-between">
          <b>Copyright {new Date().getFullYear()} © Sağlık Kurumları</b>
          <div>
            <span>Powered By</span>
            <Link
              className="text-primary ml-2 underline"
              target="_blank"
              rel="nofollow"
              href="https://www.linkedin.com/in/serkanafsar/"
            >
              JesterColony
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
