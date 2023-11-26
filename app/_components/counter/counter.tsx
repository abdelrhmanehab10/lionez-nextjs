"use client";

import { FC } from "react";

import { LucideIcon } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface CounterProps {
  label: string;
  icon: LucideIcon;
  end: number;
}

const Counter: FC<CounterProps> = ({ label, end, icon: Icon }) => {
  return (
    <motion.div
      initial={{ translateY: "300px", opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="p-5 rounded-full border-14 border-[hsla(0,0%,100%,.586)] w-30 h-30 flex 
        flex-col justify-center items-center"
      >
        <Icon className="mx-auto w-16 h-16" />
      </div>
      <h3 className="mt-2 text-2xl">{label}</h3>
      <span className="text-main-orange text-lg">
        <CountUp enableScrollSpy start={0} end={end} duration={3} delay={0} />+
      </span>
    </motion.div>
  );
};

export default Counter;
