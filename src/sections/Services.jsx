import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9 max-md:flex-col">
      <h3 className="text-4xl font-montserrat font-bold leading-normal">
        Our <span>Promises</span>
      </h3>
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
};

export default Services;
