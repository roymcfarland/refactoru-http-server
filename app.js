// Start the application by using "node app.js"

// Use the HTTP core module to help with server side management
var http = require('http');

/**
 * Handler for incoming requests - like the event handlers in jQuery
 * @param  {object} req  Information about the request
 * @param  {object} res Helper for sending back a response
 */
var handleRequests = function(req, res){
	console.log('Request came in.');

	// Log the url that was requested
	console.log(req.url);

	// Tell the requester (i.e.,
	// the browser) that it was 200-OK and that
	// the content to be sent will be done as plain text
	res.write(200, {
		'Content-Type': 'text/plain'
	});

	// Tell the browser that it
	// should close the connection
	// after recieving the data in "end"
	res.end('Hello, you requested ' + req.url);
};

// Create a new server and tell it to pass all
// incoming requests through to our handleRequests
// function declared above.
var server = http.createServer(handleRequests);

// Start the server and listen for any connection
// requests on port 3000
server.listen(3000);

// Just a reminder that the server has started on port 3000
console.log('Server running on port 3000');