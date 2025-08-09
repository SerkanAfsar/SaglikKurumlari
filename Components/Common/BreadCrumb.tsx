import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type BreadCrumbType = {
  arr: {
    title: string;
    url: string;
  }[];
  title: string;
};

export default function BreadCrumb({ item }: { item: BreadCrumbType }) {
  function urlGenerator(indexNo: number): string {
    let url = "/saglik-kurumlari";
    for (let index = 0; index < indexNo + 1; index++) {
      url += "/" + item.arr[index].url;
    }
    return url;
  }
  return (
    <section className="breadCrumb">
      <h1>{item.title}</h1>
      <nav>
        <ul className="flex items-center justify-center text-white">
          <li>
            <Link href={"/"} title="Anasayfa">
              Anasayfa
              <ChevronRight size={18} />
            </Link>
          </li>
          <li>
            <Link href={"/tum-iller"} title="Tüm İller">
              Tüm İller
              <ChevronRight size={18} />
            </Link>
          </li>
          {item.arr.map((elem, index) => (
            <li key={index}>
              <Link
                title={`${item.arr[index].title} Sağlık Kurumları`}
                href={urlGenerator(index)}
              >
                {elem.title}
                <ChevronRight size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
