const express = require('express');
const app = express();
const db = require('./db/db');

db.Connect();

app.listen(3000, () => {
    console.log("App running on port 3000");
});