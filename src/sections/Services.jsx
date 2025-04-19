import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-montserrat font-bold leading-normal">
        Our <span>Promises</span>
      </h3>
      <div className="flex flex-wrap justify-center gap-9 max-md:flex-col mt-11">
        {services.map((service) => {
          return <ServiceCard key={service.label} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
