import { articles } from "../../../db";

export default function hander(req, res) {
  return res.status(200).json(articles);
}
