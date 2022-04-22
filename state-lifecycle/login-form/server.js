const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(express.static('./build'))
app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.post('/login', (req, res) => {
    console.log(req.body);
    let info = {
        name: 'Max Sida',
        age: 27,
        address: 'Hà Nội',
        job: "Nghiện",
        email: 'MaxSida@gmail.com'
    }
    res.status(200).json(info)
})

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})