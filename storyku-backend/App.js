const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});