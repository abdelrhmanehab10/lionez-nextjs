"use client";

import { FC, useState } from "react";
import PriceCard from "./price-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
  const [isActive, setIsActive] = useState<string>("3");
  return (
    <div className="bg-[url('/portfolio-left-dec.png')] bg-no-repeat bg-[center_left] relative md:p-5 block">
      <Tabs defaultValue="lionz-tv-vip" className="mt-10 w-full text-center">
        <TabsList className="bg-transparent">
          <TabsTrigger
            className="text-white font-bold transition bg-main-blue/30 hover:bg-main-orange 
            hover:scale-[1] mx-2"
            value="lionz-tv-vip"
          >
            Lionz Tv Vip
          </TabsTrigger>
          <TabsTrigger
            className="text-white font-bold transition bg-main-blue/30 hover:bg-main-orange 
            hover:scale-[1] mx-2"
            value="lionz-tv-gold"
          >
            Lionz Tv Gold
          </TabsTrigger>
        </TabsList>
        <div className="mt-5">
          <h2>اطلب الاشتراك الان</h2>
          <ul className="mt-5 flex items-center justify-center gap-8">
            <li
              id="0"
              className={cn(
                `text-white font-bold transition px-2 py-1 cursor-pointer rounded hover:bg-main-orange 
              hover:scale-[1] mx-2`,
                isActive === "0" ? "bg-main-orange" : ""
              )}
              onClick={(e) => setIsActive(e.currentTarget.id)}
            >
              جميع دول العالم
            </li>
            <li
              id={"1"}
              className={cn(
                `text-white font-bold transition p-1 cursor-pointer rounded hover:bg-main-orange 
              hover:scale-[1] mx-2`,
                isActive === "1" ? "bg-main-orange" : ""
              )}
              onClick={(e) => setIsActive(e.currentTarget.id)}
            >
              الامارات
            </li>
            <li
              id={"2"}
              className={cn(
                `text-white font-bold transition p-1 cursor-pointer rounded hover:bg-main-orange 
              hover:scale-[1] mx-2`,
                isActive === "2" ? "bg-main-orange" : ""
              )}
              onClick={(e) => setIsActive(e.currentTarget.id)}
            >
              مصر
            </li>
            <li
              id={"3"}
              className={cn(
                `text-white font-bold transition p-1 cursor-pointer rounded hover:bg-main-orange 
              hover:scale-[1] mx-2`,
                isActive === "3" ? "bg-main-orange" : ""
              )}
              onClick={(e) => setIsActive(e.currentTarget.id)}
            >
              السعودية
            </li>
          </ul>
        </div>

        <TabsContent
          className="text-center md:grid grid-cols-3"
          value="lionz-tv-vip"
        >
          <PriceCard
            title="اشتراك سنتين"
            currency={
              isActive === "0"
                ? "ريال سعودي"
                : isActive === "1"
                ? "جنيه مصري"
                : isActive === "2"
                ? "درهم اماراتي"
                : "دولار"
            }
            price={
              isActive === "0"
                ? "250"
                : isActive === "1"
                ? "500"
                : isActive === "2"
                ? "250"
                : "70"
            }
          />
          <PriceCard
            title="اشتراك سنوي"
            currency={
              isActive === "0"
                ? "ريال سعودي"
                : isActive === "1"
                ? "جنيه مصري"
                : isActive === "2"
                ? "درهم اماراتي"
                : "دولار"
            }
            price={
              isActive === "0"
                ? "150"
                : isActive === "1"
                ? "700"
                : isActive === "2"
                ? "150"
                : "40"
            }
          />
          <PriceCard
            title="اشتراك 6 شهور"
            currency={
              isActive === "0"
                ? "ريال سعودي"
                : isActive === "1"
                ? "جنيه مصري"
                : isActive === "2"
                ? "درهم اماراتي"
                : "دولار"
            }
            price={
              isActive === "0"
                ? "90"
                : isActive === "1"
                ? "400"
                : isActive === "2"
                ? "150"
                : "24"
            }
          />
        </TabsContent>
        <TabsContent
          className="text-center md:grid grid-cols-3"
          value="lionz-tv-gold"
        >
          <PriceCard
            title="اشتراك سنوي"
            currency={
              isActive === "0"
                ? "ريال سعودي"
                : isActive === "1"
                ? "جنيه مصري"
                : isActive === "2"
                ? "درهم اماراتي"
                : "دولار"
            }
            price={
              isActive === "0"
                ? "100"
                : isActive === "1"
                ? "350"
                : isActive === "2"
                ? "100"
                : "25"
            }
          />
          <PriceCard
            title="اشتراك 3 شهور"
            currency={
              isActive === "0"
                ? "ريال سعودي"
                : isActive === "1"
                ? "جنيه مصري"
                : isActive === "2"
                ? "درهم اماراتي"
                : "دولار"
            }
            price={
              isActive === "0"
                ? "40"
                : isActive === "1"
                ? "150"
                : isActive === "2"
                ? "60"
                : "15"
            }
          />
          <PriceCard
            title="اشتراك 6 شهور"
            currency={
              isActive === "0"
                ? "ريال سعودي"
                : isActive === "1"
                ? "جنيه مصري"
                : isActive === "2"
                ? "درهم اماراتي"
                : "دولار"
            }
            price={
              isActive === "0"
                ? "60"
                : isActive === "1"
                ? "250"
                : isActive === "2"
                ? "60"
                : "20"
            }
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Price;
