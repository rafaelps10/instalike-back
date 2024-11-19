import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Uma foto teste',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        id: 2,
        descricao: 'Gato adorável dormindo',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        id: 3,
        descricao: 'Citação motivacional sobre a vida',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        id: 4,
        descricao: 'Paisagem urbana à noite',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        id: 5,
        descricao: 'Comida caseira deliciosa',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        id: 6,
        descricao: 'Arte abstrata colorida',
        imagem: 'https://placekitten.com/400/300'
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});
