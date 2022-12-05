import { Request, Response } from "express";
import { Article } from "../interface/articles.interface";
import { express } from "../server";
const articlesService = require("../services/articles.service");
export const routes = express.Router();

routes.get("/", async (req: Request, res: Response) => {
  return res.send({ body: "Back-end Challenge 2021 🏅 - Space Flight News" });
});
routes.get("/articles", async (req: Request, res: Response) => {
  const articles = await articlesService.articlesGetAll();
  return res.send({ body: articles });
});
routes.get("/articles/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const article = await articlesService.articleGetBy(id);
  return res.send({ body: article });
});
routes.post("/articles", async (req: Request, res: Response) => {
  const body: Article = req.body;
  const article = await articlesService.articleSave(body);
  return res.send({ body: article });
});
