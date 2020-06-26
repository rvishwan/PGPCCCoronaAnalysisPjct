const express = require('express')
const app = express()

const port =3000
// app.get('/', (req, res) => {
//   res.send('HEY!')
// })

app.use(express.static('dist/spa'))

app.listen(port, () => console.log('Server running on port: )!', port))

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res) {
  var payload = req.body
  accessUserStatus(req, res)
  console.log(payload)
 // var test = payload['message']
  //console.log(test)
  //res.send(req.body)
})

const accessUserStatus = (request, response) => {
  const { location } = request.body
  console.log(location)
  response.status(201).send(`Submitted `)
}