import { FC } from "react";
import { SearchItemType } from "@/types/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";
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
            {result.stream_type === "live" ||
            result.stream_type === "created_live" ? (
              <Image
                src={"/logo.png"}
                width={300}
                height={300}
                alt="سيرفر عرب ليونز"
                className="w-10"
              />
            ) : result.stream_type === "movie" ? (
              "movie"
            ) : (
              "Tv Show"
            )}
          </div>
          {result.stream_icon !== "" ? (
            <Image
              src={
                result.cover ||
                result.stream_icon ||
                result.stream_type ||
                "http:via.placeholder.com/640x360"
              }
              alt="film images"
              width={1000}
              height={1000}
              className="w-full h-[400px] object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-500 text-white">
              {result.stream_type}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <h5 className=" mt-3 text-white/50">
          {result.genre} {result.name}
        </h5>
        <h6 className="mt-3 text-main-orange">{result.category_name}</h6>
      </CardFooter>
    </Card>

    // <div className="p-2 bg-red-500">
    //   <div className="relative">
    //     <div
    //       className="absolute bg-main-orange
    //         left-0 top-0 p-[5px] rounded-br text-base"
    //     >
    //       <Image
    //         src="/logo.png"
    //         width={300}
    //         height={300}
    //         alt="سيرفر عرب ليونز"
    //         className="w-10"
    //       />
    //     </div>
    //     {result.stream_icon !== "" ? (
    //       <Image
    //         src={
    //           result.cover ||
    //           result.stream_icon ||
    //           result.stream_type ||
    //           "http://via.placeholder.com/640x360"
    //         }
    //         alt="film images"
    //         width={1000}
    //         height={1000}
    //         className="w-full"
    //       />
    //     ) : (
    //       <div className="w-full h-full bg-slate-500 text-white">
    //         {result.stream_type}
    //       </div>
    //     )}
    //   </div>
    //   <h5 className="mt-3 text-white-50">
    //     {result.genre} {result.name}
    //   </h5>
    //   <h6 className="mt-3 text-main-orange">{result.category_name}</h6>
    // </div>
  );
};

export default DisplayCard;
