const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')

const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/todos', apiRoutes)

app.listen(port, () => {
  console.log(`listening for connections on ${port}`)
})
