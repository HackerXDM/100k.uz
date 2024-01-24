import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data, category } from "../data/Data";

const CategoryProduct = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    setCategoryProducts(data.filter((product) => product.category == category));
  }, []);
  const [tabButtonsArr, setTabButtonsArr] = useState([]);
  const arr = [1,1,1,1,1,];
  useEffect(() => {
    // arr.push()
    data.forEach((item,index)=>{
      // console.log(arr[index]);
      if(index !== arr[index] ){
      // arr.push(item.catego ry);
      console.log(index);
      }
    } );
  }, [data]);
  // console.log(arr);
  return (
    <>
      <div className="w-full max-w-[900px] px-5 mx-auto">
        <div className="flex gap-5 overflow-x-auto mt-4">
          {/* {category.map((item, index) => {
            return (
              <button className="rounded-full border border-gray-400 py-1 px-6">
                Barchasi
              </button>
            );
          })} */}
        </div>

        <ul className="grid grid-cols-4 gap-5 mt-3 py-10">
          {categoryProducts.map((product) => {
            return (
              <li className="border rounded-lg bg-white" key={product.id}>
                <Link to={`/${product.category}/${product.id}`}>
                  <img
                    className="rounded-lg w-[250px] h-[180px]"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <div className="p-1">
                  <h3 className="text-sm opacity-90">{product.name}</h3>
                  <div className="flex items-center my-1">
                    <span>
                      <b>{product.price} </b>
                      so`m
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CategoryProduct;
