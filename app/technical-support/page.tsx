import { FC } from "react";
import MCQ from "../_components/mcq";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="py-20">
      <MCQ />
    </div>
  );
};

export default page;
