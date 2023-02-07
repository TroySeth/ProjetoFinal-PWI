const express = require('express');
const app = express();
const db = require('./db/db');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const {handlebars, engine} = require('express-handlebars');
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CODE = process.env.DB_CODE;

const mongoDBurl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB_CODE}.mongodb.net/?retryWrites=true&w=majority`
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: mongoDBurl}),
        name: 'sessionId',
        resave: false,
        saveUninitialized: true,
        cookie: {  maxAge : 7  *  24  *  60  *  60  *  1000 } 
    })
);

// Database connection
db.Connect();

// Handlebars
app.engine('handlebars', engine({layout: false}));
app.set('view engine', 'handlebars');

// Using routes
const routes = require('./routes/routes');
app.use(routes);


app.listen(3000, () => {
    console.log("App running on port 3000");
});