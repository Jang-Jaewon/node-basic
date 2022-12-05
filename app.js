const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`start!! express server on port ${port}`)
})

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', (req, res) => {
    // get : req.param('email')
    // post : req.body('email)
    console.log(req.body.email)
    // res.send("<h1>welcome! " + req.body.email + "</h1>")
    res.render('email.ejs', {'email': req.body.email})
})

app.post('/ajax_send_email', (req, res) => {
    console.log(req.body.email)
    const responseData = {
        'result': 'ok',
        'email': req.body.email
    }
    res.json(responseData)
})