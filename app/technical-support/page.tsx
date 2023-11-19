import { FC } from "react";
import MCQ from "../_components/mcq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الدعم | سيرفر عرب ليونز",
  description: `الدعم الفني لسيرفر عرب ليونز`,
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="py-20">
      <MCQ />
    </div>
  );
};

export default page;
