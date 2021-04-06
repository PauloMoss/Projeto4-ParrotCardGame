let Numero_Cartas = prompt("Digite o número de cartas do jogo:");

while (Numero_Cartas < 4 || Numero_Cartas > 14 || Numero_Cartas%2 !== 0) {
    const obs = "Obs: Deve ser escolhindo número par entre 4 e 14"
    Numero_Cartas = prompt(`Digite o número de cartas do jogo:\n${obs}`);
}

const lista_gifs = [];
lista_gifs.push("<img src='Img-GIF/bobrossparrot.gif' alt='Parrot'>")

for (let i = 0; i < Numero_Cartas; i++) {
    const elemento = document.querySelector("ul");
    elemento.innerHTML += `
    <li class="cartas">
    <img src="Img-GIF/front.png" alt="Parrot">
    </li>`
}

