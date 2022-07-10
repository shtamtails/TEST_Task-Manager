import { ITodo } from "../store/todoStore";

export const getDateFromString = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("default", { day: "2-digit", month: "long", year: "numeric" });
};

export const getTags = (tags: string) => {
  return tags.replaceAll(" ", "").split(",");
};

export const filterByTags = (tag: string, array: ITodo[]) =>
  array.filter((el) => el.tags && getTags(el.tags).indexOf(tag) !== -1);
