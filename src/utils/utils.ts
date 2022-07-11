import { ITodo } from "@interfaces/ITodo";

export const getDateFromString = (date: string) =>
  new Date(date).toLocaleString("default", { day: "2-digit", month: "long", year: "numeric" });

export const getTags = (tags: string) => tags.replaceAll(" ", "").split(",");

export const filterByTags = (tag: string, array: ITodo[]) =>
  array.filter((el) => el.tags && getTags(el.tags).indexOf(tag) !== -1);
