import { FC } from "react";
import { SearchItemType } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface DisplayCardProps {
  result: SearchItemType;
}

const DisplayCard: FC<DisplayCardProps> = ({ result }) => {
  const returnedImage = () => {
    return result.stream_type === "live" ||
      result.stream_type === "created_live" ||
      result.cover === "" ||
      result.stream_icon === "" ||
      result.stream_type === ""
      ? "/logo.png"
      : result.cover || result.stream_icon || result.stream_type;
  };

  return (
    <Card className="bg-transparent border-transparent">
      <CardContent>
        <div className="relative">
          <div
            className="rounded absolute text-white bg-main-orange
             left-0 top-0 p-[5px] rounded-br text-base"
          >
            {!result.stream_type ? "tv show" : null}
            {result.stream_type === "movie" ? result.stream_type : null}
            {result.stream_type === "radio-streams" ? "radio" : null}
            {result.stream_type === "created_live" ? "live" : null}
            {result.stream_type === "live" ? result.stream_type : null}
          </div>
          <Image
            src={returnedImage()}
            alt="film images"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <h5 className="text-lg font-semibold mt-3 text-white">{result.name}</h5>
        <h6 className="text-lg mt-3 text-main-orange">
          فولدر {result.category_name}
        </h6>
      </CardFooter>
    </Card>
  );
};

export default DisplayCard;
