const express = require("express"); 



const app = express(); //guardo metodos en app

const port = 3030; 

app.listen(port, () => { // defino el puerto y el mensaje cuando levante el servidor
    console.log(`Servidor Ok en el puerto http://localhost:${port}`);
  });


//RUTAS
const home = require ("./router/home.js");
const nosotros = require ("./router/nosotros.js");

app.use("/",home);
app.use("/nosotros",nosotros);

/* app.get ("/",(req,res)=> res.sendFile(path.join(__dirname,"views", "index.ejs")));
app.get ("/",(req,res)=> res.sendFile(path.join(__dirname,"views", "nosotros.ejs")));  */


app.set("view engine", "ejs"); // motor de vistas - ejs
app.set("views", __dirname + "/views"); // direccion de las vistas


app.use(express.static('public')); //recurso estatico


// defino vista para el error 404
 app.use((req, res, next) => {
     res.status(404).sendFile(__dirname + "/public/404.html"); 
      });
 
     