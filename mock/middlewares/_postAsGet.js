module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
    req.query = req.body;
  }
  next();
};
