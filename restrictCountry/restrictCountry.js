import geoip from 'geoip-lite';

const restrictIndiaMiddleware = (req, res, next) => {
  // Get client's IP address
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // Get client's country based on IP address
  const geo = geoip.lookup(ip);
  const clientCountry = geo ? geo.country : null;

  // Check if client's country is India
  if (clientCountry === 'IN') {
    // If the client's country is India, send a forbidden response
    return res.status(403).send('Access from India is not allowed.');
  }

  // If the client's country is not India, continue to the next middleware
  next();
};

export default restrictIndiaMiddleware;
