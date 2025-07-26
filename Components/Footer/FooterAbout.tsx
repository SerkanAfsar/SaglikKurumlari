import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function FooterAbout() {
  return (
    <section className="flex flex-auto flex-col text-white lg:flex-1/3">
      <h6>Hakkımızda</h6>
      <p>
        Our goal is to deliver quality of care in a courteous, respectful, and
        compassionate manner. We hope you will allow us to care for you and
        strive to be the first and best choice for your family healthcare.
      </p>
    </section>
  );
}
