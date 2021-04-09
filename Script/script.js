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

lista_gifs.sort(() => Math.random() - 0.5) // Embaralhar os tipos de Gifs usados no jogo
const gif_1 = lista_gifs.slice(0,Numero_Cartas/2)
const gif_2 = lista_gifs.slice(0,Numero_Cartas/2)
let gif_pares = gif_1.concat(gif_2)
gif_pares.sort(() => Math.random() - 0.5) // Embaralhar os Gifs na tela

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
let objeto_1;
let objeto_2;
let Gif_1;
let Gif_2;
let contadorAcertos = 0;
let contadorJogadas = 0;
let tempoClick = Date.now();
let delayClick = 1000; // Ao clicar em 2 cartas consecutivas, a próxima só poderá ser clicada após 1s.

function Virar_CartaSelecionada(carta) {
    
    if (Date.now() - tempoClick > delayClick && Gif_2 !== undefined) {
        virarCarta(carta)
        Verificar_Iguaildade(carta)
    } else if (Gif_2 === undefined) {
        virarCarta(carta)
        Verificar_Iguaildade(carta)
    }
}

function virarCarta(carta) {
    papagaio = carta.children[0]
    Gif = carta.children[1]
    papagaio.classList.add('rotacaoFrente')
    Gif.classList.add('rotacaoVerso')
    tempoClick = Date.now();
    contadorJogadas++;
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
        objeto_1.removeAttribute("onclick");
    }
    Gif.classList.add('selecionado')
    
    if (Gif_1 === Gif_2) {
        Gif.classList.remove('selecionado')
        objeto_1.removeAttribute("onclick");
        objeto_2.removeAttribute("onclick");
        contadorAcertos++;
        setTimeout(atualizarAtributos, 1000);
        
    } else if (Gif_1 !== Gif_2 && Gif_2 !== undefined){

        setTimeout(desVirarCartas, 1000);
        Gif.classList.remove('selecionado')
        objeto_1.setAttribute("onclick",'Virar_CartaSelecionada(this)');
       
    }
}

function desVirarCartas() {
    
    objeto_1.children[0].classList.remove('rotacaoFrente')
    objeto_1.children[1].classList.remove('rotacaoVerso')
    objeto_2.children[0].classList.remove('rotacaoFrente')
    objeto_2.children[1].classList.remove('rotacaoVerso')
    atualizarAtributos ()
}
function atualizarAtributos () {
    Gif_2 =  undefined
    Gif_1 =  undefined
}

let contadorTempo = 1;
let idInterval;
Tempo()

function Tempo() {
    idInterval = setInterval(contagem, 1000);
    atualizarCont()
}
function contagem() {
    contadorTempo+=1;
    atualizarCont();
    if (contadorAcertos === (Numero_Cartas/2)) {
        clearInterval(idInterval);
        setTimeout(alert, 50, `Parabens! Tempo: ${contadorTempo}`);
        setTimeout(Novo_Jogo, 50)
    } 
}  
function atualizarCont() {
    const elemento = document.querySelector(".contador");
    elemento.innerHTML = contadorTempo;
}

function Novo_Jogo() {

    let novoJogo = prompt(`Gostaria de jogar novamente?\nObs: digite: S ou N`);
    
    if (novoJogo === 'S' || novoJogo === 's') {
        location.reload();
    } else if (novoJogo === 'N' || novoJogo === 'n'){
    alert('Obrigado por Jogar')
    } 
}