const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// serve static files 
app.use(express.static('./Develop/public'));

//parse incoming data strings or arrays
app.use(express.urlencoded({extended: true}));

//parse incoming data as JSON
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, ()=>{
    console.log(`API server is on port ${PORT}`)
})

