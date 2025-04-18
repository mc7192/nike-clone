import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalized lg:max-w-lg font-bold">
          Special
          <span className="text-coral-red"> Offer </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          voluptates eaque quisquam incidunt, enim quae praesentium maiores
          earum, reiciendis quidem, porro accusantium odio provident laboriosam.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          incidunt voluptas amet deleniti eius minima quasi aperiam facilis ab
          numquam!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
