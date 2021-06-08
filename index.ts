import express from 'express';

const app = express();
const PORT = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('Well done!');
});

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
