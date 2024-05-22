import express from 'express';

export const app = express();

app.use((req, res, next) => {
  // TODO: Format logging of requests
  console.log(req.url, req.hostname, req.method);
  next();
});

// TODO: Move to router
app.get('/', async (req, res) => {
  res.send('Hello World!');
});
