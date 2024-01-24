import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { data } from "../data/Data";
import StarIcon from "../image/starIcon.png";
import ContaktIcon from "../image/ContaktIcon.png";
import SimpleRasm from "../image/SimpleRasm.jpg";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Detail = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  /////////////////input////////////////
  const [ism, setIsm] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tekshirish uchun qisqa funksiya
    const isFormValid = () => {
      if (!ism || !phone || !region) {
        setError("Iltimos, barcha maydonlarni to`ldiring.");
        return false;
      }
      return true;
    };

    // Agar malumotlar to'g'ri to'ldirilgan bo'lsa
    if (isFormValid()) {
      // Bu joyda so'rovni yuborish logikasi bo'ladi
      console.log("So`rov yuborildi:", { ism, phone, region });
      setIsSubmitted(true);
      setError("");
    }
  };
  //////////////input///////////////////////////
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(data.filter((product) => product.id == id)[0]);
  });

  return (
    <section className="py-10 bg-[#ebebeb]">
      <div className="w-full max-w-[900px] px-5 mx-auto">
        <div className="flex justify-between items-center py-5">
          <div>
            <h3 className="text-2xl font-bold">{info.name}</h3>
            <div></div>
          </div>
          <div>
            <p className="ml-7">
              <b>{info.price} 000so`m</b>
            </p>
            <div className="flex">
              <img
                className="w-[25px] h-[25px]"
                src={StarIcon}
                alt="Star icon"
              />
              <img
                className="w-[25px] h-[25px]"
                src={StarIcon}
                alt="Star icon"
              />
              <img
                className="w-[25px] h-[25px]"
                src={StarIcon}
                alt="Star icon"
              />
              <img
                className="w-[25px] h-[25px]"
                src={StarIcon}
                alt="Star icon"
              />
              <img
                className="w-[25px] h-[25px]"
                src={StarIcon}
                alt="Star icon"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-2">
          <div>
            <img
              className="w-[431px] h-[431px] rounded-xl mb-10"
              src={info.image}
              alt={info.name}
            />

            <div className="bg-white p-2 rounded-xl py-5">
              <div className="flex justify-between  items-center">
                <div className="flex items-center space-x-5">
                  <img
                    className="bg-gray-200 w-[60px] h-[60px] rounded-full"
                    src={ContaktIcon}
                    alt="Contakt icon"
                  />
                  <div>
                    <p>{info.brand}</p>
                    <div className="flex">
                      <img
                        className="w-[25px] h-[25px]"
                        src={StarIcon}
                        alt="Star icon"
                      />
                      <img
                        className="w-[25px] h-[25px]"
                        src={StarIcon}
                        alt="Star icon"
                      />
                      <img
                        className="w-[25px] h-[25px]"
                        src={StarIcon}
                        alt="Star icon"
                      />
                      <img
                        className="w-[25px] h-[25px]"
                        src={StarIcon}
                        alt="Star icon"
                      />
                      <img
                        className="w-[25px] h-[25px]"
                        src={StarIcon}
                        alt="Star icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-[15px] rounded-xl">
            <div>
              <Link>
                <h3 className="text-[#eb0000] text-[28px] font-bold mb-5">
                  Buyurtma berish
                </h3>
              </Link>
              <div>
                <p>
                  Mahsulot narxi: <b>{info.price} 000so`m</b>
                </p>
                <div className="bg-blue-200 p-5 rounded-md font-normal my-3">
                  <span>{info.warning}</span>
                </div>
                <div className="max-w-md mx-auto p-6">
                  {isSubmitted ? (
                    <div
                      className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
                      role="alert"
                    >
                      <p className="font-bold">Yuborildi!</p>
                      <p>Ma'lumotlaringiz muvaffaqiyatli qabul qilindi.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {error && (
                        <div
                          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                          role="alert"
                        >
                          <p className="font-bold">Xatolik!</p>
                          <p>{error}</p>
                        </div>
                      )}
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-600"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          onChange={(e) => setIsm(e.target.value)}
                          placeholder="Ism"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-600"
                        ></label>
                        <input
                          type="tel"
                          id="phone"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Telefon raqam"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-600"
                        >
                          {" "}
                        </label>
                        <select
                          id="region"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          onChange={(e) => setRegion(e.target.value)}
                        >
                          <option value="">Tanlang...</option>
                          <option value="tashkent">Toshkent</option>
                          <option value="samarkand">Samarqand</option>
                          <option value="bukhara">Buxoro</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                      >
                        Yuborish
                      </button>
                    </form>
                  )}
                  <img className="pt-5" src={SimpleRasm} al="Simple rasm"></img>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Detail;
