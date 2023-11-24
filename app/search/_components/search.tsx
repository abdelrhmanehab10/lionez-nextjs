"use client";

import { FC, useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { SearchErrorType, SearchItemType } from "@/types";
import DisplayCard from "@/app/search/_components/display-card";
import InputSearch from "@/app/search/_components/input-search";
import FetchButton from "@/app/search/_components/fetch-button";
import ExplainSearchModal from "@/app/search/_components/explain-search-modal";
import { useModal } from "@/hooks/use-modal-store";
interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  const [searchResult, setSearchResult] = useState<SearchItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("");
  const [searchError, setSearchError] = useState<SearchErrorType>(null);
  const { onOpen, onClose } = useModal();

  useEffect(() => {
    onOpen();
    const modalCloseTimeout = setTimeout(() => {
      onClose();
    }, 3000);
    clearTimeout(modalCloseTimeout);
  }, [onOpen, onClose]);

  const setters = {
    setIsActive,
    setIsLoading,
    setSearchResult,
    setSearchError,
  };
  return (
    <div className="mt-5 pt-5 h-full">
      <InputSearch {...setters} />
      <div className="flex justify-center items-center gap-10 mt-5">
        <FetchButton {...setters} isActive={isActive} title="الافلام" />
        <FetchButton {...setters} isActive={isActive} title="المسلسلات" />
      </div>
      {searchResult?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-4">
          {searchResult.map((result, idx) => (
            <DisplayCard key={idx} result={result} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          {isLoading ? (
            <p className="animate-pluse">
              جاري البحث الأن
              <Loader className="text-main-orange animate-spin mt-2 mx-auto" />
            </p>
          ) : null}
          {!isLoading && searchError ? (
            <p className="animate-pluse">{searchError.message}</p>
          ) : null}
          {!isLoading && !searchError ? (
            <p>
              يمكنك البحث من خلال كتابة اسم الفيلم او المسلسل الذي تريده في مربع
              البحث بالاعلي
            </p>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
