const express = require('express');
const path = require('path');
const notes = require("./routes/notes.js");
const PORT = process.env.PORT || 3001;

//set a variable for express
const app = express();

app.use(express.static('public'));

//whenever '/api' is used in a URL, reference the file set to [notes], in this case "./routes/notes.js"
app.use("/api", notes);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
