import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { SearchErrorType, SearchItemType } from "@/types";

import { Input } from "@/components/ui/input";
import { useQuery } from "react-query";
import axios from "axios";

interface InputSearchProps {
  setSearchResult: Dispatch<SetStateAction<SearchItemType[]>>;
  setIsActive: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setSearchError: Dispatch<SetStateAction<SearchErrorType>>;
}

const InputSearch: FC<InputSearchProps> = ({
  setIsActive,
  setIsLoading,
  setSearchResult,
  setSearchError,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, isLoading: allDataIsLoading } = useQuery({
    queryKey: ["content"],
    queryFn: async () => {
      const { data }: { data: SearchItemType[] } = await axios.get(
        "https://www.mrmazika.com/amovies.php"
      );
      return data;
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log();

    setIsActive("");

    if (allDataIsLoading) {
      setSearchError({
        message: "نحن ما ذلنا نحاول الوصول للبيانات. انتظر اقل من ثواني",
        loader: true,
      });
    } else {
      setSearchError(null);
    }
    setIsLoading(true);
    setSearchQuery(e.currentTarget.value);

    const filteredData = data?.filter((item: SearchItemType) =>
      item.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    if (filteredData?.length === 0) {
      setIsLoading(false);
      setSearchError({ message: "لا توجد نتائج بحث", loader: false });
    } else {
      setSearchError(null);
    }
    const returnedData = filteredData?.slice(0, 50) as SearchItemType[];

    setSearchResult(returnedData);
  };

  return (
    <Input
      className="w-2/3 mx-auto block p-3 mt-5 text-black"
      type="text"
      placeholder="ابحث باسم المحتوي فقط بدون كتابة فيلم او مسلسل"
      value={searchQuery}
      onChange={onChange}
    />
  );
};

export default InputSearch;
