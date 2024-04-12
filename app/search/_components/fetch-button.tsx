import { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { cn } from "@/lib/utils";
import { SearchErrorType, SearchItemType } from "@/types";
import axios from "axios";

interface FetchButtonProps {
  setSearchResult: Dispatch<SetStateAction<SearchItemType[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsActive: Dispatch<SetStateAction<string>>;
  setSearchError: Dispatch<SetStateAction<SearchErrorType>>;
  title: string;
  isActive: string;
}

const MOVIES_URL = "https://www.mrmazika.com/m50.php";
const SERIES_URL = "https://www.mrmazika.com/s50.php";

const FetchButton: FC<FetchButtonProps> = ({
  title,
  setSearchResult,
  setIsActive,
  setIsLoading,
  setSearchError,
  isActive,
}) => {
  const URL = title === "الافلام" ? MOVIES_URL : SERIES_URL;

  const { refetch } = useQuery({
    queryKey: [title],
    queryFn: async () => {
      setSearchResult([]);
      setIsActive(title);
      setIsLoading(true);

      const { data }: { data: SearchItemType[] } = await axios.get(URL);

      setIsLoading(false);
      setSearchError(null);
      setSearchResult(data as SearchItemType[]);

      return data;
    },
    enabled: false,
  });

  return (
    <Button
      onClick={() => refetch()}
      className={cn(
        "hover:bg-main-orange/70",
        isActive === title
          ? "bg-main-orange"
          : "bg-gradient-to-l from-main-gradientLeft to-main-gradientRight"
      )}
    >
      احدث {title} المضافه
    </Button>
  );
};

export default FetchButton;
