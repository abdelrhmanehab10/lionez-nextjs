"use client";

import Image from "next/image";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ChannelProps {
  imageSrc: string;
}

const Channel: FC<ChannelProps> = ({ imageSrc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ translateY: "50px" }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        width={300}
        height={300}
        className="md:w-20"
        alt="channel-logo"
        src={imageSrc}
      />
    </motion.div>
  );
};

export default Channel;
