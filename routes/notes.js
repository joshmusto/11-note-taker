//things the file needs
const fs = require('fs');
const { title } = require('process');
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');


// GET saved notes
notes.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) console.log(err);
      else {
        return res.json();
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