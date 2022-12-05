import { Article } from "../interface/articles.interface";

const articleData = require("../data/articles.data");
export const articlesGetAll = () => {
  return articleData.articlesGetAll();
};
export const articleGetBy = (id: number) => {
  return articleData.articleGetBy(id);
};
export const articleSave = (article: Article) => {
  return articleData.articleSave(article);
};
