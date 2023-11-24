import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, FC, SetStateAction } from "react";

interface PriceButtonProps {
  title: string;
  setIsActive: Dispatch<SetStateAction<number>>;
  isActive: number;
  id: number;
}

const PriceButton: FC<PriceButtonProps> = ({
  isActive,
  setIsActive,
  id,
  title,
}) => {
  return (
    <li
      id={`${id}`}
      className={cn(
        `text-white font-bold transition px-2 py-1 cursor-pointer rounded hover:bg-main-orange 
        hover:scale-[1] mx-2`,
        buttonVariants(),
        isActive === +id ? "bg-main-orange" : ""
      )}
      onClick={(e) => setIsActive(+e.currentTarget.id)}
    >
      {title}
    </li>
  );
};

export default PriceButton;
