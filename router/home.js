/* const express = require("express"); 
const router = express.Router();

router.get ("/",(req,res)=>{
res.render ("index", {titulo:"Home"})
})




module.exports =router; */


const express = require("express"); 
const router = express.Router();

const homeController = require ("../controllers/homeControllers.js")

router.get("/",homeController.index) //index : /cursos

module.exports =router;