import { FC } from "react";
import Application from "../_components/application/application";
import Image from "next/image";
import DownloadSection from "./_components/download-section";
import type { Metadata } from "next";
import { APPS_DOWNLOAD_LINKS } from "@/constant";

interface ApplicationPageProps {}

export const metadata: Metadata = {
  title: "تطبيقاتنا | سيرفر عرب ليونز",
  description: `.يمكنك تحميل التطبيقات الخاصة بسيرفر عرب ليونز والاستمتاع بمزاية بلا حدود`,
};

const APPLICATION_PAGE_ITEMS = [
  " افتح المتجر الخاص بالشاشة",
  "  ابحث بكلمة Lionz",
  " قم بتثبت التطبيق",
  " ادخل علي قائمة Portal وارسل لنا الماك والباسورد لرفع ملف القنوات",
  " لتفعيل البرنامج بسعر رمزي تواصل مع الدعم الفني",
];

const ApplicationPage: FC<ApplicationPageProps> = ({}) => {
  return (
    <div className="py-20">
      <Application />
      {APPS_DOWNLOAD_LINKS.map((item, i) => (
        <DownloadSection
          key={i}
          items={item}
          system={i === 0 ? "Android" : i === 1 ? "ios" : "windows"}
        />
      ))}
      <div className="flex flex-col md:flex-row items-center md:mt-10">
        <div className="py-16 p-10">
          <h3 className="text-main-orange font-bold text-xl mb-2">
            لتحميل تطبيقنا الخاص علي الشاشات السمارت LionzTv
          </h3>
          <ul className="list-decimal p-5">
            {APPLICATION_PAGE_ITEMS.map((item, i) => (
              <li key={i} className="py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <Image
            className="w-full"
            src="/sumsung-tv.png"
            width={1000}
            height={1000}
            alt="اشتراك شاشة سامسونج"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
