const express = require('express');
const app = express();
const path = require('path')

const json = require('./externalJson')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next()
}

app.use(urlLogger, timeLogger)
app.use(express.static('public'))

// app.get('/', (request, response) => {
//   response.send('hello world')
// })

app.get('/json', (request, response) => {
  response.status(200).json(json)
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000')
})

app.get('/sunset', (request, response) => {
  response.sendFile(path.join(__dirname + '/sunsets/index.html'))
})
