let express = require('express');
let bookingRouter = express.Router();

bookingRouter.get('/', (req, res) => {
    res.render("booking")
})

module.exports = bookingRouter;