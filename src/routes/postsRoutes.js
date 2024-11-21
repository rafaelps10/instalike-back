// Importa o framework Express para criar a aplicação web
import express from 'express';

// Importa o módulo Multer para lidar com o upload de arquivos
import multer from 'multer';

// Importa as funções para controlar as operações relacionadas a posts
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js';

// Configura o armazenamento de arquivos no disco
const storage = multer.diskStorage({
  // Define o diretório de destino para os arquivos enviados
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo (mantém o nome original)
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Cria uma instância do Multer com a configuração de armazenamento
const upload = multer({ dest: './uploads', storage });

// Define as rotas da aplicação
const routes = (app) => {
  // Permite que o servidor interprete corpos de requisições no formato JSON
  app.use(express.json());

  // Rota para obter todos os posts
  app.get('/posts', listarPosts);// chama a função controladora apropriada

  // Rota para criar um novo post
  app.post('/posts', postarNovoPost);// chama a função controladora para a criação de posts

  // Rota para fazer upload de uma imagem (assumindo uma unica imagem chamada "imagem")
  app.post('/upload', upload.single('imagem'), uploadImagem);// chama a função controladora para procssamento da imagem
  
};

// Exporta a função de rotas para ser utilizada em outros módulos
export default routes;