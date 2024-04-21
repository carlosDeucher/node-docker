const prompt = require("prompt-sync")();

function falaOi(nome) {
  console.log("Oiii " + nome);
}

const nome = prompt("Qual o seu nome? ");

falaOi(nome);
