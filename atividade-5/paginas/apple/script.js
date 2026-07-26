const modal = document.getElementById("modal")
const descricao = document.getElementById("Descricao")

document.getElementById('btnModal').addEventListener('click', () => {
    descricao.textContent = "O iPhone 17 Pro representa o ápice da inovação e engenharia da Apple, combinando uma estrutura ultrarresistente com um design refinado e elegante. Equipado com a tela Super Retina XDR com tecnologia ProMotion de 120 Hz, o dispositivo entrega transições extremamente fluidas e níveis impressionantes de brilho e nitidez, garantindo uma experiência visual imersiva para jogos, vídeos e navegação sob qualquer iluminação. Por dentro, o aparelho traz a potência do processador A19 Pro, otimizado especialmente para executar tarefas complexas de inteligência artificial da Apple Intelligence com máxima velocidade e eficiência energética. Seu sistema de câmeras triplo avançado eleva o patamar da fotografia mobile, oferecendo recursos de zoom óptico aprimorados, capturas impressionantes em ambientes de baixa luminosidade e gravações de vídeo em qualidade profissional."
    
   
});

document.getElementById('btnModal').addEventListener('click', () => {
    modal.style.display = 'flex'

});

document.getElementById('btnFechar').addEventListener('click', () => {
    modal.style.display = 'none'
});