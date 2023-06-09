const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes')

const app = express();

app.get('/home', (req,res) => {
    return res.json({msg: "ok"});
})

// /home to get

app.use('/api', apiRoutes);

// /api to check

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the Server on Port No: ${ServerConfig.PORT} `);
});

