// Se a peça possuir um peso superior a 100 gramas, pode Cadastrar

// Dada a capacidade de cada caixa,, caso a lista de peças seha superior a 10, imprima uma mensagem informando não ter capacidade suficiente

// caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe a mensagem de erro

var listaDePecas = ["Amortecedor","Motor","Correia dentada","Filtro de ar","Pneu 14"];

if(listaDePecas.length > 5){
    console.log("Não é possível cadastrar por excesso de peças");
}else{
    console.log("Limite ok")
}

let peso = 99;

if(peso >= 100){
    console.log("Peso permitido")
}else{
    console.log("O peso está abaixo do normal")
}

let peca = "Fa";

if(peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("O nome da peça é válido");
}
