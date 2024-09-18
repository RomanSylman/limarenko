import React from "react";
import { useState } from "react";

const ProductPage: React.FC = () => {
  const images = [
    "/assets/main1.png",
    "/assets/main2.png",
    "/assets/main3.png",
    "/assets/main4.png",
  ];

  const firstGroup = images.slice(0, 2);
  const secondGroup = images.slice(2);

  const addProduct = [
    {
      src: "/assets/add1.png",
      name: "Рукавички короткі",
      price: "1000",
    },
    {
      src: "/assets/add2.png",
      name: "Рукавички довгі",
      price: "1000",
    },
    {
      src: "/assets/add3.png",
      name: "Кроп-жилет",
      price: "1000",
    },
  ];

  const [detailsShown, setDetailsShown] = useState(false);
  const toggleDetails = () => {
    setDetailsShown(!detailsShown);
  };

  return (
    <>
      <header className="flex justify-between px-[10px] lg:px-[30px] py-[8px] lg:py-[0px] items-center">
        {" "}
        {/* header section */}
        <button className="flex flex-col gap-[5px] basis-1/3 lg:hidden"> {/* hamburger menu */}
          <div className="h-[1px] w-[15px] bg-black"></div>
          <div className="h-[1px] w-[15px] bg-black"></div>
          <div className="h-[1px] w-[15px] bg-black"></div>
        </button>
        <nav className="hidden lg:block "> {/* navigation menu */}
          <ul className="flex gap-[40px] font-onest font-normal text-[14px]">
            {["Головна", "Магазин", "Колекції"].map((item, idx) => (
              <li
                key={idx}
                className="hover:scale-110 transition-all duration-300"
              >
                <a href="#">
                  {item}
                  {idx > 0 && (
                    <img
                      className="inline h-[10px] w-[20px] pl-[5px]"
                      src="./src/assets/icons/arrow-down.svg"
                      alt="arrow"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="lg:-mt-2 lg:text-[40px] lg:ml-[37px] font-light font-cormorant tracking-widest basis-1/3">
          LIMARENKO
        </h1>
        <div className="hidden lg:flex gap-[37px]">
          {["UA/UAH", "Кошик [ ]"].map((text, idx) => (
            <button
              key={idx}
              className="text-right font-light text-[14px] font-onest hover:scale-110 transition-all duration-300"
            >
              {text}
            </button>
          ))}
        </div>
        <button className="text-right font-light text-base basis-1/3 font-onest lg:hidden">
          Кошик [ ]
        </button>
      </header>
      <main>
        <section className="lg:grid lg:grid-cols-[1fr_366px_366px] lg:mx-[50px] lg:-mt-[10px]">
          <figure className="flex overflow-x-scroll gap-[10px] mx-[10px] lg:gap-[20px] lg:col-span-2 lg:col-start-2 lg:mr-0 lg:overflow-y-scroll lg:overflow-x-hidden lg:flex-col">
            {firstGroup.map((image, idx) => (
              <div key={idx} className="flex-shrink-0 w-fit">
                <img src={image} alt="product" className="object-contain" />
              </div>
            ))}
          </figure>

          <figure className="hidden lg:grid lg:grid-cols-2 ml-[10px] mt-[20px] gap-[20px] lg:col-span-2 lg:col-start-2 min-w-fit">
            {secondGroup.map((image, idx) => (
              <div key={idx}>
                <img
                  src={image}
                  alt={`product-${idx + 2}`}
                  className="object-contain"
                />
              </div>
            ))}
          </figure>
          <section className="lg:hidden">
            {" "}
            {/* description mobile version */}
            <div className="flex justify-between p-[10px]">
              <h3 className="font-cormorant text-[16px] font-light">Vest</h3>
              <p className="font-onest text-base font-light">₴1 000</p>
            </div>
            <div className="flex flex-col px-[10px]">
              <p className="font-onest font-normal text-base">Розмір:</p>
              <div className="flex gap-[10px] mt-[10px]">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border border-black px-[10px] py-[2px] font-onest font-light text-base hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col px-[10px] mt-[20px]">
              <p className="font-onest font-normal text-base">Колір:</p>
              <div className="flex gap-[10px] mt-[10px]">
                {["Чорний", "Білий", "Сірий", "Сірий"].map((color) => (
                  <button
                    key={color}
                    className="border border-black px-[10px] py-[2px] font-onest font-light text-base  hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <button className="bg-black border text-white px-[50px] py-[10px] mt-5 mx-[10px] text-base font-onest hover:bg-white hover:text-black hover:border-black transition-all duration-300">
              Додати у кошик
            </button>
            <p className="font-onest text-base font-normal m-[10px] pb-[10px] border-b border-[#DDDDDD]">
              SKU: <span className="font-light">V0423001</span>
            </p>
            <article className="mx-[10px]  mb-[50px]">
              <button
                onClick={toggleDetails}
                className="mb-[10px] font-cormorant font-light text-[16px] opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                Деталі{" "}
                <span className="text-2xl font-sans align-middle pb-2.5">
                  {detailsShown ? "-" : "+"}
                </span>
              </button>
              {detailsShown && (
                <div className="flex flex-col gap-[10px] font-onest font-light text-base mb-[50px] opacity-50">
                  <p>65% Бавовна, 35% Віскоза</p>
                  <p>Кожна сорочка унікальна</p>
                  <p>Зроблено в Україні</p>
                </div>
              )}
            </article>
          </section>
          <section className="hidden lg:flex flex-col lg:row-start-1 mt-[50px]">
            {" "}
            {/*description laptop version */}
            <div>
              <ul className="flex gap-[10px] font-onest font-light text-[16px]">
                <li className="opacity-50">Головна</li>
                <li className="bg-black h-[1px] w-[20px] opacity-50 mt-3"></li>
                <li className="opacity-50">Жилети</li>
                <li className="bg-black h-[1px] w-[20px] opacity-50 mt-3"></li>
                <li>Vest</li>
              </ul>
            </div>
            <h2 className="mt-[51px] font-cormorant font-light text-[32px]">
              Vest
            </h2>
            <p className="mt-[20px] font-onest font-light text-[17px] pb-[20px] border-b border-[#DDDDDD]">
              Перероблений декорований жилет. Класичний крій. Асиметричний декор
              - бісерна бахрома. Декоритивний рукав-крило з вінтажної тюлі.
            </p>
            <p className="mt-[20px] font-onest font-light text-[16px]">
              ₴1 000
            </p>
            <div className="flex flex-col mt-[20px]">
              <p className="font-onest font-normal text-[16px]">Розмір:</p>
              <div className="flex gap-[20px] mt-[10px]">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border border-black px-[10px] py-[2px] font-onest font-light text-[16px] hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <p className="font-onest font-normal text-[16px]">Колір:</p>
              <div className="flex gap-[10px] mt-[10px]">
                {["Чорний", "Білий", "Сірий", "Сірий"].map((color) => (
                  <button
                    key={color}
                    className="border border-black px-[10px] py-[2px] font-onest font-light text-[16px]  hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-fit h-fit bg-black border text-white px-[50px] py-[10px] mt-[20px] text-[16px] font-onest hover:bg-white hover:text-black hover:border-black transition-all duration-300">
              Додати у кошик
            </button>
            <p className="font-onest text-[16px] font-normal mt-[20px] pb-[20px] border-b border-[#DDDDDD]">
              SKU: <span className="font-light">V0423001</span>
            </p>
            <article className="mb-[50px]">
              <button
                onClick={toggleDetails}
                className="mb-[10px] mt-[29px] font-cormorant font-light text-[32px] opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                Деталі{" "}
                <span className="text-[32px] font-sans align-middle pb-2.5">
                  {detailsShown ? "-" : "+"}
                </span>
              </button>
              {detailsShown && (
                <div className="flex flex-col gap-[10px] font-onest font-light text-[16px] mb-[50px] opacity-50">
                  <p>
                    <span className="opacity-50 w-[5px] h-[5px] bg-black inline-block align-middle mr-[10px]"></span>
                    65% Бавовна, 35% Віскоза
                  </p>
                  <p>
                    <span className="opacity-50 w-[5px] h-[5px] bg-black inline-block align-middle mr-[10px]"></span>
                    Кожна сорочка унікальна
                  </p>
                  <p>
                    <span className="opacity-50 w-[5px] h-[5px] bg-black inline-block align-middle mr-[10px]"></span>
                    зроблено в Україні
                  </p>
                </div>
              )}
            </article>
          </section>
        </section>

        <section className="border-b pb-[50px] mx-[10px] lg:mx-[50px] lg:mt-[100px] lg:pb-[100px]">
          {" "}
          {/*similar products section*/}
          <h2 className="mb-[10px] font-cormorant font-light text-[16px] lg:text-[32px]">
            Те що тобі сподобається
          </h2>
          <figure className="flex overflow-x-scroll gap-[10px] h-[200px] lg:grid lg:grid-cols-3 lg:h-auto lg:gap-[20px] lg:overflow-y-hidden">
            {addProduct.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[145px] h-[170px] lg:h-full lg:w-full lg:mt-[50px]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="object-contain"
                />
                <div className="flex justify-between font-onest font-light text-base mt-[5px] lg:text-[16px] lg:mt-[10px]">
                  <p>{item.name}</p>
                  <p>₴ {item.price}</p>
                </div>
              </div>
            ))}
          </figure>
        </section>

        <footer className="flex flex-col items-center pb-[50px] lg:grid lg:grid-cols-3 lg:mx-[50px] lg:pt-[20px] lg:items-stretch">
          {" "}
          {/*footer section*/}
          <h1 className="lg:text-[40px] mt-[10px] lg:-mt-[10px] font-light font-cormorant tracking-widest mb-[10px] hover:scale-110 transition-all duration-300 cursor-pointer">
            LIMARENKO
          </h1>
          <ul className="lg:col-start-3 lg:text-[14px] lg:gap-[20px] flex flex-col items-center gap-[10px] font-onest font-light text-base mb-[20px] lg:items-start">
            <li className="hover:scale-110 transition-all duration-300">
              <a href="">Instagram</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300">
              <a href="">limarenko@gmail.com</a>
            </li>
          </ul>
          <ul className="lg:col-start-2 lg:text-[14px] lg:gap-[20px] lg:row-start-1 flex flex-col items-center gap-[10px] font-onest font-light text-base lg:items-start">
            <li className="hover:scale-110 transition-all duration-300 lg:hidden">
              <a href="">Доставка та повернення</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 hidden lg:block">
              <a href="">Політика доставки</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300">
              <a href="">Політика конфіденційності</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 lg:hidden">
              <a href="">Доставка та повернення</a>
            </li>
            <li className="hover:scale-110 transition-all duration-300 hidden lg:block">
              <a href="">Політика повернення коштів</a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
};

export default ProductPage;
