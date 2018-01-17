const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080

express ()
    .get('/', (req, res) => res.sendFile(path.join(__dirname+'/webpage.html')))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));







