import { ServicesData } from "@/utils/Data";

export default function ServicesSection() {
  return (
    <section className="relative z-10 -mt-10 mb-16 block w-full p-0">
      <div className="servicesSection container">
        {ServicesData.map((item, index) => (
          <div key={index} className="h-full">
            <span>{item.icon}</span>
            <div className="flex flex-col gap-3">
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
