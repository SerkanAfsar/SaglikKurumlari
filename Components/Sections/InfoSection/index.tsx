import Image from "next/image";
import img from "../../../public/images/info.jpg";
export default function InfoSection() {
  return (
    <section className="infoSection">
      <div className="container">
        <div className="w-full flex-auto">
          <h2>
            Telefon EPosta ve Adres Bilgileri Servisi artık elinizin altında
          </h2>
        </div>
        <div className="flex w-full flex-wrap items-stretch">
          <div className="leftSide">
            <p>
              Listeden ilgili şehri ve ilçeyi seçerek bütün hastane,özel
              hastane,devlet hastaneleri,üniversite hastaneleri,aile sağlık
              kurumları gibi kategorilere ait sağlık kurumlarının telefon eposta
              ve adreslerini bulabilirsiniz...
            </p>
            <div className="imgContent">
              <Image
                src={img}
                width={400}
                height={200}
                alt="img"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="rightSide">
            <p>
              Devlet Hastaneleri, kamu hizmeti kapsamında vatandaşlara ücretsiz
              ya da düşük ücretli sağlık hizmeti sunan kurumlardır. Türkiyenin
              dört bir yanında hizmet veren bu hastanelere ait iletişim
              bilgilerine sitemiz üzerinden kolayca erişebilir, size en yakın
              devlet hastanesini anında bulabilirsiniz.
            </p>
            <p>
              Özel Hastaneler, konfor ve hız odaklı sağlık hizmeti almak isteyen
              bireyler için ideal çözümler sunar. Sitemizde yer alan özel
              hastane bilgileri sayesinde fiyat bilgisi alabilir, randevu için
              doğrudan iletişime geçebilir ve detaylı hizmet içeriklerine göz
              atabilirsiniz.
            </p>
            <p>
              Toplum Sağlığı Merkezleri, koruyucu sağlık hizmetlerinin
              yürütüldüğü, halk sağlığı odaklı kurumlardır. Aşı, eğitim ve
              bulaşıcı hastalık takibi gibi hizmetlerde önemli rol oynayan bu
              merkezlere ulaşmak artık çok daha kolay.
            </p>
            <p>
              Aile Sağlığı Merkezleri ise bireylerin günlük sağlık ihtiyaçlarını
              karşılayan, aile hekimliği sistemi kapsamında hizmet veren
              kuruluşlardır. Muayene, rapor ve reçete gibi işlemleriniz için
              bölgenizdeki aile sağlığı merkezlerine ait tüm bilgilere tek tıkla
              ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
