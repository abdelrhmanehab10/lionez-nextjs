"use client";

import { FC, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { useQuery } from "react-query";
import axios from "axios";
import { useDebounce } from "@/hooks/use-debounce";
import Image from "next/image";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/hooks/use-data-store";
import { SearchItemType } from "@/types/types";
import type { Metadata } from "next";
import DisplayCard from "./_components/display-card";
import { cn } from "@/lib/utils";

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = ({}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery);
  const { data } = useDataStore();

  const { refetch: refetchMovies } = useQuery({
    queryKey: ["films"],
    queryFn: async () => {
      setSearchResult([]);
      setIsLoading(true);
      setIsActive("films");
      const { data }: { data: SearchItemType[] } = await axios.get(
        "https://www.mrmazika.com/m50.php"
      );
      setSearchResult(data as SearchItemType[]);
      return data;
    },
  });

  const { refetch: refetchSeries } = useQuery({
    queryKey: ["series"],
    queryFn: async () => {
      setSearchResult([]);
      setIsActive("series");
      setIsLoading(true);
      const { data }: { data: SearchItemType[] } = await axios.get(
        "https://www.mrmazika.com/s50.php"
      );

      setSearchResult(data as SearchItemType[]);

      return data;
    },
  });

  const onChange = (query: string) => {
    let filteredData;
    setIsActive("");
    setSearchQuery(query);
    setIsLoading(true);

    filteredData = data?.filter((item: SearchItemType) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    setSearchResult(filteredData.slice(0, 50) as []);
  };

  return (
    <div className="py-20">
      <div className="mt-5 pt-5 h-full">
        <Input
          className="w-2/3 mx-auto in-search p-3 mt-5 text-black"
          type="text"
          placeholder="ابحث باسم المحتوي فقط بدون كتابة فيلم او مسلسل"
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="flex justify-center items-center gap-10 mt-5">
          <Button
            onClick={() => refetchMovies()}
            className={cn(
              "hover:bg-main-orange/70",
              isActive === "films"
                ? "bg-main-orange"
                : "bg-gradient-to-l from-main-gradientLeft to-main-gradientRight"
            )}
          >
            احدث الافلام المضافه
          </Button>
          <Button
            onClick={() => refetchSeries()}
            className={cn(
              "hover:bg-main-orange/70",
              isActive === "series"
                ? "bg-main-orange"
                : "bg-gradient-to-l from-main-gradientLeft to-main-gradientRight"
            )}
          >
            احدث المسلسلات المضافه
          </Button>
        </div>

        {searchResult?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-4">
            {searchResult.map((result, idx) => (
              <DisplayCard key={idx} result={result} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            {isLoading ? (
              <p className="animate-pl">
                جاري البحث الان
                <Loader className="text-main-orange animate-spin mt-2 mx-auto" />
              </p>
            ) : (
              <p>
                يمكنك البحث من خلال كتابة اسم الفيلم او المسلسل الذي تريده في
                مربع البحث بالاعلي
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
