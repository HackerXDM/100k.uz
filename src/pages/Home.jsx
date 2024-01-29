import React, { useEffect, useState } from "react";
import { category, data } from "../data/Data";
import { Link } from "react-router-dom";

//import image
import CarImage from "../image/CarImage.png";
import OneImage from "../image/OneImage.png";
import TwoImage from "../image/TwoImage.png";
import SovgaImage from "../image/SovgaImageThree.png";
import ElektronikaImage from "../image/ElektronikaImage.webp";

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    setNewProducts(data.filter((product) => product.isItNew));
    setTopProducts(data.filter((product) => product.top));
  }, []);

  data.forEach((data) => {
    const model = data.model;
    // ImageValue[model] = (modelCounts[model] || 0) + 1;
  });

  return (
    <>
      <div className="bg-gray-200 py-10">
        <div className="w-full max-w-[900px] py-3 overflow-auto scroll-style px-5 mx-auto">
          <div className="grid grid-cols-10 gap-4 min-w-max">
            {category.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/${item}`}
                  className="flex items-center justify-center flex-col space-y-2.5 category-link"
                >
                  <div className="text-center">
                    

                    <img
                      src={data.find((product) => {
                        return product.category === item;
                      }).ImageValue}
                      className="w-[100px] h-[100px] rounded-full"
                      alt=""
                    />

                    <h3 className="category-link_title text-xs my-2">
                      {item}
                      <span className="text-gray-700   transition-colors duration-300">
                        {" "}
                        (
                        {
                          data.filter((product) => product.category == item)
                            .length
                        }
                        )
                      </span>
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section */}
      <section className="py-7 bg-gray-100">
        <div className="w-full max-w-[900px] px-5 mx-auto">
          <div className="xl:flex xl:items-center xl:justify-between md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between  sm:flex sm:items-center sm:justify-between">
            <h3 className="text-[30px] font-semibold">
              Yangi kelgan mahsulotlar
            </h3>
            <Link to="/Barchasi" className="text-red-700 hover:text-[#E30909]">
              <button class="xl:px-4 xl:py-3 xl:bg-gradient-to-r xl:from-red-400 xl:to-purple-400 xl:text-white xl:font-bold xl:rounded-full xl:transition-transform  xl:transform-gpu  xl:hover:-translate-y-1 xl::shadow-lg lg:px-4 lg:py-3 lg:bg-gradient-to-r lg:from-red-400 lg:to-purple-400 lg:text-white lg:font-bold lg:rounded-full lg:transition-transform  lg:transform-gpu  lg:hover:-translate-y-1 lg::shadow-lg md:px-4 md:py-3 md:bg-gradient-to-r md:from-red-400 md:to-purple-400 md:text-white md:font-bold md:rounded-full md:transition-transform  md:transform-gpu  md:hover:-translate-y-1 md::shadow-lg sm:px-4 sm:py-3 sm:bg-gradient-to-r sm:from-red-400 sm:to-purple-400 sm:text-white sm:font-bold sm:rounded-full sm:transition-transform  sm:transform-gpu  sm:hover:-translate-y-1 sm::shadow-lg px-3 py-2 bg-gradient-to-r from-red-400 to-purple-400 text-white font-bold rounded-full transition-transform  transform-gpu  hover:-translate-y-1 :shadow-lg my-5">
                Barchasini korish
              </button>
            </Link>
          </div>

          <ul className="xl:grid xl:grid-cols-4 xl:gap-3 xl:mt-3 lg:grid lg:grid-cols-4 lg:gap-3 lg:mt-3 md:grid md:grid-cols-4 md:gap-3 md:mt-3 sm:grid sm:grid-cols-3 sm:gap-5 sm:mt-3 grid grid-cols-2 gap-5 mt-3 ">
            {newProducts &&
              newProducts.slice(0, 8).map((product) => {
                return (
                  <li className="border rounded-lg bg-white" key={product.id}>
                    <Link to={`/${product.category}/${product.id}`}>
                      <img
                        className="rounded-lg w-[300px] h-[190px] xl:w-[300px] xl:h-[190px]"
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
              })}
          </ul>
        </div>
      </section>

      {/* Main */}
      <main className="py-7 bg-gray-100">
        <div className="w-full max-w-[900px] px-5 mx-auto">
          <div className="xl:flex xl:items-center xl:justify-between md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between  sm:flex sm:items-center sm:justify-between">
            <h3 className="text-[30px] font-semibold">Ommabop mahsulotlar</h3>
            <Link to="/Barchasi" className="text-red-700  hover:text-[#E30909]">
              <button class="xl:px-4 xl:py-3 xl:bg-gradient-to-r xl:from-red-400 xl:to-purple-400 xl:text-white xl:font-bold xl:rounded-full xl:transition-transform xl:transform-gpu xl:hover:-translate-y-1 xl:hover:shadow-lg, lg:px-4 lg:py-3 lg:bg-gradient-to-r lg:from-red-400 lg:to-purple-400 lg:text-white lg:font-bold lg:rounded-full lg:transition-transform lg:transform-gpu lg:hover:-translate-y-1 lg:hover:shadow-lg md:px-4 md:py-3 md:bg-gradient-to-r md:from-red-400 md:to-purple-400 md:text-white md:font-bold md:rounded-full md:transition-transform md:transform-gpu md:hover:-translate-y-1 md:hover:shadow-lg sm:px-4 sm:py-3 sm:bg-gradient-to-r sm:from-red-400 sm:to-purple-400 sm:text-white sm:font-bold sm:rounded-full sm:transition-transform sm:transform-gpu sm:hover:-translate-y-1 sm:hover:shadow-lg px-3 py-2 bg-gradient-to-r from-red-400 to-purple-400 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg my-5">
                Barchasini korish
              </button>
            </Link>
          </div>

          <ul className="xl:grid xl:grid-cols-4 xl:gap-3 xl:mt-3 lg:grid lg:grid-cols-4 lg:gap-3 lg:mt-3 md:grid md:grid-cols-4 md:gap-3 md:mt-3 sm:grid sm:grid-cols-3 sm:gap-5 sm:mt-3 grid grid-cols-2 gap-5 mt-3">
            {topProducts &&
              topProducts.slice(0, 8).map((product) => {
                return (
                  <li className="border rounded-lg bg-white" key={product.id}>
                    <Link to={`/${product.category}/${product.id}`}>
                      <img
                        className="rounded-lg w-[300px] h-[190px] xl:w-[300px] xl:h-[190px]"
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
              })}
          </ul>
        </div>
      </main>

      {/* 100k Qulayliklari */}
      <div className="bg-white pb-20 pt-5">
        <div className="w-full max-w-[900px] px-5 mx-auto">
          <h3 className="text-center text-3xl font-bold py-5">
            100k.uz qulayliklari
          </h3>
          <ul className="xl:grid xl:grid-cols-4 xl:items-center xl:space-x-5 lg:grid  lg:items-center lg:grid-cols-4 lg:space-x-5 md:grid-cols-4 md:space-x-5 sm:grid  sm:items-center sm:grid-cols-2 sm:space-x-5 ">
            <li className="text-center">
              <img
                className="w-[130px] h-[100px] mx-auto"
                src={CarImage}
                alt="CarImage"
              />
              <b>Tezkor yetkazib berish xizmati</b>
              <p className="text-sm text-gray-500 max-w-2xl">
                Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida
                yetqazib beriladi.
              </p>
            </li>
            <li className="text-center">
              <img
                className="w-[120px] h-[100px] mx-auto"
                src={OneImage}
                alt="OneImage"
              />
              <b>To'lov istalgan usulda</b>
              <p className="text-sm text-gray-500">
                Buyurtmani oldindan click, payme yoki buyurtmani qo'lingizga
                olganingizdan keyin amalga oshiring.
              </p>
            </li>
            <li className="text-center">
              <img
                className="w-[120px] h-[80px] mx-auto"
                src={TwoImage}
                alt="TwoImage"
              />
              <b>CALL-CENTER</b>
              <p className="text-sm text-gray-500">
                Dam olish kunlarisiz qo'llab quvvatlash bo'limi mavjud. +998 55
                500 55-11
              </p>
            </li>
            <li className="text-center">
              <img
                className="w-[120px] h-[100px] mx-auto"
                src={SovgaImage}
                alt="SovgaImage"
              />
              <b className="text-sm">Mijozlarni rag'batlantirish</b>
              <p className="text-xs text-gray-500">
                Doimiy mijozlar uchun sovg'alar va bonuslar taqdim etiladi.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
