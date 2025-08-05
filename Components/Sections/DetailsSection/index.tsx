import { DetailItemWrapper } from "./DetailItemWrapper";

export default function DetailsSection() {
  return (
    <section className="detailsSection">
      <div className="container mb-12 flex flex-col gap-6">
        <div className="titleComponent">
          <h3>Türkiye il İlçe Hastane Arama Servisi</h3>
          <h4>Hizmet sunduğumuz kategorilerin listesi</h4>
        </div>
      </div>
      <div className="container">
        <DetailItemWrapper />
      </div>
    </section>
  );
}
