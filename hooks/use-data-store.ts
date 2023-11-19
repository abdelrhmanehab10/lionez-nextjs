import { SearchItemType } from "@/types/types";
import { create } from "zustand";

interface DataStore {
  data: SearchItemType[];
  setData: (data: SearchItemType[]) => void;
}

export const useDataStore = create<DataStore>((set) => ({
  data: [],
  setData: (data: SearchItemType[]) => set({ data: data }),
}));
