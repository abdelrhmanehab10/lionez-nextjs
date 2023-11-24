export interface SearchItemType {
  num: number;
  name: string;
  stream_type: string;
  stream_id: number;
  stream_icon: string;
  rating: string;
  rating_5based: number;
  added: string;
  is_adult: number;
  category_id: string;
  container_extension: string;
  custom_sid: string;
  direct_source: string;
  category_name: string;
  parent_id: number;
  plot: string;
  genre: string;
  cover: string;
  live: string;
  created_live: string;
}

export type SearchErrorType = {
  message: string;
  loader: boolean;
} | null;
