/*comentário
js é uma linguagem interpretada (como python) e case sensitive
conseguimos acesssar elementos do html e aplicar modificações

/*No F12 do navegador*/
console.log("Vim do arquivo");
/*tipos diferentes de declarar uma variável*/
var metodoDeprecaded = 'verdadeiro';
let nome = 'Amanda';
console.log(nome);
console.log(metodoDeprecaded);

/*constante é um valor fixo 
const idade = 20;
let vida = 100;
let peso= 10.0;

console.log(typeof vida, typeof peso);

let variavel = true;
let indefinida;
let variavelNula = null;

console.log(typeof variavel, typeof indefinida, typeof variavelNula);

console.log(5 + (3 * 12));
vida = vida - 80;
console.log('A vida é: ' + vida);
console.log(`A vida da ${nome} é: ${vida}`);

const dano = Math.random() * 10;
const pessoa = prompt('Qual seu nome?');
console.log(pessoa);

alert("Olá, " + pessoa + "!");
pessoa = João;

let filme = "The Drama";
let ano = 2025;
let assistiu = true;

let nota = 0;

console.log("1.1:");
console.log(filme, ano, assistiu, nota);
console.log(typeof filme, typeof ano, typeof assistiu, typeof nota);

console.log(0 / 0);

/*1.2
const pizza = 72.0;
const amigos = 5;

const nome1 = prompt("Quem pediu a pizza?");
alert(`Olá, ${nome1}! A pizza custa R$${pizza} e será dividida entre ${amigos} amigos. Cada um pagará R$${(pizza / amigos)}`);*/

const idade = 19;
const temIngresso = true
const eVip = false;

const entra = (idade >= 18 && temIngresso) || eVip;
console.log("pode entrar?", entra);
console.log("barrado?", !entra);

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

const mochila = ["fone", "carregador", "caderno", "caneta"];
console.log(mochila);
console.log(mochila.length);
mochila.push("garrafa");
const usado = mochila.pop();
console.log(mochila);
console.log(usado);
mochila.splice(1, 0, "carteira", "chaves");
console.log(mochila);

/*faltou objetos*/