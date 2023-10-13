const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');
//using get function to fetch data from database
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find({}).exec();
    res.json(artists);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error retrieving artists' });
  }
});

module.exports = router;