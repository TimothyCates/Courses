let express = require('express')

let app = express();

let todoRoutes = require('./routes/todos')

app.get('/', (req, res) => {
    res.send("The root dir")
})

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
    console.log('Test')
})
