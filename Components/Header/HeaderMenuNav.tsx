import Link from "next/link";

export default function HeaderMenuNav() {
  return (
    <nav>
      <ul className="flexCenterBetween mainNav gap-4">
        <li>
          <Link href={"/"} title="Anasayfa">
            Anasayfa
          </Link>
        </li>
        <li>
          <Link href={"/saglik-kurumlari/istanbul"} title="İstanbul">
            İstanbul Sağlık Kurumları
          </Link>
        </li>
        <li>
          <Link href={"/saglik-kurumlari/ankara"} title="Ankara">
            Ankara Sağlık Kurumları
          </Link>
        </li>
        <li>
          <Link href={"/saglik-kurumlari/izmir"} title="İzmir">
            İzmir Sağlık Kurumları
          </Link>
        </li>
      </ul>
    </nav>
  );
}
