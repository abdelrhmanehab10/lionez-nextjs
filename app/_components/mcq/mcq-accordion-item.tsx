import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";

interface MCQAccordionItemProps {
  question: string;
  answer?: string;
  description: React.ReactNode;
  value: number;
}

const MCQAccordionItem: FC<MCQAccordionItemProps> = ({
  answer,
  question,
  description,
  value,
}) => {
  return (
    <AccordionItem value={`item-${value}`}>
      <AccordionTrigger
        className="bg-gradient-to-l
      from-main-gradientLeft to-main-gradientRight rounded-t px-3"
      >
        {question}
      </AccordionTrigger>
      <AccordionContent className="bg-white text-black p-2">
        <strong className="mb-2">{answer}</strong>
        {description}
      </AccordionContent>
    </AccordionItem>
  );
};

export default MCQAccordionItem;
