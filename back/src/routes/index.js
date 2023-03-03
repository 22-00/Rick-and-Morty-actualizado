const express = require("express")
const  router  = express.Router()
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharaDetail");

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)


module.exports = router;