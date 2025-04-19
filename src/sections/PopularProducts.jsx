import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          {" "}
          <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti optio perspiciatis quis quas, placeat nostrum porro possimus
          libero explicabo.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <Link key={product.name} to={`/product/${product.id}`}>
            <PopularProductCard {...product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
