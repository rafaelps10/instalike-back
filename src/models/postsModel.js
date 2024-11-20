import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida nas variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que retorna todos os posts do banco de dados
export default async function getTodosPosts() {
    // Acessa o banco de dados 'rafa-instalike'
    const db = conexao.db('rafa-instalike');
    // Acessa a coleção 'posts' dentro do banco de dados
    const colecao = db.collection('posts');
    // Converte os documentos da coleção em um array e retorna
    return colecao.find().toArray();
}