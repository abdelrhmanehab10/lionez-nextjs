"use client";
import { FC } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MCQProps {}

const MCQ: FC<MCQProps> = ({}) => {
  return (
    <div className="py-[50px] text-center">
      <h2 className="text-3xl font-bold text-main-orange">
        الأسئلة الشائعة حول سيرفر عرب ليونز
      </h2>
      <p className="text-white/50 text-sm">
        في حال وجود استفسار يتعلق بالخدمه او الاشتراك لا تتردد في الاتصال بنا
      </p>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 items-center">
        <Accordion className="w-2/3 mx-auto " type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="bg-gradient-to-l
             from-main-gradientLeft to-main-gradientRight rounded-t px-3"
            >
              - هل يمكن تشغيل جهازين فى نفس الوقت ؟
            </AccordionTrigger>
            <AccordionContent className="bg-white text-black p-2">
              <strong className="mb-2">
                عدد الاجهزة الاقصى فى الوقت نفسه هو 1
              </strong>{" "}
              <br />
              تقدر تسجل دخول على اكثر من جهاز ولكن فقط جهاز واحد يكون
              شغال فى الوقت نفسه
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              className="bg-gradient-to-l
             from-main-gradientLeft to-main-gradientRight px-3"
            >
              - ما هى سرعة النت المناسبة ؟
            </AccordionTrigger>
            <AccordionContent className="bg-white text-black p-2">
              <strong className="mb-2">سرعة النت المطلوبة :</strong>
              <br />
              - 5 ميجا لتشغيل جودة SD
              <br />
              - 10 ميجا لتشغل جودة HD
              <br />
              - 20 ميجا لتشغل جودة FHD
              <br />- 40 ميجا لتشغل جودة 4K
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger
              className="bg-gradient-to-l
             from-main-gradientLeft to-main-gradientRight px-3"
            >
              - مشكلة فى تسجيل الدخول للبرنامج ؟
            </AccordionTrigger>
            <AccordionContent className="bg-white text-black p-2">
              حل 1 = اغلاق الجهاز والانترنت لمدة دقيقتين من الكهربا
              <br />
              حل 2 = حذف الاشتراك من التطبيق واضافته مرة اخري
              <br />
              تأكد ان الاشتراك مفعل لـ كل الدول وليس داخل مصر فقط
              <br />
              اذا استمرت المشكلة تواصل مع الدعم الفني
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger
              className="bg-gradient-to-l
             from-main-gradientLeft to-main-gradientRight px-3"
            >
              - كيف يمكنني تشغيل سيرفر ليونز علي شاشة ذكية؟
            </AccordionTrigger>
            <AccordionContent className="bg-white text-black p-2">
              يوجد الكثير من البرامج التي يعمل عليها سيرفر ليونز علي تطبيقنا
              Lionz Tv علي الشاشات الزكية مثل سامسونج و LG و انظمة الاندرويد
              <br />
              ويوجد تطبيقات ثانية مثل
              <ul>
                <li>- LionzاTV</li>
                <li>- IPTV Smarters</li>
                <li>- Room iptv</li>
                <li>- Ibo player</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger
              className="bg-gradient-to-l
             from-main-gradientLeft to-main-gradientRight px-3"
            >
              - علي أي أجهزه يعمل إشتراك ليونز؟
            </AccordionTrigger>
            <AccordionContent className="bg-white text-black p-2">
              يعمل إشتراك ليونز علي كل الأجهزه, من شاشات وهواتف ذكية وأيضًا علي
              اللابتوب وأجهزه البلايستيشن.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger
              className="bg-gradient-to-l
             from-main-gradientLeft to-main-gradientRight px-3"
            >
              - مشكله التقطيع
            </AccordionTrigger>
            <AccordionContent className="bg-white text-black p-2">
              التنقل بيه مصادر المختلفه
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <motion.div
          initial={{ opacity: 0, translateX: "-300px" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          className="md:block hidden overflow-x-hidden"
        >
          <Image
            src="/Service 24_7.gif"
            alt="دعم سيرفر عرب ليونز"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MCQ;
