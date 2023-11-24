"use client";

import { FC } from "react";
import Link from "next/link";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ApplicationLink from "./application-link";
import { APPLICATION_LINKS } from "@/constant";

interface ApplicationProps {
  isButton?: boolean;
}

const Application: FC<ApplicationProps> = ({ isButton }) => {
  return (
    <div className="bg-[url(/services-left-dec.png)] bg-no-repeat p-[50px]">
      <motion.div
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-main-orange">تطبيقاتنا</h2>
        <p className="text-white/50 text-sm">
          لدينا اكثر من تطبيق لمختلف الاجهزة
        </p>
      </motion.div>
      <div className="container pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center pt-lg-5 support-text">
            <h2 className="ps-3 text-xl text-right w-1/2 text-main-orange">
              مع سيرفر عرب ليونز استمتع باكبر باقة من القنوات العالمية والعربية
            </h2>
            <motion.p
              className="ps-5 text-white/70 text-right text-sm"
              initial={{ opacity: 0, translateX: "100px" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true }}
            >
              سيرفر عرب ليونز سيرفراتنا تدعم العمل على جميع الاجهزة
            </motion.p>
            <ul className="md:ps-5 mb-3">
              {APPLICATION_LINKS.map((link, i) => (
                <ApplicationLink key={i} description={link} />
              ))}
            </ul>
            {isButton ? (
              <motion.div
                className="mt-5 md:flex justify-start md:mr-5"
                initial={{ opacity: 0, translateY: "100px" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
              >
                <Button
                  className="bg-gradient-to-l from-main-gradientLeft to-main-gradientRight 
                  py-8 px-8 hover:bg-main-orange"
                >
                  <Link className="btn nav-page-downApp" href="app">
                    تحميل التطبيق <Download className="mx-auto mt-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ) : (
              ""
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: "-300px" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            className="md:block hidden overflow-x-hidden"
          >
            <Image
              src="/19199364.png"
              width={1000}
              height={1000}
              alt="application"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Application;
