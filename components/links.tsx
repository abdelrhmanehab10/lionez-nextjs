import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { routes } from "@/constant/routes";
import { usePathname } from "next/navigation";

interface LinksProps {}

const Links: FC<LinksProps> = ({}) => {
  const pathname = usePathname();
  return (
    <ul className="flex list-none">
      {routes.map((route, idx) => (
        <li
          key={idx}
          className={cn(
            "text-gray-200 pb-2 hover:text-gray-500 px-3",
            pathname === route.href
              ? "mr-5 border-b border-main-orange text-main-orange font-extrabold rounded-none"
              : ""
          )}
        >
          <Link href={route.href}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
