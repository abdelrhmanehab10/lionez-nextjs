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
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { VIP_FEATURES } from "@/constant";

interface PriceCardProps {
  title: string;
  price: string;
  items: string[];
}

const PriceCard: FC<PriceCardProps> = ({ price, title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card
        className="hover:scale-105 transition my-10 rounded-none rounded-tl-3xl rounded-br-3xl rounded- w-2/3 mx-auto bg-gradient-to-l
        from-main-gradientLeft to-main-gradientRight
        border-t-0 border-l-0 border-r-main-orange
        border-b-main-orange text-white text-right"
      >
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <CardTitle className="text-center mb-4">{title}</CardTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-end"
          >
            <CardDescription className="bg-main-orange -mr-6 text-white w-2/3 text-xl rounded-l-2xl px-4 py-6 flex flex-col">
              <span className="font-bold text-2xl block"><Link href="https://qrco.de/lionztv" target="_blank">{price}</Link></span>
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <ul>
            {items.map((feature, index) => (
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
          <Link href="https://qrco.de/lionztv" target="_blank">
              اشترك الان
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PriceCard;
