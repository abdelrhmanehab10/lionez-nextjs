"use client";

import ExplainSearchModal from "@/app/search/_components/explain-search-modal";
import { FC, useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    setIsMounted(true);
  }

  return (
    <>
      <ExplainSearchModal />
    </>
  );
};

export default ModalProvider;
