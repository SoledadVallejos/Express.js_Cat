const express = require("express"); 
const router = express.Router();

const nosotrosController = require ("../controllers/nosotrosControllers.js")

router.get("/",nosotrosController.index) //index : /cursos

module.exports =router;