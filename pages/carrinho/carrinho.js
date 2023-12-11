// var btnComprar = $(`#btnComprar`)
// var valor = 300
// var total = valor * $(`#qntProduto`)

class Cadastro {
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

var cadastroBtn = document.querySelector("#btnCadastro");
var listarBtn = document.querySelector("#listarBtn");
cadastroBtn.addEventListener("click", cadastrar);
listarBtn.addEventListener("click", listar)

function cadastrar(){
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#data").value;
    let categ = document.querySelector("#categ").value;
    let msgCadastro = document.querySelector("#msgCadastro");


    filmes.push(new Filme(nomeFilme, descricao, data, categ));
    msgCadastro.innerHTML = `<h5 class="sucesso">Filme Cadastrado</h5>`
}