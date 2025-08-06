import Image from "next/image";
import Logo from "../public/images/logo.webp";
export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-3">
        <Image
          src={Logo}
          width={80}
          height={80}
          className="bg-white"
          alt="Sağlık Kurumları"
        />
        <h1 className="font-quicksand text-primary max-w-3xl text-center text-4xl leading-16 font-semibold">
          Aradığınız Sayfa Bulunamadı <br /> (404 Not Found)
        </h1>
      </div>
    </section>
  );
}
