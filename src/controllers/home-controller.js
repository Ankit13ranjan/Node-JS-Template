const { StatusCodes } = require('http-status-codes');

const home = (req,res)=>{
    return res.status(StatusCodes.OK).send("Welcome to the Home Page of V2.");
}

module.exports = {
    home
}