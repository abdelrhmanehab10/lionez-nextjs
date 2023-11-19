import { FC } from "react";
import Price from "../_components/price";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اشتراك الان | سيرفر عرب ليونز",
  description: `اشترك الان في سيرفر عرب ليونز وستمتع بمشاهدة كل جديد`,
};

interface PricePageProps {}

const PricePage: FC<PricePageProps> = ({}) => {
  return (
    <div className="py-20">
      <Price />
    </div>
  );
};

export default PricePage;
