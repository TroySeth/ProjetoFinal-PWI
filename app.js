const express = require('express');
const app = express();
const db = require('./db/db');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const {handlebars, engine} = require('express-handlebars');

const mongoDBurl = 'mongodb+srv://leonardo:VuvQtFQXwvPnk90W@cluster0.fcutvj8.mongodb.net/?retryWrites=true&w=majority'
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
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.engine('handlebars', engine({defaultLayout: 'post'}));
app.engine('handlebars', engine({defaultLayout: 'login'}));
app.engine('handlebars', engine({defaultLayout: 'register'}));
app.set('view engine', 'handlebars');

// Using routes
const routes = require('./routes/routes');
app.use(routes);


app.listen(3000, () => {
    console.log("App running on port 3000");
});