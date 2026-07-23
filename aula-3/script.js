const modal = document.getElementById("modal")
const descricao = document.getElementById("Descricao")
const imagem = document.getElementById("imagemAnimal")

document.getElementById('btnGato').addEventListener('click', () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_79qNS65yfhq7wV3pYLHzmusWq4d9W9eFFVwZmkOkKbkinjiFSrcnOIU&s=10"
    descricao.textContent = "sdfjnsjfdk"

});
document.getElementById('btnCachorro').addEventListener('click', () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGdzYqNrmptbHg96JehLz8rWJzmmmI2fvsRF_QG793hS0Qz-xkxOSFF8&s=10"
    descricao.textContent = "olngdkfng"
});
document.getElementById('btnLeao').addEventListener('click', () => {
    imagem.src = "https://pequenopet.com.br/wp-content/uploads/2018/06/Natureza-Leoes-1.jpg"
    descricao.textContent = "kjvafnkfa"
});
document.getElementById('btnElefante').addEventListener('click', () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_HpEwHYti1bSDjfkFINh9nANJdH_hb9ndtAGbPAW4w&s=10"
    descricao.textContent = "jsgaksdbf"
});
document.getElementById('btnTubarao').addEventListener('click', () => {
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmENOSH3uCYEJuOsa7Ogh5IIjscwYO-4aCWsE-O-vQ0g&s=10"
    descricao.textContent = "sdhbkahfubyh"

});


document.getElementById('btnModal').addEventListener('click', () => {
    modal.style.display = 'flex'

});

document.getElementById('btnFechar').addEventListener('click', () => {
    modal.style.display = 'none'
});
