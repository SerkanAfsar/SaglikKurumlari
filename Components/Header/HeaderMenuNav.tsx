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
          <Link
            href={"/saglik-kurumlari/istanbul"}
            title="İstanbul Sağlık Kurumları"
          >
            İstanbul Sağlık Kurumları
          </Link>
        </li>
        <li>
          <Link
            href={"/saglik-kurumlari/ankara"}
            title=" Ankara Sağlık Kurumları"
          >
            Ankara Sağlık Kurumları
          </Link>
        </li>
        <li>
          <Link href={"/saglik-kurumlari/izmir"} title="İzmir Sağlık Kurumları">
            İzmir Sağlık Kurumları
          </Link>
        </li>
      </ul>
    </nav>
  );
}
