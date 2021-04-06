let Numero_Cartas = prompt("Digite o número de cartas do jogo:");

while (Numero_Cartas < 4 || Numero_Cartas > 14 || Numero_Cartas%2 !== 0) {
    const obs = "Obs: Devem ser escolhindo números pares entre 4 e 14"
    Numero_Cartas = prompt(`Digite o número de cartas do jogo:\n${obs}`);
}

const lista_cartas = [];

/**for (let i = 0; i < Numero_Cartas; i++) {
    const elemento = document.querySelector(".container_Cartas");
    elemento.innerHTML += `
    <li class="cartas">
    <img src="Img-GIF\front.png" alt="Parrot">
    </li>`
}**/

