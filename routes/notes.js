//file needs express router
const fs = require('fs');
const notes = require('express').Router();

// GET notes
notes.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) console.log(err);
      else {
        res.json(JSON.parse(data));
      }
    })
  });

// POST new note
notes.post('/notes', (req, res) => {
    fs.appendFile('./db/db.json', (err, data) => {
      if (err) console.log(err);
      else {
        
      }
    })
  });


//make this route accessible as variable "notes"
module.exports = notes;