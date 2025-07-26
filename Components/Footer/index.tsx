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
        <div className="font-quicksand text-primary container flex flex-col items-center justify-center text-sm md:flex-row md:justify-between">
          <b>Copyright 2025 © Taksi Durakları</b>
          <b>Powered By JesterColony</b>
        </div>
      </div>
    </footer>
  );
}
