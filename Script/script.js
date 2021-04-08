let Numero_Cartas = Number(prompt("Digite o número de cartas do jogo:"));

while (Numero_Cartas < 4 || Numero_Cartas > 14 || Numero_Cartas%2 !== 0) {
    const obs = "Obs: Deve ser escolhindo número par entre 4 e 14"
    Numero_Cartas = prompt(`Digite o número de cartas do jogo:\n${obs}`);
}

const lista_gifs = [];
lista_gifs.push("<img class='bobro' src='Img-GIF/bobrossparrot.gif' alt='Parrot'>")
lista_gifs.push("<img class='explody' src='Img-GIF/explodyparrot.gif' alt='Parrot'>")
lista_gifs.push("<img class='fiesta' src='Img-GIF/fiestaparrot.gif' alt='Parrot'>")
lista_gifs.push("<img class='metal' src='Img-GIF/metalparrot.gif' alt='Parrot'>")
lista_gifs.push("<img class='revertit' src='Img-GIF/revertitparrot.gif' alt='Parrot'>")
lista_gifs.push("<img class='triple' src='Img-GIF/tripletsparrot.gif' alt='Parrot'>")
lista_gifs.push("<img class='unicorn' src='Img-GIF/unicornparrot.gif' alt='Parrot'>")

const gif_1 = lista_gifs.slice(0,Numero_Cartas/2)
const gif_2 = lista_gifs.slice(0,Numero_Cartas/2)
let gif_pares = gif_1.concat(gif_2)

gif_pares.sort(() => Math.random() - 0.5)

for (let i = 0; i < Numero_Cartas; i++) {
    const elemento = document.querySelector("ul");
    elemento.innerHTML += `
    <li class="cartas" onclick="Carta_Selecionada(this)">
    <div class="frente face">
    <img src="Img-GIF/front.png" alt="Parrot">
    </div>
    <div class="verso face">
    ${gif_pares[i]}
    </div>
    </li>
    `
}
function Carta_Selecionada(carta) {
    const imagem = carta.children[0]
    const gif = carta.children[1]
    imagem.classList.toggle('rotacaoFrente')
    gif.classList.toggle('rotacaoVerso')
    gif.classList.toggle('selecionado')
    
}

/**
 * function Cartas_Iguais(carta) {
    const gif = carta.children[1]
    const gif_certo = carta.children[1].getAttribute("class")
    const selecionado = document.querySelector("li .selecionado");
    if (selecionado !== null) {
        gif.classList.add("teste");
    }
}
 * 
 * 
 * 
 *   const selecionado = document.querySelector(".Prato_Principal .selecionado");
    const icone = document.querySelector(".Prato_Principal .selecionado ion-icon");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        icone.classList.add("oculto");
    }
    checkPrato = document.querySelector(prato);
    checkPrato.classList.add("selecionado");
    const iconeCheck = document.querySelector(prato + " ion-icon");
    iconeCheck.classList.remove("oculto");

    const Prato = document.querySelector(tipo);
    tipoPrato = Prato.innerHTML
    const Preço = document.querySelector(prato + ' .preço');
    preçoPrato = Preço.innerHTML
    conclusao_Pedido()
}
 * 
}**/

