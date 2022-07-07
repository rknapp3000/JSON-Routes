const express = require('express'); 
const app = express(); 
const configRoutes = require('./Routes');

configRoutes(app);

app.listen(3000, () => { 
    console.log("The server is now running! \n\nYour routes will be running on http://localhost:3000 !!!");  
}
);
