import express from "express";
import bodyParser from "body-parser";

import palabrasRoute from "./routes/palabrasRoutes.js" 
const app = express(); 
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res) => { 
res.json ({ ok:true}); 
}); 

app.use("/palabras", palabrasRoute); 
 

const PORT = process.env.PORT || 5000 

 

app.listen(PORT, () => console.log (" http://localhost:" + PORT)); 