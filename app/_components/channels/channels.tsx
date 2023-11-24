"use client";

import { FC } from "react";

import Channel from "./channel";
import { CHANNEL_IMAGE } from "@/constant";

interface ChannelsProps {}

const Channels: FC<ChannelsProps> = ({}) => {
  return (
    <div className="text-center -translate-y-24 relative z-20">
      <div
        className="bg-main-background w-[80%] mx-auto mt-10 p-[20px]
        shadow-[-7px_5px_13px_-1px_#000000a8] border-2 border-main-orange rounded-[80px] 
        flex justify-center items-center gap-5 md:w-1/2"
        style={{ backgroundImage: `url('/footer-dec.png')` }}
      >
        {CHANNEL_IMAGE.map((img, i) => (
          <Channel key={i} imageSrc={`/channels/${img}`} />
        ))}
      </div>
    </div>
  );
};

export default Channels;
