//1. Import express. That returns a function.
const express = require('express'); 

//2. Invokes the function that creates an instance of an express app (to a variable that we also named app)
const app = express();

//5. urlencoded is a middleware that comes along with express. It's used to handle post requests.
//takes all the url encoded data that comes along and passes it into an object that we can use on the request object
app.use(express.urlencoded({ extended: true }));

//network address to accept connections on
const port = 3001;

//3. Listen for requests at the specified port
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});

//4. Responding to requests:
//4.1 If we want to listen for a get request we use app.get. It takes two arguments: 1st, the path or url that we want to listen to; 
//2nd: a function that takes a request and a response objects as arguments, so that we can do something with them.
//If it matches the path or url that the user has requested, then it executes the callback function (req, res) => {}, otherwise it just skips those code lines.
//If it matches the path or url that the user has requested, express no longer executes the rest of the code beyond that get.app
// app.get('/', (request, response) => {
//     //res.send([body])
//     //Sends back a string, a html, etc. upon a get request to the path or url especified
//     response.send('<h1>Hello</h1>');
// });

//however a better way to send HTML is to send a html file. We can do so using the sendFile method. It takes two arguments: 1st, the path
//where the html is located; 2nd, the relative root where it's from. {root: __dirname} gives us the current directory.
// app.get('/world', (request, response) => {
//     response.sendFile('./public/index.html', {root: __dirname});
// });

// app.get('/public/cats.html', (request, response) => {
//     response.sendFile('./public/cats.html', {root: __dirname});
// });

//Redirect
app.get('/redirect', (request, response) => {
    response.redirect('/');
});

/*
app.use([path,] callback [, callback...])
Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.

Since path defaults to “/”, middleware mounted without a path will be executed for every request to the app.
For example, this middleware function will be executed for every request to the app:

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
})
*/
app.use(express.static('./public'));

/*
5. Post requests: The app is sitting at /yoururl listening for post requests. When it receives one (upon submitting the form) the urlencodedParser translates the http request into a JS object.
app.post then runs the callback function with the objects that represent the http request and response. For our form whose name is 'text-value',
the request stores that value inside of its body property, i.e. request.body === { 'text-value': 'whatever was submitted in the form' } .
*/
app.post('/yoururl', (request, response) => {
    console.log(request.body, 'request received');
});

// when clicking 'submit', it tries to retrieve the yoururl page.
//404 page
//Whilst app.get only gets executed if the path or url matches the one the user has requested,
//app.use gets executed regardless. Therefore we can use an app.use after all of our app.get to
//show that the requested path or url was not found.
//We can manually set a 404 error with the status method, otherwise it will still be a 200 status.
app.use((request, response) => {
    response.status(404).sendFile('./404.html', {root: __dirname});
})