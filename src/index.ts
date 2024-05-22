import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.url, req.hostname, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
