const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(express.static('./build'))
app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.get('/index', (req, res, next) => {
    res.redirect('/')
})

app.post('/api/login', (req, res) => {
    console.log(req.body);
    if (req.body.username !== 'nguyengiatam' || req.body.password !== '@ahihihi1234') {
        return res.status(403).json({message: 'Permission denied kindly contact your administrator'})
    }
    let info = {
        name: 'Nguyễn Gia Tâm',
        age: 27,
        address: 'Hà Nội',
        job: "Nghiện",
        gender: 'Nam',
        email: 'MaxSida@gmail.com',
        url: 'http://ngt-web.herokuapp.com/',
        nick: "Max Sida"
    }
    res.status(200).json(info)
})

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})