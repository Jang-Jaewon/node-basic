const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.sendFile(__dirname + "/public/main.html")
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`start!! express server on port ${port}`)
})