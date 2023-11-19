"use client";

import Image from "next/image";
import { FC } from "react";

import CountUp from "react-countup";
import { Film, Satellite, Tv } from "lucide-react";
import { motion } from "framer-motion";
interface CounterProps {}

const Counter: FC<CounterProps> = ({}) => {
  return (
    <div className="relative w-full">
      <div
        className="w-full h-[700px] bg-[url('/4.jpg')] 
        bg-fixed bg-cover bg-[center_top] relative"
      >
        <Image
          className="absolute top-0 w-full right-0"
          src="/waves/waveup.svg"
          width={300}
          height={300}
          alt="wave up"
        />
        <div className="bg-main-background/50 text-center w-full h-full flex justify-around items-center ">
          <motion.div
            initial={{ translateY: "300px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
          >
            <Satellite className="mx-auto w-10 h-10" />
            <h3 className="mt-2">قنوات</h3>
            <CountUp
              enableScrollSpy
              start={0}
              end={9000}
              duration={3}
              delay={0}
            />
            +
          </motion.div>
          <motion.div
            initial={{ translateY: "300px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="movie col-sm-4"
          >
            <Film className="mx-auto w-10 h-10" />
            <h3 className="mt-2">افلام</h3>
            <CountUp
              enableScrollSpy
              start={0}
              end={29000}
              duration={3}
              delay={0}
            />
            +
          </motion.div>
          <motion.div
            initial={{ translateY: "300px", opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="series col-sm-4"
          >
            <Tv className="mx-auto w-10 h-10" />
            <h3 className="mt-2">مسلسلات</h3>
              <CountUp
                enableScrollSpy
                start={0}
                end={9000}
                duration={3}
                delay={0}
              />
              +
          </motion.div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 w-full start-0"
        src="/waves/wavedown.svg"
        width={300}
        height={300}
        alt="wave up"
      />
    </div>
  );
};

export default Counter;
