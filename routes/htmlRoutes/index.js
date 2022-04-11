const path = require('path');
const router = require('express').Router();
// const notesHTML = require('../../Develop/public/notes.html');
// const indexHTML = require ('../../Develop/public/index.html');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'))
});

router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'))
})


module.exports = router;