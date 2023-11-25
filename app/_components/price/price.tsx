"use client";

import { FC, useState } from "react";
import PriceCard from "./price-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceButton from "./price-button";
import {
  GOLD_FEATURES,
  PRICE_BUTTONS,
  PRICE_CARDS,
  VIP_FEATURES,
} from "@/constant";
import { cn } from "@/lib/utils";

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
  const [isActive, setIsActive] = useState<number>(0);

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
          <ul className="price-ul">
            {PRICE_BUTTONS.map((btn, i) => (
              <PriceButton
                key={i}
                id={i}
                isActive={isActive}
                setIsActive={setIsActive}
                title={btn}
              />
            ))}
          </ul>
        </div>
        <TabsContent
          className={cn(
            "text-center md:grid",
            isActive === 2 ? "grid-cols-2" : "grid-cols-3"
          )}
          value="lionz-tv-vip"
        >
          {PRICE_CARDS[0][isActive].map((card, i) => (
            <PriceCard
              key={i}
              title={card.title}
              price={card.price}
              items={VIP_FEATURES}
              currency={
                isActive === 3
                  ? "ريال سعودي"
                  : isActive === 2
                  ? "جنيه مصري"
                  : isActive === 1
                  ? "درهم اماراتي"
                  : "دولار"
              }
            />
          ))}
        </TabsContent>
        <TabsContent
          className="text-center md:grid grid-cols-3"
          value="lionz-tv-gold"
        >
          {PRICE_CARDS[1][isActive].map((card, i) => (
            <PriceCard
              key={i}
              title={card.title}
              price={card.price}
              items={GOLD_FEATURES}
              currency={
                isActive === 3
                  ? "ريال سعودي"
                  : isActive === 2
                  ? "جنيه مصري"
                  : isActive === 1
                  ? "درهم اماراتي"
                  : "دولار"
              }
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Price;
