let express = require('express')

let app = express();

app.get('/', (req, res) => {
    res.send('You a bitch, I was up and forgot to say war before you did')
})

app.listen(3000, () => {
    console.log('Test')
})