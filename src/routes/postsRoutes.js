import express from 'express';
import { listarPosts } from '../controllers/postsController.js';

const routes = (app) => {
    // Configura o middleware para que o app possa processar requisições JSON
    app.use(express.json());
    // Rota GET que responde com todos os posts em formato JSON
    app.get('/posts', listarPosts);
}

export default routes;
