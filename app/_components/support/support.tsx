"use client";
import { FC } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import SupportLink from "./support-link";
import { SUPPORT_LINKS } from "@/constant";

interface SupportProps {}

const Support: FC<SupportProps> = ({}) => {
  return (
    <div
      className="overflow-hidden bg-no-repeat pr-[20px] bg-left-bottom relative pb-[30px] py-5"
      style={{ backgroundImage: "url('/services-right-dec.png')" }}
    >
      <div className="p-3">
        <div className="pt-5 grid md:grid-cols-2">
          <div className="text-center p-4 bg-[url('/services-left-dec.png')] bg-no-repeat bg-right">
            <motion.h2
              initial={{ translateX: "500px", opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-main-orange text-right text-3xl pb-4"
            >
              مع سيرفر عرب ليونز استمتع باكبر باقة من القنوات العالمية والعربية
            </motion.h2>
            <motion.p
              initial={{ translateX: "500px", opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              className="leading-[1.9] text-[17px] mt-2"
            >
              نحن نقدم خدمة البث التلفزيوني المباشر على جميع الأقمار و من كل
              أنحاء العالم. بالإشتراك معنا ستتمكن من مشاهدة القنوات التلفزيونية
              والأفلام والبرامج والقنوات الرياضية والوثائقية و الإخبارية من جميع
              أنحاء العالم و على جميع الأجهزة الخاصة بك.
            </motion.p>
            <ul className="list-none mt-[50px]">
              {SUPPORT_LINKS.map((support, i) => (
                <SupportLink
                  key={i}
                  description={support}
                  duration={i * 0.2 + 1}
                />
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ translateX: "-500px", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
            className="hidden md:block"
          >
            <Image
              src="/support.png"
              width={1000}
              height={1000}
              alt="support team"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
