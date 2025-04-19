import { useParams } from "react-router-dom";
import { products } from "../constants";
import { PopularProducts } from "../sections";
import Button from "../components/Button";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  //   useParams always returns a string
  const product = products.find((product) => product.id === Number(id));
  const sizes = [1, 2, 3, 4, 5, 5.5, 6, 6.5, 7, 8, 9.5, 10, 12];
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b padding">
        <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mt-8 p-2">
          <div className="flex-1">
            <img src={product.imgURL} className="object-fit w-full h-full" />
          </div>
          <div className="flex flex-col p-20 border-2 border-slate-gray rounded-2xl items-start xl:max-w-[50%] shadow-2xl">
            <h1 className="text-5xl text-coral-red font-montserrat text-center leading-normal font-bold">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-10 p-5">
              <p className="line-through text-gray-500 text-2xl">
                ${product.price}
              </p>
              <p className="font-bold text-red-500 text-5xl">
                ${(product.price * 0.9).toFixed(2)}
              </p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                10% OFF
              </span>
            </div>
            <h3 className="font-montserrat text-3xl mt-5">Sizes</h3>
            <div className="flex flex-wrap gap-4 mt-4 p-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex items-center justify-center border-2 w-[50px] h-[50px] border-slate-gray rounded-4xl
                    ${selectedSize === size ? "bg-coral-red text-white" : "border-slate-gray rounded-4xl hover:bg-slate-gray hover:text-white"}
                    `}
                >
                  <p>{size}</p>
                </div>
              ))}
            </div>
            <h3 className="font-montserrat text-3xl mt-5">Description:</h3>
            <p className="font-palanquin leading-normal text-xl mt-3">
              {product.description}
            </p>
            <div className="w-full mt-10 flex flex-col gap-5">
              <Button label="Buy Now!" fullWidth />
              <Button label="Add to Cart" fullWidth />
            </div>
          </div>
        </div>
        <div className="mt-5 padding">
          <PopularProducts />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
