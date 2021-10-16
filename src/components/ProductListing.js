import React, { useContext } from "react";
import { PrimaryContext } from "../context/Context";
import productData from "../data/productData";

export const ProductListing = () => {
    const {sortbyprice, sortbybrand} = useContext(PrimaryContext);

    const sortPrice = (products, sortbyprice) => {
        if (sortbyprice === "lowtohigh") {
          return products.sort((a, b) => a.price - b.price);
        }
        return products.sort((a, b) => b.price - a.price);
      };



      const sortBrand = (products, sortbybrand) => {
        if (sortbybrand === "allgenre") {
          return products.filter((product) => product);
        } else if (sortbybrand === "fabstar") {
            return products.filter(
                (product) => product.brand.toLowerCase() === sortbybrand
              );
          } else if (sortbybrand === "blive") {
            return products.filter(
                (product) => product.brand.toLowerCase() === sortbybrand
              );
          } else if (sortbybrand === "fastcolors") {
            return products.filter(
                (product) => product.brand.toLowerCase() === sortbybrand
              );
          }
          else if (sortbybrand === "enwhite") {
            return products.filter(
                (product) => product.brand.toLowerCase() === sortbybrand
              );
            }
          else if (sortbybrand === "hunky") {
            return products.filter(
                (product) => product.brand.toLowerCase() === sortbybrand
              );
            }else {
          return products;
        }
      };

      const sortedProducts = sortPrice(productData.data, sortbyprice)
      const brandSort = sortBrand(sortedProducts, sortbybrand )
  return (
    <div className="flex">
      {brandSort.map(
        ({ id, name, price, brand, Size, idealFor, imageUrl }) => (
          <div className="flex flex-col shadow w-full h-80 max-w-lg items-center p-2 m-4" key={id}>


            <div className="w-40 h-46 shadow self-center p-2">
              <img src={imageUrl} alt="img" />
            </div>
            <div className="font-semibold text-gray-500 p-1">
              {brand},  <span className="italic text-sm"> {idealFor} </span>
            </div>
            <div className="text-sm overflow-ellipsis p-1 text-center">{name}</div>


            <div className="font-semibold text-xl">Rs.{price}</div>
          </div>
        )
      )}
    </div>
  );
};