
const key = "322273627054f20892c3b904f1c1362f";

function ColocarDadosNaTela(dados) {
    console.log(dados); // Adicione esta linha para verificar os dados no console

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.input-cidade').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            CliqueNoBotao();
        }
    });

    document.querySelector('.botao-busca').addEventListener('click', function () {
        CliqueNoBotao();
    });
});

async function Buscarcidade(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    ColocarDadosNaTela(dados); // Chama a função para exibir os dados na tela
}

function CliqueNoBotao() {
    const input = document.querySelector(".input-cidade").value;
    Buscarcidade(input);
}
