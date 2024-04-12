import { FC } from "react";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ApplicationLinkProps {
  description: string;
}

const ApplicationLink: FC<ApplicationLinkProps> = ({ description }) => {
  return (
    <motion.li
      className="md:ps-5 mt-5 flex items-center"
      initial={{ opacity: 0, translateX: "100px" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
    >
      <span className="me-2">
        <CheckCircle className="w-4 h-4 text-main-orange" />
      </span>
      {description}
    </motion.li>
  );
};

export default ApplicationLink;
