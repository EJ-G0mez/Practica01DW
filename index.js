//Importando la biblioteca express
const express = require("express")
const path = require('path') //Windows \ Mac o Linux /
//Crear una aplicacion web
const app = express()

//Middleware que configure donde se encuentran los recursos
//publicos
app.use(express.static(path.join(__dirname, 'public')))

app.get('/magiaysusprincipios',(request, response)=>{
    response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(8081, ()=>{
    console.log("Servidor online en el puerto 8081")
})