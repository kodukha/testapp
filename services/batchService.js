const https = require('https');

exports.processBatch = function(url, method) {
	let result = {};
	switch (method.toLowerCase()) {
		case 'get':
		  result = https.get(url, (resp) => {return resp;});
		  break;
		case 'post':
		  result = https.post(url, (resp) => {return resp;});
		  break;
		case 'put':
		  result = https.put(url, (resp) => {return resp;});
		  break;
		case 'delete':
		  result = https.put(url, (resp) => {return resp;});
		  break;
	}	
    result.data = "fake data";
    return result;
};