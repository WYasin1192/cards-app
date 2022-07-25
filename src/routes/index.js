const router = require("express").Router();


router.use("/card", require("./card"));

module.exports = router;