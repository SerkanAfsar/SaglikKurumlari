import { ServicesData } from "@/utils/Data";

export default function ServicesSection() {
  return (
    <section className="relative z-10 mt-0 mb-16 block w-full p-0 lg:-mt-10">
      <div className="servicesSection container">
        {ServicesData.map((item, index) => (
          <div key={index} className="h-full">
            <span className="hidden md:block">{item.icon}</span>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h3 className="font-quicksand text-2xl font-bold">
                {item.title}
              </h3>
              <p className="font-roboto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
