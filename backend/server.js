const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const artistsRouter = require('./Routes/Artists');
app.use('/artists', artistsRouter);


const artistRegistrationRouter = require('./Routes/ArtistRegistration'); //  new route for artist registration
app.use('/ArtistRegistration', artistRegistrationRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});