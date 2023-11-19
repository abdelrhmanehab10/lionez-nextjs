import { Copyright } from "lucide-react";
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
        <p className="text-xs">coding by : Eslam El Masry, Abdelrhman Ehab</p>
      </div>
    </div>
  );
};

export default Footer;
