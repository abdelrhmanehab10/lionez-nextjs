import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="py-20 h-full">
      <h1 className="text-center mt-10">تقييم العملاء</h1>
      <iframe
        className="w-1/2 mx-auto mt-10"
        width="50%"
        height="400"
        src="https://www.youtube.com/embed/HjisZSMUjR0?si=B2FwZF-Y04yttFms"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default page;
