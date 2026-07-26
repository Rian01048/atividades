const modal = document.getElementById("modal")
const descricao = document.getElementById("Descricao")

document.getElementById('btnModal').addEventListener('click', () => {
    descricao.textContent = "O Motorola Moto G86 combina design elegante na cor Verde Escuro com uma durabilidade excepcional, trazendo proteções IP68 e IP69 que garantem alta resistência contra água, poeira e jatos de alta pressão. Sua tela pOLED de resolução 1.5K entrega imagens incrivelmente nítidas, com cores vibrantes e alto contraste, perfeita para quem busca uma experiência imersiva ao assistir a vídeos ou navegar no dia a dia. Na parte de desempenho e fotografia, o aparelho impressiona pelo conjunto avançado. Equipado com 512 GB de armazenamento interno e até 24 GB de memória RAM total (8 GB nativos somados a 16 GB de RAM Boost), ele assegura máxima fluidez até nas tarefas mais exigentes. Além disso, seu sistema de câmeras traz um sensor principal Sony de 50 MP com estabilização óptica (OIS), suporte a Moto AI e gravação de vídeos em 4K, garantindo fotos nítidas e filmagens com qualidade profissional em qualquer cenário."
    
   
});

document.getElementById('btnModal').addEventListener('click', () => {
    modal.style.display = 'flex'

});

document.getElementById('btnFechar').addEventListener('click', () => {
    modal.style.display = 'none'
});