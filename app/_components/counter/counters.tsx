"use client";

import { FC } from "react";
import Image from "next/image";

import Counter from "./counter";
import { COUNTERS } from "@/constant";

interface CountersProps {}

const Counters: FC<CountersProps> = ({}) => {
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
        <div
          className="bg-main-background/70 text-center w-full 
          h-full flex justify-center gap-10 md:gap-20 items-center"
        >
          {COUNTERS.map((counter, i) => (
            <Counter
              key={i}
              label={counter.label}
              icon={counter.icon}
              end={counter.end}
            />
          ))}
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

export default Counters;
