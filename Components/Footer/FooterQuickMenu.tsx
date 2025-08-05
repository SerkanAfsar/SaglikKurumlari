import { FooterQuickMenuListData } from "@/utils/Data";
import Link from "next/link";

export default function FooterQuickMenu() {
  return (
    <section className="flex-auto lg:flex-2/3">
      <h6>Hızlı Menü</h6>
      <ul>
        {FooterQuickMenuListData.map((item, index) => (
          <li key={index}>
            <Link href={item.href} title={item.title}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
