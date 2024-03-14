import express from "express";

const routes = express.Router(); // É especificado o .Router pois apenas as funcionalidades de rotas são necessárias.

// O get seleciona os dados do banco e os envia para o front de acordo com a requisição
routes.get("/", (request, response) => {
    return response.status(200).send("Communication Sucessful!")  // Retorna status 200 com uma mensagem
});

export default routes;