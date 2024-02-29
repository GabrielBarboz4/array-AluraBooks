let livros = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosApi()

async function getBuscarLivrosApi() {
    //  res vem de resposta //
    const res = await fetch(endpointApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDescontos(livros)
    exibirLivrosNaTela(livrosComDesconto)
}
