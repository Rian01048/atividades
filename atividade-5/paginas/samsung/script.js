const modal = document.getElementById("modal")
const descricao = document.getElementById("Descricao")

document.getElementById('btnModal').addEventListener('click', () => {
    descricao.innerHTML = "O Samsung Galaxy S26 representa a evolução do ecossistema topo de linha da marca, unindo um design refinado e minimalista a uma construção premium reforçada por materiais de alta resistência e proteção contra água e poeira. Sua tela Dynamic AMOLED 2X oferece uma experiência visual impressionante, trazendo taxa de atualização adaptativa de 120 Hz, brilho intenso para uso sob luz solar direta e cores extremamente precisas, ideal para consumo de mídia, navegação e jogos de alta performance. No coração do dispositivo, o desempenho de última geração é impulsionado por um processador de ponta trabalhando em conjunto com os recursos avançados de Galaxy AI. O sistema de câmeras traz um conjunto versátil com sensores de alta resolução e inteligência artificial para otimização de imagem, garantindo fotos extremamente detalhadas em ambientes noturnos e gravações de vídeo em alta definição com estabilização avançada. Para completar, o modelo conta com bateria de longa duração com suporte a carregamento rápido e integração fluida com todo o ecossistema Samsung."
    
   
});

document.getElementById('btnModal').addEventListener('click', () => {
    modal.style.display = 'flex'

});

document.getElementById('btnFechar').addEventListener('click', () => {
    modal.style.display = 'none'
});