import { FC } from "react";

import { LucideIcon } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface CounterProps {
  label: string;
  icon: LucideIcon;
}

const Counter: FC<CounterProps> = ({ label, icon: Icon }) => {
  return (
    <motion.div
      initial={{ translateY: "300px", opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="p-3 rounded-full border-4 border-white w-36 h-36 flex 
      flex-col justify-center items-center"
    >
      <Icon className="mx-auto w-10 h-10" />
      <h3 className="mt-2">{label}</h3>
      <span>
        <CountUp enableScrollSpy start={0} end={9000} duration={3} delay={0} />+
      </span>
    </motion.div>
  );
};

export default Counter;
