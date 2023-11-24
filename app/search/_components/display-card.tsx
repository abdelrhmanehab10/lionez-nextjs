import { FC } from "react";
import { SearchItemType } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface DisplayCardProps {
  result: SearchItemType;
}

const DisplayCard: FC<DisplayCardProps> = ({ result }) => {
  return (
    <Card className="bg-transparent border-transparent">
      <CardContent>
        <div className="relative">
          <div
            className="absolute text-white bg-main-orange
             left-0 top-0 p-[5px] rounded-br text-base"
          >
            {result.stream_type ?? "TV Show"}
          </div>
          <Image
            src={
              result.stream_type === "live" ||
              result.stream_type === "created_live"
                ? "/logo.png"
                : result.cover || result.stream_icon || result.stream_type
            }
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
