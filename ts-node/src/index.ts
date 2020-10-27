import * as express from "express"
import { Request, Response, NextFunction } from "express"

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.get("/", (req: Request, res) => {

    res.send("hello world!")
})

app.listen((prod ? process.env.PORT : 4000), () => {
    console.log(`server is running on ${process.env.PORT}`);
});