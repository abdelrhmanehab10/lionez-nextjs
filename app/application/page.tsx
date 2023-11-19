import { FC } from "react";
import Application from "../_components/application";
import { APPS_DOWNLOAD_LINKS } from "@/constant/apps-links";
import Image from "next/image";
import DownloadSection from "./_components/download-section";

interface ApplicationPageProps {}

const ApplicationPage: FC<ApplicationPageProps> = ({}) => {
  const [{ apk }, { ios }, { windows }] = APPS_DOWNLOAD_LINKS;

  return (
    <div className="py-20">
      <Application />
      <DownloadSection items={apk as []} system="Android" />
      <DownloadSection items={ios as []} system="ios" />
      <DownloadSection items={windows as []} system="Windows" />
      <div className="flex flex-col md:flex-row items-center md:mt-10">
        <div className="py-16 p-10">
          <h3 className="text-main-orange font-bold text-xl mb-2">
            لتحميل تطبيقنا الخاص علي الشاشات السمارت LionzTv
          </h3>
          <ul className="list-decimal p-5">
            <li className="py-3"> افتح المتجر الخاص بالشاشة</li>
            <li className="py-3"> ابحث بكلمة Lionz</li>
            <li className="py-3"> قم بتثبت التطبيق</li>
            <li className="py-3">
              ادخل علي قائمة Portal وارسل لنا الماك والباسورد لرفع ملف القنوات{" "}
            </li>
            <li className="py-3">
              لتفعيل البرنامج بسعر رمزي تواصل مع الدعم الفني
            </li>
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
