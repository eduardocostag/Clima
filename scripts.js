
const key = "322273627054f20892c3b904f1c1362f"

function ColocarDadosNaTela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name  // document query selector seleciona algo no html
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C" // document é um "apelido" para oque esta no html
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%" // innerHtml seleciona essa parte em html e troca pelo desejado
    document.querySelector(".img-previsao").src = ` https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}

async function Buscarcidade(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    ColocarDadosNaTela(dados); // Chama a função para exibir os dados na tela
}

function CliqueNoBotao() {
    const input = document.querySelector(".input-cidade").value

    Buscarcidade(input);

}