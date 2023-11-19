"use client";
import { FC } from "react";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SupportLink from "./support-link";

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
            >
              مع سيرفر عرب ليونز استمتع باكبر باقة من القنوات العالمية والعربية
            </motion.h2>
            <motion.p
              initial={{ translateX: "500px", opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="leading-[1.9] text-[17px] mt-2"
            >
              نحن نقدم خدمة البث التلفزيوني المباشر على جميع الأقمار و من كل
              أنحاء العالم. بالإشتراك معنا ستتمكن من مشاهدة القنوات التلفزيونية
              والأفلام والبرامج والقنوات الرياضية والوثائقية و الإخبارية من جميع
              أنحاء العالم و على جميع الأجهزة الخاصة بك.
            </motion.p>
            <ul className="list-none mt-[50px]">
              <SupportLink description="خدمة ما بعد البيع" duration={1.8} />
              <SupportLink
                description="متوفر اكثر من وسيلة للتواصل مع الدعم الفني 24/7"
                duration={2}
              />
              <SupportLink
                description="متوفر خدمة الطلبات المحتوي 3 مرات في الاسبوع"
                duration={2.2}
              />
              <SupportLink
                description="لدينا قنوات اكثر من +9000 قناة ونحن في تطور مستمر لزيادة العدد"
                duration={2.4}
              />
              <SupportLink
                description="مكتبه افلام منوعه تحتوي على 29000 فيلم قابلة للزيادة"
                duration={2.6}
              />
              <SupportLink
                description="مكتبه مسلسلات منوعه تحتوي على 9000 مسلسل قابله للزياده"
                duration={2.8}
              />
              <SupportLink
                description="بث مباشر للرياضة والبرامج التلفزيونية و افلام."
                duration={3}
              />
              <SupportLink
                description="محتوي السيرفر متاح باكثر من جودة"
                duration={3.2}
              />
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
