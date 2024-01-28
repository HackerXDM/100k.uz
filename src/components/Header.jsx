import React, { useState, useEffect } from "react";
import android_icon from "../image/android.svg";
import apple_icon from "../image/apple.svg";
import global_icon from "../image/global_icon.png";
import { Link } from "react-router-dom";
import down_icon from "../image/down_icon.png";
import up_icon from "../image/up_icon.png";
import logo_100k from "../image/logo_100k.png";
import search from "../image/search.svg";
import { data } from "../data/Data";

const Header = () => {
  const playmarket =
    "https://play.google.com/store/apps/details?id=uz.itmaker.stock";
  const applestore = "https://apps.apple.com/pl/app/100k-shop/id1529911106";
  const [searchProduct, setSearchProduct] = useState("");
  const [render, setRender] = useState(false);
  console.log(searchProduct);

  const searchedProduct = data.filter((product) => {
    if (searchProduct === "") {
      return undefined;
    } else {
      return product.name.toLowerCase().includes(searchProduct);
    }
  });
  console.log(searchedProduct);

  // function SearchBar({placeholder, data}) {}

  return (
    <header className="bg-[#E30909]">
      <div className="w-full max-w-[900px] px-5 mx-auto">
        <div className="container flex items-center justify-between">
          <div className="py-2">
            <div className="flex items-center space-x-4">
              <Link to={playmarket} target="_blank">
                <button className="flex items-center">
                  <img
                    className="w-[18px] mr-1"
                    src={android_icon}
                    alt="android icon"
                  />
                  <p className="text-white/80 hover:text-white duration-500 font-medium">
                    Google Play
                  </p>
                </button>
              </Link>
              <Link to={applestore} target="_blank">
                <button className="flex items-center">
                  <img
                    className="w-[18px] mr-1"
                    src={apple_icon}
                    alt="apple icon"
                  />
                  <p className="text-white/80 hover:text-white duration-500 font-medium">
                    Appstore
                  </p>
                </button>
              </Link>
            </div>
          </div>


          {/* mening profilim */}
          <div className="flex items-center space-x-2">
            <img className="w-[18px]" src={global_icon} alt="global_icon" />
            <Link
              to="aloqa_uchun"
              className=" cursor-pointer text-white font-medium"
            >
              Aloqa uchun
            </Link>
          </div>
        </div>
      </div>
      <nav>
        <div className="bg-white">
          <div className="w-full max-w-[900px] px-5 mx-auto">
            <div className="container flex items-center justify-between py-3">
              <div className="flex items-center sm:space-x-[1px]  md:space-x-[100px] lg:space-x-[130px] xl:space-x-[126px]">
                <Link to="/">
                  <img
                    className="w-[110px] h-[30px] md:h-[30px] md:[110px]"
                    src={logo_100k}
                    alt="logo_100k"
                  />
                </Link>
                <div className="flex flex-col relative">
                  <div className="flex">
                    <div>
                      <input
                        value={searchProduct}
                        onChange={(e) => {
                          setSearchProduct(e.target.value.trim().toLowerCase());
                          setRender((prev) => !prev);
                        }}
                        className="border-2 sm:ml-5  rounded-l-full py-1 text-black  px-5 sm:w-[500px] xl:w-[350px]"
                        type="text"
                        placeholder="qidiruv..."
                      />
                    </div>
                    <div className="bg-red-600  py-1 px-3  rounded-e-full">
                      <img
                        className="w-[15px] h-[25px] md:h-[25px] md:w-[30px]"
                        src={search}
                        alt="search_icon"
                      />
                    </div>
                  </div>
                  {searchedProduct.length > 0 && (
                    <ul className="absolute w-full top-full max-h-64 overflow-auto scroll-style-2 bg-white px-2 py-2 space-y-2">
                      {searchedProduct &&
                        searchedProduct.map((product) => {
                          return (
                            <li key={product.id} className="py-2 hover:bg-gray-100">
                              <Link to={`/${product.category}/${product.id}`}>
                                {data.image}
                                {product.name}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
                <div>
                  <Link
                    to="https://t.me/yuzkabot"
                    className="md:hover:text-red-500 xl:hover:text-red-500 sm:hidden xl:text-sm md:text-base md:flex  md:space-x-2 xl:flex xl:space-x-2"
                  >
                    <b>Telegram</b>
                    <b>bot</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
