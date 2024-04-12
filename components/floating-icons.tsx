"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { FloatingWhatsApp } from "react-floating-whatsapp";

interface FloatingIconsProps {}

const FloatingIcons: FC<FloatingIconsProps> = ({}) => {
  return (
    <div className="relative">
      <Link
        className="w-14 h-14 fixed right-8 bottom-28 z-50"
        href="https://t.me/Lionzsales"
        target="_blank"
      >
        <Image
          width={1000}
          height={1000}
          className="w-full "
          alt="telegram"
          src="/Telegram_logo.png"
        />
      </Link>
      <FloatingWhatsApp
        phoneNumber="201558890701"
        accountName="LionzTv"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage="يتم الرد خلال دقائق"
        placeholder="جاري الكتابة"
        chatMessage="مرحبا بك في سيرفر عرب ليونز 🤝
        كيف يمكنني مساعدتك ؟"
        avatar="/logo.png"
      />
    </div>
  );
};

export default FloatingIcons;
