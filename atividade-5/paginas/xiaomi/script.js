const modal = document.getElementById("modal")
const descricao = document.getElementById("Descricao")

document.getElementById('btnModal').addEventListener('click', () => {
    descricao.innerHTML = "O Xiaomi POCO X8 Pro destaca-se como um verdadeiro devorador de desempenho na categoria intermediária premium, combinando o poderoso processador MediaTek Dimensity 8500 Ultra a 8 GB de memória RAM e 256 GB de armazenamento interno. Essa combinação garante uma navegação extremamente ágil, excelente eficiência energética e performance de sobra para rodar jogos pesados e multitarefas exigentes sem travamentos. Sua tela AMOLED de 6,59 polegadas oferece uma experiência visual imersiva e vibrante, perfeita para consumo de vídeos e jogos com excelente contraste e cores vivas. Além da conectividade Dual SIM para maior praticidade no dia a dia, a versão na cor White traz um acabamento sofisticado e moderno, mantendo a proposta da linha POCO de entregar especificações de ponta com um apelo estético elegante."
    
   
});

document.getElementById('btnModal').addEventListener('click', () => {
    modal.style.display = 'flex'

});

document.getElementById('btnFechar').addEventListener('click', () => {
    modal.style.display = 'none'
});