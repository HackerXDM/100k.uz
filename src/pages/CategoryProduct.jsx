import React, { useEffect, useState } from "react";
import { data } from "../data/Data.js";
import { Link, useParams } from "react-router-dom";

const CategoryProduct = () => {
  const dataCount = [];
  data.forEach((mahsulot) => {
    const kategoriya = mahsulot.category;
    dataCount[kategoriya] = (dataCount[kategoriya] || 0) + 1;
  });
  const { category } = useParams();

  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    if (category === "Barchasi") {
      setProductsData(data);
    } else {
      const filteredProducts = data.filter(
        (product) => product.category === category
      );
      setProductsData(filteredProducts);
    }
  }, [category]);
  return (
    <div className="max-w-[900px] w-full px-5 mx-auto pt-9">
      <div className="flex gap-5 overflow-x-auto mb-10">
        <Link
          to="/Barchasi"
          className={`${
            "Barchasi" === category ? "bg-gray-400 text-white" : ""
          } rounded-full border border-gray-400 px-6 py-2 min-w-max transition-colors duration-300`}
        >
          Barchasi
        </Link>
        {Object.keys(dataCount).map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item}`}
              className={`${
                item === category ? "bg-gray-400 text-white" : ""
              } rounded-full border border-gray-400 px-6 py-2 min-w-max transition-colors duration-300`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* products */}
      <ul className="grid grid-cols-4 gap-3 mt-3 ">
        {productsData.length > 0 ? (
          productsData.map((product) => {
            return (
              <li className="border rounded-lg bg-white" key={product.id}>
                <Link to={`/${product.category}/${product.id}`}>
                  <img
                    className="rounded-lg w-[200px] h-[190px]"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="p-1">
                    <h3 className="text-sm opacity-90">{product.name}</h3>
                    <div className="flex items-center my-1">
                      <span>
                        <b>{product.price},000 </b>
                        so`m
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <h1>Nimadir xato ketdi...</h1>
        )}
      </ul>
    </div>
  );
};

export default CategoryProduct;
