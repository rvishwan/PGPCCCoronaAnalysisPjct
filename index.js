const express = require('express')
const router = express.Router();
const app = express()

const port = 3000
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
	
	if (location.city == "Bengaluru") {
		location.city = "Bangalore Urban district";
	}
	else if (location.city == "Tiruchi") {
		location.city = "Tiruchirappalli"
	}
	else if (location.city == "Kanyakumari") {
		location.city = "Kanyakumari district"
	}
	
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
			var totalcases = data.Item.confirmed
			console.log('total cases:', totalcases)
			var totaldeaths = data.Item.deaths
			console.log('total deaths:', totalcases)
			var lastupdated = data.Item.updated
			console.log('last updated :', lastupdated)
//			var sitemsg = "Total number of Confirmed cases is "+totalcases+" in your location and total deaths is "+totaldeaths+" so stay safe and please carefully read the Do's and Dont's provided in the website home page. Thank you for visiting our website!"
			if (totalcases >= 500) {
				response.status(201).json({id:'Unsafe', confirmed: totalcases, deaths:totaldeaths, lastUpdation:lastupdated})
			}else {
				response.status(201).send({id:'Safe', confirmed: totalcases, deaths:totaldeaths, lastUpdation:lastupdated})
			}
		}
	});
}