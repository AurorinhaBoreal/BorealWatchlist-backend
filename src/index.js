import express from "express"
import routes from "./routes.js"

const server = express() // Instânciando um objeto para ter acesso as funcionalidades do Express

server.use(express.json()); // Define o modelo de comunicação como JSON

server.use('/', routes); // Redireciona a requisição para o arquivo routes.js

server.listen(3333, () => {
    console.log("The server is running!!")
    // Usa a variavel do Express para subir o servidor em uma porta especifica, nesse caso a 3333
})

// Documentação do Express:
// https://expressjs.com
