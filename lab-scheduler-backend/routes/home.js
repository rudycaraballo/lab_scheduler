let express = require('express');
let homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.render("landing", {title: "This will be the homepage"})
})

module.exports = homeRouter;