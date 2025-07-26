import { DetailItemWrapper } from "./DetailItemWrapper";

export default function DetailsSection() {
  return (
    <section className="detailsSection">
      <div className="container mb-12 flex flex-col gap-6">
        <div className="titleComponent">
          <h3>The Best Medical And General Practice Care!</h3>
          <h4>Providing Medical Care For The Sickest In Our Community.</h4>
        </div>
      </div>
      <div className="container">
        <DetailItemWrapper />
      </div>
    </section>
  );
}
