import getTodosPosts from "../models/postsModel.js";

export async function listarPosts (req, res) {
    // Chama a função getTodosPosts para obter os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia os posts em uma resposta JSON com status 200 (OK)
    res.status(200).json(posts);
}