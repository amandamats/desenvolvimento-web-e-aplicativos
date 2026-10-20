
const placar = { jogador: 0, computador: 0 };

const jogadaComputador = () => {
    const numero = Math.random();

    if (numero < 1 / 3) {
        return "pedra";
    } else if (numero < 2 / 3) {
        return "papel";
    } else {
        return "tesoura";
    }
};

const vencedor = (jogador, computador) => {
    if (jogador === computador) {
        return "empate";
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "jogador";
    } else {
        return "computador";
    }
};

const historico = [];

while (placar.jogador < 3 && placar.computador < 3) {
    let jogador = prompt("Pedra, papel ou tesoura?");

    // Aceitar diferentes grafias
    if (jogador === "PEDRA" || jogador === "Pedra") {
        jogador = "pedra";
    } else if (jogador === "PAPEL" || jogador === "Papel") {
        jogador = "papel";
    } else if (jogador === "TESOURA" || jogador === "Tesoura") {
        jogador = "tesoura";
    }

    // Validar a jogada
    if (
        jogador !== "pedra" &&
        jogador !== "papel" &&
        jogador !== "tesoura"
    ) {
        alert("Jogada inválida! Digite pedra, papel ou tesoura.");
        continue;
    }

    const computador = jogadaComputador();
    const resultado = vencedor(jogador, computador);

    if (resultado === "jogador") {
        placar.jogador++;
    } else if (resultado === "computador") {
        placar.computador++;
    }

    const rodada = `Você: ${jogador} | Computador: ${computador} — Placar ${placar.jogador} x ${placar.computador}`;

    alert(rodada);

    historico.push(rodada);
}

alert("Fim de jogo!");

console.log("Placar final:", placar);

console.log("Histórico das rodadas:");
historico.forEach((rodada) => {
    console.log(rodada);
});
