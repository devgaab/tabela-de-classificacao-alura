// var gaab = {
//     nome: 'Gaab',
//     vitorias: 0,
//     empates: 0,
//     derrotas: 0,
//     pontos: 0
// };
// var divison = {
//     nome: 'Divison',
//     vitorias: 0,
//     empates: 0,
//     derrotas: 0,
//     pontos: 0
// };
// var baiao = {
//     nome: 'Baião',
//     vitorias: 0,
//     empates: 0,
//     derrotas: 0,
//     pontos: 0
// };

var listaJogadores = [];

var elementoTabela = document.getElementById('tabelaJogadores');

// exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = '';
    listaJogadores.forEach((jogador, index) => {
        // console.log(jogador);
        elementoTabela.innerHTML +=
        `<tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})" class="vitoria">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})" class="empate">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})" class="derrota">Derrota</button></td>
            <td><button class="del" onClick="removerJogador(${index})"><i class="bi bi-person-dash-fill"></i></button></td>
            <td><button class="clean" onClick="limparPontuacaoJogador(${index})"><i class="bi bi-trash3-fill"></i></button></td>
        </tr>`;
    });
};

function addJogador() {
    var nomeNovoJogador = document.getElementById('campoNomeJogador').value;
    listaJogadores.push({
        nome: nomeNovoJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    });
    document.getElementById('campoNomeJogador').value = '';
    exibirNaTela();
};

function adicionarVitoria(index) {
    listaJogadores[index].vitorias++
    listaJogadores[index].pontos = listaJogadores[index].pontos + 3
    exibirNaTela();
};

function adicionarEmpate(index) {
    listaJogadores[index].empates++
    listaJogadores[index].pontos = listaJogadores[index].pontos + 1
    exibirNaTela();
};

function adicionarDerrota(index) {
    listaJogadores[index].derrotas++
    listaJogadores[index].pontos = listaJogadores[index].pontos - 1
    exibirNaTela();
};

function limparPontuacaoJogador(index) {
    listaJogadores[index].vitorias = 0;
    listaJogadores[index].empates = 0;
    listaJogadores[index].derrotas = 0;
    listaJogadores[index].pontos = 0;
    exibirNaTela();
};

function removerJogador(index) {
    listaJogadores.splice(index, 1);
    exibirNaTela();
}

function apagarJogadores() {
    listaJogadores = [];
    exibirNaTela();
}