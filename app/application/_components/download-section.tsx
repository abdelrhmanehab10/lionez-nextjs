import Link from "next/link";
import { FC } from "react";

import { Download } from "lucide-react";
import { APPS_DOWNLOAD_LINKS } from "@/constant";

interface ItemType {
  link: string;
  title: string;
}

interface DownloadSectionProps {
  items: (typeof APPS_DOWNLOAD_LINKS)[number];
  system: string;
  code?: number;
}

const DownloadSection: FC<DownloadSectionProps> = ({ items, system, code }) => {
  return (
    <div className="mt-10">
      <div className="p-3">
        <h2>
          تحميل تطبيقات الــ <span className="mr-2">{system}</span>
        </h2>
        <p className="text-white/50 ms-14 text-sm">استكشف كل اصدار بنفسك</p>
      </div>
      <div className="flex justify-around gap-3 flex-wrap md:flex-nowrap md:gap-10 mx-5">
        {items?.map((download, idx) => (
          <Link
            key={idx}
            href={download.link}
            target={"_blank"}
            className="text-lg font-semibold text-center bg-gradient-to-l 
            from-main-gradientRight to-main-gradientLeft mt-3 w-1/3 mx-auto p-1 rounded"
          >
            {download.title} <br /> <span className="text-base">{download.code}</span>
            <Download className="mx-auto" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;
