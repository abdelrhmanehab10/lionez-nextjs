import Channels from "@/app/_components/channels/channels";
import Header from "@/app/_components/hero/hero";
import Support from "@/app/_components/support/support";
import Counters from "@/app/_components/counter/counters";
import Price from "@/app/_components/price/price";
import Application from "@/app/_components/application/application";
import MCQ from "@/app/_components/mcq/mcq";
<<<<<<< HEAD
=======

>>>>>>> 972e812142e5f7700d01d29e5c323c377436fcb7
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "الرئيسية | سيرفر عرب ليونز",
  description: `سيرفر ليونز تي في أقوي سيرفر لمشاهدة المباريات والمحتوي الترفيهي في الشرق الأوسط, يحتوي علي أكثر من 200 تيرا افلام ومسلسلات وقنوات ممتازة بجودات مختلفة
  نعمل في ليونز تي في علي توفير أفضل تجربة للمستخدم, فنقوم بتقسيم...`,
};

export default function Home() {

  return (
    <>
      <Header />
      <Channels />
      <Support />
      <Counters />
      <Price />
      <Application isButton />
      <MCQ />
    </>
  );
}
