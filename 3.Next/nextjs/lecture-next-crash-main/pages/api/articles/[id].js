import { articles } from "../../../db";

export default function hander(req, res) {
  const id = req.query.id;

  const filterd = articles.filter((atc) => atc.id === id);

  if (filterd.length > 0) {
    return res.status(200).json(filterd);
  } else {
    return res.status(400).json({
      message: `Article cannot find with ${id}`,
    });
  }
}
