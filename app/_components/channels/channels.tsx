import { FC } from "react";

import Channel from "./channel";

interface ChannelsProps {}

const Channels: FC<ChannelsProps> = ({}) => {
  return (
    <div className="bg-main-background text-center">
      <div
        className="w-[80%] mx-auto mt-10 p-[20px]
        shadow-[-7px_5px_13px_-1px_#000000a8] border-2 border-main-orange rounded-[80px] 
        flex justify-center items-center gap-5"
        style={{ backgroundImage: `url('/footer-dec.png')` }}
      >
        <Channel imageSrc="/channels/bein.png" />
        <Channel imageSrc="/channels/ad.gif" />
        <Channel imageSrc="/channels/ssc.png" />
        <Channel imageSrc="/channels/osn.png" />
      </div>
    </div>
  );
};

export default Channels;
