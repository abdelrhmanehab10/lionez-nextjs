import Channels from "@/app/_components/channels/channels";
import Header from "@/app/_components/hero/hero";
import Support from "@/app/_components/support/support";
import Counters from "@/app/_components/counter/counters";
import Price from "@/app/_components/price/price";
import Application from "@/app/_components/application/application";
import MCQ from "@/app/_components/mcq/mcq";

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
