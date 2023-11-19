import { Copyright } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="py-5 border-t border-main-orange">
      <div className="flex justify-between items-center mx-2">
        <p className="text-xs flex items-center gap-3">
          جميع الحقوق المحفوظه لسيرفر عرب ليونز
          <Copyright className="w-3 h-3" />
        </p>
        <p className="text-xs">
          coding by :
          <Link
            href={"https://www.linkedin.com/in/abdelrahman-ehab-87261a244/"}
            target="_blank"
            className="underline"
          >
            Abdelrhman Ehab
          </Link>
          ,
          <Link
            href={"https://www.linkedin.com/in/elmasry960/"}
            target="_blank"
            className="underline"
          >
            Eslam El Masry
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
