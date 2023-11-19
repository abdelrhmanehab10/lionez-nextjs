import Image from "next/image";
import { FC } from "react";

import { Film, Satellite, Tv } from "lucide-react";
import Counter from "./counter";

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
        <div className="bg-main-background/70 text-center w-full h-full flex justify-center gap-10 md:gap-20 items-center ">
          <Counter label="قنوات" icon={Satellite} />
          <Counter label="افلام" icon={Film} />
          <Counter label="مسلسلات" icon={Tv} />
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
