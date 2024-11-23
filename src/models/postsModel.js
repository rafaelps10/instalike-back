import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida nas variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que retorna todos os posts do banco de dados
export async function getTodosPosts() {
    // Acessa o banco de dados 'rafa-instalike'
    const db = conexao.db('rafa-instalike');
    // Acessa a coleção 'posts' dentro do banco de dados
    const colecao = db.collection('posts');
    // Converte os documentos da coleção em um array e retorna
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db('rafa-instalike');
    const colecao = db.collection('posts');
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db('rafa-instalike');
    const colecao = db.collection('posts');
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objId) }, {$set:novoPost} );
}