import { FC } from "react";
import { SearchItemType } from "@/types/types";
import Image from "next/image";

interface DisplayCardProps {
  result: SearchItemType;
}

const DisplayCard: FC<DisplayCardProps> = ({ result }) => {
  return (
    <div className="p-2 h-[500px]">
      <div className="relative">
        <div
          className="absolute bg-main-orange 
            left-0 top-0 p-[5px] rounded-br text-base"
        >
          {result.stream_type ? result.stream_type : "Tv Show"}
        </div>
        {result.stream_icon !== "" ? (
          <Image
            src={
              result.cover ||
              result.stream_icon ||
              result.stream_type ||
              "http://via.placeholder.com/640x360"
            }
            alt="film images"
            width={1000}
            height={1000}
            className="w-full"
          />
        ) : (
          <div className="w-full h-full bg-slate-500 text-white">
            {result.stream_type}
          </div>
        )}
      </div>
      <h5 className="mt-3 text-white-50">
        {result.genre} {result.name}
      </h5>
      <h6 className="mt-3 text-main-orange">{result.category_name}</h6>
    </div>
  );
};

export default DisplayCard;
