"use client";

import { FC } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

interface ChannelProps {
  imageSrc: string;
}

const Channel: FC<ChannelProps> = ({ imageSrc }) => {
  return (
    <motion.div
      initial={{ translateY: "50px" }}
      whileInView={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image width={300} height={300} alt="channel-logo" src={imageSrc} />
    </motion.div>
  );
};

export default Channel;
