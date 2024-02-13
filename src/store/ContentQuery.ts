import { create } from "zustand";
import { genre } from "../entities/genre";

interface Contentquery {
  Genre?: string;
  Type?: String;
  sort?: string;
  Search?: string;
}
const defaultContentQuery: Contentquery = {
  Genre: "",
  Type: "movie",
  sort: "",
  Search: "",
};
interface ContentQueryFun {
  ContentQuery: Contentquery;
  setGenre: (Genre: string) => void;
  SetType: (Type: string) => void;
  SetSort: (sort: string) => void;
  SetSearch: (Search: string) => void;
}
const ContentQueryStore = create<ContentQueryFun>((set) => ({
  ContentQuery: defaultContentQuery,
  SetType: (Type) => set(() => ({ ContentQuery: { Type } })),
  setGenre: (Genre) =>
    set((store) => ({ ContentQuery: { ...store.ContentQuery, Genre } })),
  SetSearch: (Search) => set(() => ({ ContentQuery: { Search } })),
  SetSort: (sort) =>
    set((store) => ({ ContentQuery: { ...store.ContentQuery, sort } })),
}));
export default ContentQueryStore;
