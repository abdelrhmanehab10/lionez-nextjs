import { FC } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

interface HeroSwiperProps {
  background: string;
  title: string;
  titleFocus: string;
  description: string;
}

const HeroSwiper: FC<HeroSwiperProps> = ({
  background,
  title,
  titleFocus,
  description,
}) => {
  return (
    <div
      className="
        w-full 
        h-full 
        bg-repeat 
        bg-center 
        bg-cover 
        flex items-center 
        text-white
        "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="
        ps-[10px]
        md:ps-[70px]
        relative 
        w-[75%] 
        md:w-[60%] 
        h-full 
        flex 
        items-center 
        z-50
        before:content-['']
        before:absolute
        before:w-[150%]
        before:h-[150%]
        before:bg-black/40
        before:-z-10
        before:left-[10px]
        before:rotate-[345deg]
        before:border-l-4
        before:border-main-orange 
        "
      >
        <motion.div
          initial={{ translateX: "300px", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            absolute
            top-[30%]
            md:static
            "
        >
          <h1 className="text-white font-bold text-[35px] md:text-[35px] drop-shadow-[-5px_6px_9px_#000000a3] cursor-default leading-[1.5]">
            <span className="text-main-orange">{titleFocus}</span>
            {title}
          </h1>
          <p className="text-[20px] md:text-[25px]">{description}</p>
          <button className="text-white bg-main-blue my-5 transition shadow-[-5px_6px_9px_0px_#000000a3] font-bold hover:bg-main-orange px-2 py-1 ms-8 md:ms-0 rounded ">
            <Link href="https://qrco.de/lionztv" target="_blank">
              اشترك الأن
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSwiper;
