import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { data } from "../data/Data";
import StarIcon from "../image/starIcon.png";
import ContaktIcon from "../image/ContaktIcon.png";
import SimpleRasm from "../image/SimpleRasm.jpg";

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

  const [openDetails, setOpenDetails] = useState(true);
  // console.log(openDetails);
  return (
    <section className=" pt-10 bg-[#ebebeb]">
      <div className="w-full max-w-[900px] px-5 mx-auto">
        <div className="flex justify-between items-center py-5">
          <div>
            <h3 className="xl:text-2xl xl:w-96 xl:font-bold lg:text-2xl lg:w-96 lg:font-bold md:text-2xl md:w-96 md:font-bold sm:w-96 sm:text-xl sm:font-bold text-xl font-bold w-80">{info.name}</h3>
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

        <div className="xl:grid xl:gap-8 xl:grid-cols-2 lg:grid lg:gap-8 lg:grid-cols-2 md:grid md:gap-8 md:grid-cols-2 sm:grid sm:gap-8 sm:grid-cols-1">
          <div>
            <img
              className="xl:w-[431px] xl:h-[431px] lg:w-[431px] lg:h-[431px] md:w-[431px] md:h-[431px] sm:w-screen sm:h-[431px] w-screen h-[300px] rounded-xl mb-10"
              src={info.image}
              alt={info.name}
            />

            <div className="bg-white p-2 rounded-xl my-5 py-5">
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
                <div className="xl:max-w-md xl:mx-auto lg:max-w-md lg:mx-auto md:mx-auto md:max-w-md  xl:p-6 lg:p-6 sm:max-w-900 md:p-6">
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
                          className="mt-1 p-2 xl:w-full lg:w-full md:w-full sm:w-[100%] w-[100%] border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                          className="mt-1 p-2 xl:w-full lg:w-full md:w-full sm:w-[100%] w-[100%]  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                          className="mt-1 p-2 xl:w-full lg:w-full md:w-full sm:w-[100%] w-[100%]  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                  <img className="pt-5 xl:w-[100%] xl:h-[130px] lg:w-[100%] lg:h-[130px] md:w-[100%] md:h-[130px] sm:w-screen sm:h-[170px] w-screen h-[170px] " src={SimpleRasm} al="Simple rasm"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-10">
          <button 
            onClick={() => {
              setOpenDetails(true);
            }}
            className="px-6 py-2 font-medium bg-white border-gray-200 border-t border-x "
          >
            Batafsil ma'lumot
          </button>

          <button
            onClick={() => {
              setOpenDetails(false);
            }}
            className="px-6 py-2 font-medium bg-white border-gray-200 border-t border-x "
          >
            kamentariyaga otish
          </button>
        </div>

      </div>
      {/* openDetails qiymati qachonki true bo'lganida batafsilni chiqaradi */}
      {openDetails === true ? (
        <div className="bg-white py-10">
        <div className="w-full max-w-[900px] px-5 mx-auto">
      <p>{info.desc}</p>
        </div>
        </div>
      ) : (
        //   : aks holda commentsni chiqaradi
        <div className="bg-white ">
          <div className="w-full max-w-[900px] px-5 mx-auto">
      <p className="pb-10 pt-14 text-3xl">Mijozlar tomonidan qoldirilgan izohlar</p>
      <div className="flex bg-gray-200 p-3 rounded-xl space-x-2">
      <img className="bg-gray-200 w-[60px] h-[60px] rounded-full" src={ContaktIcon}alt="Contakt icon"/>
      <div className="flex">
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <p className="ml-5">7 месяцев назад</p>
      </div>
      </div>
      <div className="flex bg-gray-200 p-3 rounded-xl space-x-2 my-5">
      <img className="bg-gray-200 w-[60px] h-[60px] rounded-full" src={ContaktIcon}alt="Contakt icon"/>
      <div className="flex">
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <p className="ml-5">6 месяцев назад</p>
      </div>
      </div>
      <div className="flex bg-gray-200 p-3 rounded-xl space-x-2">
      <img className="bg-gray-200 w-[60px] h-[60px] rounded-full" src={ContaktIcon}alt="Contakt icon"/>
      <div className="flex">
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <img className="w-[25px] h-[25px]" src={StarIcon} alt="Star icon"/>
      <p className="ml-5">3 месяца назад</p>
      </div>
      </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
