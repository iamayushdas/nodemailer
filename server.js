const express =  require('express');
const sendMail = require('./mail')
const log = console.log;
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.urlencoded({
    extended:false
})); 
app.use(express.json());

app.post('/email', (req, res) => {
    //todo:
    //send email here
    const { subject, email, text} = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data){
        if(err){
            res.status(500).json({ message: 'internal error' });

        }else{
            res.json({ message: 'email sent!!! '})
        }
    });
    
});

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , 'views', 'index.html'))
})


app.listen(PORT, () => log('Server is starting on port, ', 3000))