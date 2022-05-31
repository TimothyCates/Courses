let express = require('express')

let app = express();
let bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

let todoRoutes = require('./routes/todos')

app.get('/', (req, res) => {
    res.send("The root dir")
})

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
    console.log('Test')
})
