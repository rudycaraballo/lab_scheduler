let express = require('express');
let homeRouter = express.Router();

homeRouter.get('/signup', (req, res) => {
    res.send("signup")
})

module.exports = homeRouter;