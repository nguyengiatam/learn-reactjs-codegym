const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(express.static('./build'))
app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})