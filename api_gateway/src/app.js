const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./app/routes/user/user.routes");

app.use("/user", userRoutes);


app.get('/', (req, res) => {
  res.send('Redis Preactice Gateway Connected Successfully')
})

// app.listen(port, (req, res) => {
//   console.log('Redis Preactice Gateway Connected Successfully', port)
// })

app.use((req, res, next) => {
  res.send({
    success: false,
    message: 'API not found',
    errorMessages: [
      {
        path: '',
        message: 'API not found'
      }
    ]
  });
});

module.exports = app;
