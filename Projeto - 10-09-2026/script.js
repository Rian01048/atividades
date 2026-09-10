const botao = document.getElementById("btnCarregar"); // aqui ele está pegando um ID em uma tag do HTML
const container = document.getElementById("usuarios"); // aqui ele está pegando um ID em uma tag do HTML

const fechar = document.getElementById("btnFechar")

fechar.addEventListener("click", esconderUsuario);
botao.addEventListener("click", carregarUsuarios); // Realizando um evento quando o usuário dar um click


async function carregarUsuarios() { // Uma função que vai executar outros codigos enquanto aguarda a conclusão de uma operação

    container.innerHTML = "Carregando..."; // Recebendo um elemento HTML
    container.style.display = 'grid'

    try { // Se o codigo funcionar perfeitamente, ele vai executar

        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        ); // Realizando uma requisição HTTP assíncrona

        const usuarios = await resposta.json(); // Transformando dados que chegaram em um objeto ou array para manipular o codigo

        container.innerHTML = ""; // Recebendo um elemento HTML

        // Em cada elemento dentro da array, ele vai executar uma função dentro dela
        usuarios.forEach(usuario => {

            const card = document.createElement("div"); // criando um elemento para mostrar os dados

            card.classList.add("usuario"); // criando um css para exibição

            card.innerHTML = `
                <h2>${usuario.name}</h2>
                <p><strong>Email: </strong> ${usuario.email}</p>
                <p><strong>Telefone: </strong> ${usuario.phone}</p>
                <p><strong>Cidade: </strong> ${usuario.address.city}</p> 
                <p><strong>Rua: </strong>${usuario.address.street}</p>
                <p><strong>Suíte: </strong>${usuario.address.suite}</p>
                <p><strong>Código Postal: </strong>${usuario.address.zipcode}</p>
                <p><strong>Empresa: </strong>${usuario.company.name}</p>
            `; // // Recebendo um elemento HTML

            container.appendChild(card); // Não entendi bem
        });

    } catch (erro) { // Se for encontrado algum erro, ele executa essa pequena estrutura de codigo

        container.innerHTML =
            "Não foi possível carregar os usuários."; // Recebendo um elemento HTML

        console.error(erro); //Aparecerá no terminal a mensagem de erro
    }
    return true
}

function esconderUsuario() {
    container.style.display = 'none';
}
