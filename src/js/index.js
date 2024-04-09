// Quando clicar na seta para avançar,temos 
//  que esconder toads as imagens e mostrar a próxima imagem
// A imagem atual começa em 0 pq é a primeira imagem
// assim que for clicado no avançar eu perciso adicionar
// mais 1 ao contador de imagens
// pra poder saber que agora eu vou mostrar a segunda imagem
// esconder todas
// pegar todas a imagens usando o dom e remover a classe mostrar
// mostrar a próxima imagem
// pegar todas a imagens e desocbrir qual é a próxima
const imagens = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('.btn-avancar')
const setaVoltar = document.getElementById('.btn-voltar')
let imagemAtual = 0


function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
    if (imagemAtual !== imagens.length - 1) {
        imagemAtual++
    }

    esconderImagens()
    mostrarImagem()
})


setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }
    esconderImagens()
    mostrarImagem()
})