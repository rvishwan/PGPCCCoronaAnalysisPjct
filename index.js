const express = require('express')
const router = express.Router();
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

app.use('/analysestatus',(req, res) => {
  var payload = req.body
  accessUserStatus(req, res)
})

var AWS = require("aws-sdk")
	AWS.config.update({
			"region": "us-east-1",
			"endpoint": "http://dynamodb.us-east-1.amazonaws.com"
	});

const accessUserStatus = (request, response) => {
  var location  = request.body
  console.log(location.city)
  console.log(location.state)

  //TO DO :This is sample checking, needs to be replaced once we read from db
/*  if(location.city == 'Bengaluru'){
      response.status(201).send('Safe')
  }
  else{
    response.status(201).send('Unsafe')
  }*/
  const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

	var params = {
		TableName: "covid19citydata",
		Key: {
			"state": location.state,
			"city": location.city
		}
	};
	
	docClient.get(params, function(err, data) {
		if (err) {
			console.log("covid19citydata::fetchOneByKey::error -  " + JSON.stringify(err, null, 2));
		}
		else {
			console.log("covid19citydata::fetchOneByKey::success -  " + JSON.stringify(data, null, 2));
		}
	});
}