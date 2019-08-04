const express = require('express');
const app = express();
const port = process.env.port || 3000;
const route = require('./app/routes/mainRoute');


//Set Headers for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authToken");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Max-Age", "86400");
    next();
});


app.use('/api', route);

app.listen(port, console.log('listening on port '+ port));