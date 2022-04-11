const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid')


router.get('/notes', (req, res)=> {
    let allNotes = fs.readFileSync(path.join(__dirname, '../../Develop/db/db.json'));
    allNotes = JSON.parse(allNotes);
    res.json(allNotes);
})

router.post('/notes', (req,res) => {
    let everyNote = fs.readFileSync(path.join(__dirname, '../../Develop/db/db.json'));
    everyNote = JSON.parse(everyNote);
    let newNote = req.body
    newNote.id = uuidv4();
    everyNote.push(newNote)
    // saves the message to the json file
    fs.writeFileSync(path.join(__dirname, '../../Develop/db/db.json'), 
    JSON.stringify(everyNote));
    everyNote = JSON.parse(everyNote);
    res.json (everyNote);
});

router.delete('/notes/:id', (req,res) => {
    let everyNote = fs.readFileSync(path.join(__dirname, '../../Develop/db/db.json'));
    everyNote = JSON.parse(everyNote);
    let noteID = req.params.id
    everyNote = everyNote.filter(note => {
        return noteID !== note.id
    })
    fs.writeFileSync(path.join(__dirname, '../../Develop/db/db.json'), 
    JSON.stringify(everyNote));
    everyNote = JSON.parse(everyNote);
    res.json (everyNote); 
});



module.exports = router