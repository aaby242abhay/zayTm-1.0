const express = require("express");
const app = express();
const userRouter = require("./user.js");
const accountRouter = require("./accounts.js");

const router = express.Router();
router.use('/user',userRouter);
router.use('/account',accountRouter);

module.exports = router;