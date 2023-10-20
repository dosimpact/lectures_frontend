// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ITodoRecord } from "../../common/interfaces";
import axios from "axios";

// default url, request header
axios.defaults.baseURL = "https://api.airtable.com/v0/appgzS2pgsk4gFZ5h/Todo";
axios.interceptors.request.use(async (config) => {
  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Bearer keyzuW2UKRSx5akyS`;
  }
  config.headers["Content-Type"] = "application/jsonß";
  return config;
});

// define outout todo records
interface ITodoRecordOutput {
  error?: boolean;
  todoRecords?: Partial<ITodoRecord>[];
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ITodoRecordOutput>
) => {
  try {
    switch (req.method) {
      case "GET": // GET todo list
        const data = (await (await axios.get("/")).data) as ITodoRecord[];
        res.status(200).json({ error: false, todoRecords: data });
        break;
      case "POST": // insert todo
        break;
      case "PATCH": // update todo
        break;
      case "DELETE": // delete todo
        break;
      default:
        throw Error("request is wrong..");
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
