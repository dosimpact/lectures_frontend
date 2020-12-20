import * as express from "express";
import * as cors from "cors";
import * as expressSession from "express-session";
import * as dotenv from "dotenv";
import * as passport from "passport";
import * as hpp from "hpp";
import * as helmet from "helmet";
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3065);

// middleWare

if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
        origin: /nodebird\.com$/,
        credentials: true,
    }));
} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }))
}
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false, // https -> true
        domain: prod ? '.nodebird.com' : undefined,
    },
    name: 'rnbck',
}));
app.use(passport.initialize());
app.use(passport.session());

// route
app.get("/", (req, res) => {
    res.send("hello world!")
})

app.listen(app.get('port'), () => {
    console.log(`✔ server is running on  http://localhost:${app.get('port')}`);
});