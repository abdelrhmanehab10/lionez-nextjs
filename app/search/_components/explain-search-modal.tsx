"use client";

import { FC } from "react";
import { useModal } from "@/hooks/use-modal-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ExplainSearchModalProps {}

const ExplainSearchModal: FC<ExplainSearchModalProps> = ({}) => {
  const { isOpen, onClose } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent dir="rtl" className="bg-main-background rounded">
        <DialogHeader>
          <DialogTitle className="text-right m-3 mb-0">
            كيف تقوم بعملية البحث
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row">
          <Image
            src={"/search-bar.png"}
            width={1000}
            height={1000}
            alt="search-bar"
            className="w-full md:w-1/2"
          />
          <p className="text-muted/60 text-xs px-3">
            يمكنك كتابة اسم االفيلم او المسلسل فقط بدون كلمة فيلم او مسلسل{" "}
          </p>
        </div>
        <div className="flex">
          <Image
            src={"/film-button.png"}
            width={1000}
            height={1000}
            alt="search-bar"
            className="w-1/2"
          />
          <p className="text-muted/60 text-xs px-3 mt-3">
            اضغط هنا للحصول ع اخر الافلام المضافه من هنا
          </p>
        </div>
        <div className="flex flex-row-reverse">
          <Image
            src={"/series-button.png"}
            width={1000}
            height={1000}
            alt="search-bar"
            className="w-1/2"
          />
          <p className="text-muted/60 text-xs px-3 mt-3">
            اضغط هنا للحصول ع اخر المسلسلات المضافه من هنا
          </p>
        </div>
        <p className="text-xs text-center">
          * اذا طالت مده البحث فعليك اعاددة كتابه اسم الفيلم او المسلسل مره اخري
          في مربع البحث
          <br />
          في حاله الانتهاء من الشرح قم باغلاق هذه النافذه وابدأ في البحث الان
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ExplainSearchModal;
