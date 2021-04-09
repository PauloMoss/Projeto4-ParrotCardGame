let numeroCartas = Number(prompt("Digite o número de cartas do jogo:"));

numeroDeCartas ()
function numeroDeCartas () {

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0) {
        const obs = "Obs: Deve ser escolhindo número par entre 4 e 14"
        numeroCartas = prompt(`Digite o número de cartas do jogo:\n${obs}`);
    }
}

const listaGifs = [];
listaGifs.push("<img class='bobro' src='Img-GIF/bobrossparrot.gif' alt='Parrot'>")
listaGifs.push("<img class='explody' src='Img-GIF/explodyparrot.gif' alt='Parrot'>")
listaGifs.push("<img class='fiesta' src='Img-GIF/fiestaparrot.gif' alt='Parrot'>")
listaGifs.push("<img class='metal' src='Img-GIF/metalparrot.gif' alt='Parrot'>")
listaGifs.push("<img class='revertit' src='Img-GIF/revertitparrot.gif' alt='Parrot'>")
listaGifs.push("<img class='triple' src='Img-GIF/tripletsparrot.gif' alt='Parrot'>")
listaGifs.push("<img class='unicorn' src='Img-GIF/unicornparrot.gif' alt='Parrot'>")

listaGifs.sort(() => Math.random() - 0.5) // Embaralhar os tipos de Gifs usados no jogo
const metadeDosPares = listaGifs.slice(0,numeroCartas/2)
const outraMetade = listaGifs.slice(0,numeroCartas/2)
let paresDeGifs = metadeDosPares.concat(outraMetade)
paresDeGifs.sort(() => Math.random() - 0.5) // Embaralhar os Gifs na lista para serem distribuidos

distribuicaoDeCartas ()

function distribuicaoDeCartas () {
    for (let i = 0; i < numeroCartas; i++) {
        const elemento = document.querySelector("ul");
        elemento.innerHTML += `
        <li class="cartas" onclick="virarCartaSelecionada(this)">
        <div class="frente face">
        <img src="Img-GIF/front.png" alt="Parrot">
        </div>
        <div class="verso face">
        ${paresDeGifs[i]}
        </div>
        </li>`
    } 
}

let imgFrente;
let gifVerso;
let cartaSelecionada_1;
let cartaSelecionada_2;
let Gif_1;
let Gif_2;
let contadorAcertos = 0;
let contadorJogadas = 0;
let tempoClick = Date.now();

function virarCartaSelecionada(carta) {

    const delayClick = 1000; // Ao clicar em 2 cartas consecutivas, a próxima só poderá ser clicada após 1s.
    if (Date.now() - tempoClick > delayClick && Gif_2 !== undefined) {
        virarCarta(carta)
        verificarIguaildade(carta)
    } else if (Gif_2 === undefined) {
        virarCarta(carta)
        verificarIguaildade(carta)
    }
}

function virarCarta(carta) {
    imgFrente = carta.children[0]
    gifVerso = carta.children[1]
    imgFrente.classList.add('rotacaoFrente')
    gifVerso.classList.add('rotacaoVerso')
    tempoClick = Date.now();
    contadorJogadas++;
}

function verificarIguaildade(carta) {
    
    const selecionado = document.querySelector(".selecionado");
    if (selecionado !== null) {
        cartaSelecionada_2 = carta
        selecionado.classList.remove("selecionado");
        Gif_2 =  gifVerso.children[0].getAttribute("class")
       
    } else {
        cartaSelecionada_1 = carta
        Gif_1 =  gifVerso.children[0].getAttribute("class")
        cartaSelecionada_1.removeAttribute("onclick");
    }
    gifVerso.classList.add('selecionado')
    
    if (Gif_1 === Gif_2) {
        gifVerso.classList.remove('selecionado')
        cartaSelecionada_1.removeAttribute("onclick");
        cartaSelecionada_2.removeAttribute("onclick");
        contadorAcertos++;
        setTimeout(atualizarAtributos, 1000);
        
    } else if (Gif_1 !== Gif_2 && Gif_2 !== undefined){

        setTimeout(desVirarCartas, 1000);
        gifVerso.classList.remove('selecionado')
        cartaSelecionada_1.setAttribute("onclick",'virarCartaSelecionada(this)');
    }
}

function desVirarCartas() {
    
    cartaSelecionada_1.children[0].classList.remove('rotacaoFrente')
    cartaSelecionada_1.children[1].classList.remove('rotacaoVerso')
    cartaSelecionada_2.children[0].classList.remove('rotacaoFrente')
    cartaSelecionada_2.children[1].classList.remove('rotacaoVerso')
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
    if (contadorAcertos === (numeroCartas/2)) {
        clearInterval(idInterval);
        setTimeout(alert, 100, `Você ganhou em ${contadorJogadas} jogadas!\nTempo decorrido: ${contadorTempo} segundos`);
        setTimeout(Novo_Jogo, 100)
    } 
}  
function atualizarCont() {
    const elemento = document.querySelector(".contador");
    elemento.innerHTML = `Tempo de duração:<br>  ${contadorTempo} Segundos`;
}

function Novo_Jogo() {

    let novoJogo = prompt(`Gostaria de jogar novamente?\nObs: digite: S ou N`);
    if (novoJogo === 'S' || novoJogo === 's') {
        location.reload();
    } else if (novoJogo === 'N' || novoJogo === 'n'){
    setTimeout(alert, 50, 'Obrigado por Jogar')
    } 
}