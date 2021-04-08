
let Numero_Cartas = Number(prompt("Digite o número de cartas do jogo:"));

numeroDECartas ()
function numeroDECartas () {

    while (Numero_Cartas < 4 || Numero_Cartas > 14 || Numero_Cartas%2 !== 0) {
        const obs = "Obs: Deve ser escolhindo número par entre 4 e 14"
        Numero_Cartas = prompt(`Digite o número de cartas do jogo:\n${obs}`);
    }
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

DistribuicaoDECartas ()
function DistribuicaoDECartas () {
    for (let i = 0; i < Numero_Cartas; i++) {
        const elemento = document.querySelector("ul");
        elemento.innerHTML += `
        <li class="cartas" onclick="Virar_CartaSelecionada(this)">
        <div class="frente face">
        <img src="Img-GIF/front.png" alt="Parrot">
        </div>
        <div class="verso face">
        ${gif_pares[i]}
        </div>
        </li>
        `
    } 
}

let papagaio;
let Gif
let Gif_1;
let Gif_2;
let contadorAcertos = 0;
let contadorJogadas = 0;

function Virar_CartaSelecionada(carta) {
    papagaio = carta.children[0]
    Gif = carta.children[1]
    papagaio.classList.add('rotacaoFrente')
    Gif.classList.add('rotacaoVerso')
    contadorJogadas++;

    Verificar_Iguaildade(carta)
}


function Verificar_Iguaildade(carta) {
    
    const selecionado = document.querySelector(".selecionado");
    
    if (selecionado !== null) {
        objeto_2 = carta
        selecionado.classList.remove("selecionado");
        Gif_2 =  Gif.children[0].getAttribute("class")
       
    } else {
        objeto_1 = carta
        Gif_1 =  Gif.children[0].getAttribute("class")
    }
    Gif.classList.add('selecionado')
    
    if (Gif_1 === Gif_2 && selecionado !== null) {
        Gif.classList.remove('selecionado')
        
        Gif_2 =  undefined
        Gif_1 =  undefined

        contadorAcertos++;
        

    } else if (Gif_1 !== Gif_2 && Gif_2 !== undefined){

        setTimeout(desVirarCartas, 1000);
        Gif.classList.remove('selecionado')
        Gif_2 =  undefined
        Gif_1 =  undefined
        
    }

    if (contadorAcertos === (Numero_Cartas/2)) {
        alert('Parabens!')
    }
}

function desVirarCartas() {
    
    objeto_1.children[0].classList.remove('rotacaoFrente')
    objeto_1.children[1].classList.remove('rotacaoVerso')
    objeto_2.children[0].classList.remove('rotacaoFrente')
    objeto_2.children[1].classList.remove('rotacaoVerso')
}


/**
 *  Gif_2 =  undefined
    Gif_1 =  undefined

    
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

