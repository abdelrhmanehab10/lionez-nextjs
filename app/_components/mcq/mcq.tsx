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
import MCQAccordionItem from "./mcq-accordion-item";
import Link from "next/link";

const ACCORDION_ITEMS = [
  {
    question: "- هل يمكن تشغيل جهازين فى نفس الوقت ؟",
    answer: "عدد الاجهزة الاقصى فى الوقت نفسه هو 1",
    description: (
      <>
        <strong className="mb-2"></strong> <br />
        تقدر تسجل دخول على اكثر من جهاز ولكن فقط جهاز واحد يكون
        شغال فى الوقت نفسه
      </>
    ),
  },
  {
    question: "- ما هى سرعة النت المناسبة ؟",
    answer: "سرعة النت المطلوبة :",
    description: (
      <>
        <br />
        - 5 ميجا لتشغيل جودة SD
        <br />
        - 10 ميجا لتشغل جودة HD
        <br />
        - 20 ميجا لتشغل جودة FHD
        <br />- 40 ميجا لتشغل جودة 4K
      </>
    ),
  },
  {
    question: "- مشكلة فى تسجيل الدخول للبرنامج ؟",
    description: (
      <>
        حل 1 = اغلاق الجهاز والانترنت لمدة دقيقتين من الكهربا
        <br />
        حل 2 = حذف الاشتراك من التطبيق واضافته مرة اخري
        <br />
        تأكد ان الاشتراك مفعل لـ كل الدول وليس داخل مصر فقط
        <br />
        اذا استمرت المشكلة تواصل مع الدعم الفني,
      </>
    ),
  },
  {
    question: "- كيف يمكنني تشغيل سيرفر ليونز علي شاشة ذكية؟",
    description: (
      <>
        يوجد الكثير من البرامج التي يعمل عليها سيرفر ليونز علي تطبيقنا Lionz Tv
        علي الشاشات الزكية مثل سامسونج و LG و انظمة الاندرويد
        <br />
        ويوجد تطبيقات ثانية مثل
        <ul>
          <li>- LionzاTV</li>
          <li>- IPTV Smarters</li>
          <li>- Room iptv</li>
          <li>- Ibo player</li>
        </ul>
      </>
    ),
  },
  {
    question: "- علي أي أجهزه يعمل إشتراك ليونز؟",
    description: (
      <>
        يعمل إشتراك ليونز علي كل الأجهزه, من شاشات وهواتف ذكية وأيضًا علي
        اللابتوب وأجهزه البلايستيشن.
      </>
    ),
  },
  { question: "- مشكله التقطيع", description: <>التنقل بيه مصادر المختلفه</> },
];

interface MCQProps {}

const MCQ: FC<MCQProps> = ({}) => {
  return (
    <div className="py-[50px] text-center">
      <h2 className="text-3xl font-bold text-main-orange">
        الأسئلة الشائعة حول سيرفر عرب ليونز
      </h2>
      <h3 className="text-white/50 text-sm">
        في حال وجود استفسار يتعلق بالخدمه او الاشتراك لا تتردد في الاتصال بنا
      </h3>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 items-center ">
        <Accordion className="w-2/3 mx-auto  " type="single" collapsible>
          {ACCORDION_ITEMS.map((accordion, i) => (
            <MCQAccordionItem
              key={i}
              question={accordion.question}
              answer={accordion.answer}
              description={accordion.description}
              value={i}
            />
          ))}
          <button className="text-white bg-main-blue transition shadow-[-5px_6px_9px_0px_#000000a3] font-bold hover:bg-main-orange px-2 py-2 px-6  rounded mt-6 flex justify-start text-xl	">
            <Link href="https://qrco.de/lionztv" target="_blank">
              للتواصل مع الدعم
            </Link>
          </button>
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
