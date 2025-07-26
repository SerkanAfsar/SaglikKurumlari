import Image from "next/image";
import img from "../../../public/images/info.jpg";
export default function InfoSection() {
  return (
    <section className="infoSection">
      <div className="container">
        <div className="w-full flex-auto">
          <h2>Improving The Quality Of Your Life Through Better Health.</h2>
        </div>
        <div className="flex w-full items-stretch">
          <div className="leftSide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ex aut, deleniti reprehenderit iste quidem maiores, expedita
              libero quam iure a vitae dolorum quo! Molestiae corrupti esse
              harum doloremque optio!
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
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and to be the first and best choice for healthcare.
            </p>
            <p>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. We are committed to
              being the region’s premier healthcare network providing patient
              centered care that inspires clinical and service excellence.
            </p>
            <p>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and to be the first and best choice for healthcare.
            </p>
            <p>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. We are committed to
              being the region’s premier healthcare network providing patient
              centered care that inspires clinical and service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
