


// app.js
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





































// const cors = require('cors');
// const express = require('express');
// const routes = require('./src/routes');
// const database = require('./src/database');
// const bodyParser = require('body-parser');

// require('dotenv').config();


// const app = express();
// const port = 3000;

// app.use(cors({
//   origin: 'http://localhost:5173',  // Atur origin yang diizinkan
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // Atur metode HTTP yang diizinkan
//   credentials: true,  // Aktifkan dukungan kredensial (cookies)
// }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.locals.database = database;
// app.use(express.json());

// app.use('/', (req,res, next) => {
//   next();  
// });
// app.use('/', routes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });