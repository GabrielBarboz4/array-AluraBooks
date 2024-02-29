const btnFiltrar = document.querySelectorAll('.btn')
btnFiltrar.forEach (btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirLivrosNaTela(livrosFiltrados)
    
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalNaTela(valorTotal)
    }
}

function exibirValorTotalNaTela(valorTotal){
     elementoValorTotal.innerHTML = `
     <div class="livros__disponiveis">
    <p>Todos os livros estão disponíveis por R$ <span id="valor">${valorTotal}</span></p>
       </div>
     `
}
