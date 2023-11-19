"use client";

import Channel from "@/app/_components/channel";
import Header from "@/app/_components/header";
import Support from "@/app/_components/support";
import Counter from "@/app/_components/counter";
import Price from "@/app/_components/price";
import Application from "@/app/_components/application";
import MCQ from "@/app/_components/mcq";
import { useQuery } from "react-query";
import { SearchItemType } from "@/types/types";
import axios from "axios";
import { useDataStore } from "@/hooks/use-data-store";

export default function Home() {
  const { setData } = useDataStore();
  const getAllData = useQuery({
    queryKey: ["content"],
    queryFn: async () => {
      const { data }: { data: SearchItemType[] } = await axios.get(
        "https://www.mrmazika.com/amovies.php"
      );

      setData(data);
    },
  });

  return (
    <>
      <Header />
      <Channel />
      <Support />
      <Counter />
      <Price />
      <Application isButton />
      <MCQ />
    </>
  );
}
