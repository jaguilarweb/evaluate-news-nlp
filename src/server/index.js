var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const { Console } = require('console');
const dotenv = require('dotenv');

dotenv.config();

// API Credentials
const API_KEY = process.env.API_KEY;

// Start up an instance of app
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

// Setup Server
const port = 8080;
const server = app.listen(port, listening);

//Callback to debug
function listening(){
    console.log("server running...");
    console.log(`running on localhost: ${port}`);
}

// ROUTES

/*---------------------------------
  GET Route
----------------------------------*/
app.get('/', function (req, res) {
    res.sendFile("dist/index.html")
})

/*---------------------------------
  POST Route
----------------------------------*/
app.post('/dataAnalyze', (req, res) => {
  const txt = req.body["formText"];
  const lang = "en";

  const response = fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&txt=${txt}&lang=${lang}`)
  .then(response => response.json())
  .then(response => res.send(response))
  .catch(error => console.log('Error: ', error));
})
