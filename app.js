const express = require('express');
const app = express();
const db = require('./db/db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(__dirname));

db.Connect();

const routes = require('./routes/routes')
app.use(routes);

app.listen(3000, () => {
    console.log("App running on port 3000");
});