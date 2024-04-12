"use client";

import { FC } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
interface SupportLinkProps {
  description: string;
  duration: number;
}

const SupportLink: FC<SupportLinkProps> = ({ description, duration }) => {
  return (
    <motion.li
      initial={{ translateX: "500px", opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration }}
      viewport={{ once: true }}
      className="flex items-center justify-start my-3 gap-5"
    >
      <CheckCircle />
      {description}
    </motion.li>
  );
};

export default SupportLink;
