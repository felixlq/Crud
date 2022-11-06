// [CRUD] - JavaScript Básico

const vlogPost = {
    usuarios: [
        {
            username: 'Felix'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'Felix',
            content: 'Primeira entrada'
        }
    ]
}
// CREATE
function criaPost(dados) {
    vlogPost.posts.push({
        id: vlogPost.posts.length +1,
        owner: dados.owner,
        content: dados.content
    })
}

criaPost({ owner: 'Felix', content: 'Segunda Entrada' })
criaPost({ owner: 'Felix', content: 'Terceira Entrada' })
criaPost({ owner: 'Felix', content: 'Quarta entrada' })



console.log(vlogPost.posts)


// READ
function lerPost() {
    return vlogPost.posts
}
//console.log(lerPost());

// UPDATE
function atualizaPost(id, novoConteudo) {
    const postAtualizado = lerPost().find((post) => {
        return post.id === id
    })
    console.log(postAtualizado)
    postAtualizado.content = novoConteudo
}
atualizaPost(1, 'Novo conteúdo do post')
console.log(lerPost());

// DELETE
function deletaPost(id){
    const listaDePostAtualizada = lerPost().filter((postAtual) => {
        return postAtual.id !== id    
    })

    vlogPost.posts = listaDePostAtualizada
   
}

deletaPost(1)
deletaPost(2)
//deletaPost()

console.log(lerPost());