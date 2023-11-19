import { FC } from "react";
import Price from "../_components/price";

interface PricePageProps {}

const PricePage: FC<PricePageProps> = ({}) => {
  return (
    <div className="py-20">
      <Price />
    </div>
  );
};

export default PricePage;
