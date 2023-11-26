import Channels from "@/app/_components/channels/channels";
import Header from "@/app/_components/hero/hero";
import Support from "@/app/_components/support/support";
import Counters from "@/app/_components/counter/counters";
import Price from "@/app/_components/price/price";
import Application from "@/app/_components/application/application";
import MCQ from "@/app/_components/mcq/mcq";

export default function Home() {
  // var Tawk_API = Tawk_API || {},
  //   Tawk_LoadStart = new Date();
  // (function () {
  //   var s1 = document.createElement("script"),
  //     s0 = document.getElementsByTagName("script")[0];
  //   s1.async = true;
  //   s1.src = "https://embed.tawk.to/654d31f4958be55aeaae2584/1heqom9dp";
  //   s1.charset = "UTF-8";
  //   s1.setAttribute("crossorigin", "*");
  //   s0.parentNode.insertBefore(s1, s0);
  // })();
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
