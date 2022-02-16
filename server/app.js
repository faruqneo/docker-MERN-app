const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const router = require('./router');
const app = express();

const PORT = 8000;
const DB = 'mongodb://mongo:27017/myshinynewdb';
const message = `Server is running on PORT:${PORT}`

// Middleware
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Setting routes
app.use(router);

app.get('/serverTester', (req, res) => res.send(message));

app.all('*', (req, res) => res.send('Access denied'));

mongoose
  .connect(DB, {
    // useCreateIndex: true,
    // useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

app.listen(PORT, () => {
  console.log(message);
});