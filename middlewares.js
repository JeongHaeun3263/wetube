import routes from './routes';

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  // for the test
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
