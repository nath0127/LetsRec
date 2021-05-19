const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const db = require('../database/index.js');
const helpers = require('./helpers.js');

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/accounts', (req, res) => {
  let { username, password, email, location } = req.body;
  let query = `insert into accounts (username, password, email, location) values ("${username}", "${password}", "${email}", "${location}")`;
  db.query(query, (err, response) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(response)
    }
  })
})

app.get('/sports', (req, res) => {
  let query = `select * from sports`;
  db.query(query, (err, response) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(helpers.getSports(response))
    }
  })
})

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`)
})

