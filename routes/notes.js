//file needs express router
const notes = require('express').Router();

// GET notes
notes.get('/notes', (req, res) => {
    readFromFile('/db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST new note
notes.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
    };
  
      readAndAppend(newNote, '/db/db.json');
      res.json(`New note added`);
    } else {
      res.error('Note could not be added');
    }
  });


//make this route accessible as variable "notes"
module.exports = notes;