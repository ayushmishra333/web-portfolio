import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import web10 from "../public/web10.png";
import web11 from "../public/web11.png";

const images = [web1, web2, web3, web4, web5, web6, web7, web8, web9, web10, web11];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative flex justify-center items-center">
      <div onClick={prevSlide} className="absolute left-0 text-3xl cursor-pointer select-none z-10">
        <AiOutlineLeft className="text-5xl text-stone-900 dark:text-white hover:text-blue-500" />
      </div>
      <div onClick={nextSlide} className="absolute right-0 text-3xl cursor-pointer select-none z-10">
        <AiOutlineRight className="text-5xl text-stone-900 dark:text-white hover:text-blue-500" />
      </div>
      {images.map((image, index) => (
        <div key={index} className={index === current ? "opacity-1 transition duration-1000 ease-in-out" : "opacity-0"}>
          {index === current && (
            <Image src={image} alt={`web project ${index}`} className="rounded-lg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
