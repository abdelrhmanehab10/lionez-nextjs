"use client";

import { FC, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { useQuery } from "react-query";
import axios from "axios";
import { useDebounce } from "@/hooks/use-debounce";
import Image from "next/image";
import { DownloadIcon, Loader, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/hooks/use-data-store";
import { SearchItemType } from "@/types/types";

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = ({}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedQuery = useDebounce(searchQuery);
  const { data } = useDataStore();

  const { data: films }: { data: SearchItemType[] | undefined } = useQuery({
    queryKey: ["films"],
    queryFn: async () => {
      const { data }: { data: SearchItemType[] } = await axios.get(
        "https://www.mrmazika.com/m50.php"
      );

      return data;
    },
  });

  const { data: series }: { data: SearchItemType[] | undefined } = useQuery({
    queryKey: ["series"],
    queryFn: async () => {
      const { data }: { data: SearchItemType[] } = await axios.get(
        "https://www.mrmazika.com/s50.php"
      );

      return data;
    },
  });

  const fetchFilms = () => {
    setSearchResult(films as SearchItemType[]);
  };

  const fetchSeries = () => {
    setSearchResult(series as SearchItemType[]);
  };

  const onChange = (query: string) => {
    let filteredData;
    setSearchQuery(query);
    setIsLoading(true);

    filteredData = data?.filter((item: SearchItemType) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    setSearchResult(filteredData as []);
  };

  return (
    <div className="py-20 h-full">
      <div className="mt-5 pt-5 w-100 mx-auto d-flex justify-content-center">
        <Input
          className="w-2/3 mx-auto in-search p-3 mt-5 text-black"
          type="text"
          placeholder="ابحث باسم المحتوي فقط بدون كتابة فيلم او مسلسل"
          value={searchQuery}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="flex justify-center items-center gap-10 mt-5">
          <Button
            onClick={fetchFilms}
            className="bg-gradient-to-l from-main-background to-main-blue hover:bg-main-orange/70"
          >
            احدث الافلام المضافه
          </Button>
          <Button
            onClick={fetchSeries}
            className="bg-gradient-to-l from-main-background to-main-blue hover:bg-main-orange/70"
          >
            احدث المسلسلات المضافه
          </Button>
        </div>
        {searchResult?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4">
            {searchResult.map((result, idx) => (
              <div key={idx} className="p-16">
                <>
                  <div className="relative">
                    <div
                      className="absolute bg-main-orange 
                    left-0 top-0 p-[5px] rounded-br text-base"
                    >
                      {result.stream_type ? result.stream_type : "Tv Show"}
                    </div>
                    {result.stream_icon !== "" ? (
                      <Image
                        src={
                          result.cover ||
                          result.stream_icon ||
                          result.stream_type ||
                          "http://via.placeholder.com/640x360"
                        }
                        alt="film images"
                        width={1000}
                        height={1000}
                      />
                    ) : (
                      <div className="w-full bg-slate-500 text-white">
                        {result.stream_type}
                      </div>
                    )}
                  </div>
                </>
                <h5 className="mt-3 text-text-white-50">
                  {result.genre} {result.name}
                </h5>
                <h6 className="mt-3 category_name">{result.category_name}</h6>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full justify-center items-center mt-40">
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
