import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { features } from "@/constant/card-features";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PriceCardProps {
  title: string;
  price: string;
  currency: string;
}

const PriceCard: FC<PriceCardProps> = ({ currency, price, title }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Card
        className="hover:scale-105 transition my-10 rounded-none rounded-tl-3xl rounded-br-3xl rounded- w-2/3 mx-auto bg-gradient-to-l
        from-blue-950 to-main-blue/80
        border-t-0 border-l-0 border-r-main-orange
        border-b-main-orange text-white text-right"
      >
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            <CardTitle className="text-center mb-4">{title}</CardTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-end"
          >
            <CardDescription className="bg-main-orange -mr-6 text-white w-2/3 text-xl rounded-l-2xl px-4 py-6 flex flex-col">
              <span className="font-bold text-2xl block">{price}</span>{" "}
              {currency}
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <ul>
            {features.map((feature, index) => (
              <li
                className="flex gap-4 items-center flex-row-reverse my-3"
                key={index}
              >
                <Check className="text-main-orange w-4 h-4" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto bg-main-blue hover:bg-main-blue/70">
            <Link target="_blank" href="https://qrco.de/lionztv">
              اشترك الان
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PriceCard;
