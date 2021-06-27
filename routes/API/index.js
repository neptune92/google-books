const router = require("express").Router();
const bookRoutes = require("./books");


//book routes
router.use("/book", bookRoutes);

module.exports = router;