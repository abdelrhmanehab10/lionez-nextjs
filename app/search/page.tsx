import { FC } from "react";
import Search from "./_components/search";
import { Metadata } from "next";

interface SearchPageProps {}

export const metadata: Metadata = {
  title: "البحث | سيرفر عرب ليونز",
  description: `البحث في سيرفر عرب ليونز`,
};

const SearchPage: FC<SearchPageProps> = ({}) => {
  return (
    <div className="py-20">
      <Search />
    </div>
  );
};

export default SearchPage;
