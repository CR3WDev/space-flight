import { PrismaClient } from "@prisma/client";
import { Article } from "../interface/articles.interface";

const prisma = new PrismaClient();
export const articlesGetAll = () => {
  return prisma.article.findMany();
};
export const articleGetBy = (id: number) => {
  return prisma.article.findUnique({
    where: { id },
  });
};
export const articleSave = async (article: Article) => {
  // const newArticle = await prisma.article.create({
  //   data: {
  //     featured: article.featured,
  //     title: article.title,
  //     url: article.url,
  //     imageUrl: article.imageUrl,
  //     newsSite: article.newsSite,
  //     summary: article.summary,
  //     publishedAt: article.publishedAt,
  //   },
  // });
  // for (let i = 0; i < article.events.length; i++) {
  //   const x = await prisma.events.findUnique({
  //     where: {
  //       id: article.events[i].id,
  //     },
  //   });
  //   if (x) return;
  //   await prisma.events.createMany({
  //     data: {
  //       provider: article.events[i].provider,
  //       articleId: article.id,
  //     },
  //   });
  // }
  // for (let i = 0; i < article.lauches.length; i++) {
  //   const x = await prisma.launche.findUnique({
  //     where: {
  //       id: article.lauches[i].id,
  //     },
  //   });
  //   if (x) return;
  //   await prisma.launche.createMany({
  //     data: {
  //       provider: article.lauches[i].provider,
  //       articleId: article.id,
  //     },
  //   });
  // }
  //   return prisma.article.create();
};
