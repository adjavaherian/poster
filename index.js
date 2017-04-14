

var http = require('request');
var fs = require('fs');

var formData = {
	attachments: [
    		fs.createReadStream(__dirname + '/200.jpeg')
	]
};

http.post({url: 'http://localhost:3000', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
}); 

