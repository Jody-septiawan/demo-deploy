require('dotenv').config();
const express = require('express');
const routers = require('./src/routes');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/v1', routers);
// app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send(
    `<h1>Hello WOrllddddd!</h1> <br /> <img src=${process.env.IMAGE_ADDRESS} />`
  );
});

app.listen(port, () => console.log(`Running on port ${port}`));
