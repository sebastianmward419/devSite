// dependencies
const express     = require('express');
const bodyParser  = require('body-parser');
// controllers
const controllers = require('./controllers/controllers.js')

const app  = express();
const PORT = 3000;

// middleware
app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/messageMe', (req, res) => {
    controllers.messageMe(req.body, (error, message) => {    
        
        error ? console.log(error) : console.log(message.sid);     
    });
});

app.listen(PORT, () => {
    console.log('Server listening on ', PORT);
});