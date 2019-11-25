const express = require('express');
const path = require('path');
const AWS = require('aws-sdk');
const app = express();
const config = require('./aws.config.js');
app.use(express.static('dist'));



// AWS DynamoDB


const awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId":config.credentials.accessKeyId ,"secretAccessKey": config.credentials.secretAccessKey
};
AWS.config.update(awsConfig);

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: "calls", // give it your table name 
    Select: "ALL_ATTRIBUTES"
};
let jsonCalls = []

app.get('/api/calls', (req,res) =>{
	dynamoClient.scan(params, function(err, data) {
		if (err) {
			console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
		} else {
		   	//console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
		   	jsonCalls = JSON.stringify(data.Items, null, 2)
		}
	});
    res.send(jsonCalls);
});


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});


const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);