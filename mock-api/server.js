const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const routes = require('./routes.json'); // Import routes from routes.json
const rewriter = jsonServer.rewriter(routes);

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
    req.query = req.body;
  }
  next();
});

// If we need to scope this behaviour to a particular route
server.post('/comments', function (req, res, next) {
  req.method = 'GET';
  req.query = req.body;
  next();
});

// serve commodity route with path resembling /api/v1/trade/commodity
server.use(
  jsonServer.rewriter({
    '/api/v1/trade/commodity': '/commodity',
  }),
);

server.use(rewriter);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
