"use client";
import Image from "next/image";
import { FC } from "react";

import { motion } from "framer-motion";

interface ChannelProps {}

const Channel: FC<ChannelProps> = ({}) => {
  return (
    <div className="bg-main-background text-center">
      <div
        className="w-[80%] mx-auto mt-10 p-[20px]
        shadow-[-7px_5px_13px_-1px_#000000a8] border-2 border-main-orange rounded-[80px] 
        flex justify-center items-center gap-5"
        style={{ backgroundImage: `url('/footer-dec.png')` }}
      >
        <motion.div
          initial={{ translateY: "50px" }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={300}
            height={300}
            alt="Bein Sport"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="w-20"
            src={"/channels/bein.png"}
          />
        </motion.div>
        <motion.div
          initial={{ translateY: "50px" }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={300}
            height={300}
            alt="AD Sports"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="w-20"
            src={"/channels/ad.gif"}
          />
        </motion.div>
        <motion.div
          initial={{ translateY: "50px" }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={300}
            height={300}
            alt="SSC Sports"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            className="w-20"
            src={"/channels/ssc.png"}
          />
        </motion.div>
        <motion.div
          initial={{ translateY: "50px" }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={300}
            height={300}
            alt="OSN"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            className="w-20"
            src={"/channels/osn.png"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Channel;
