class Cadastro{
    constructor(valorNome, valorEmail,valorSenha, valorNiver, valorLivro){
        this.nome = valorNome;
        this.email = valorEmail;
        this.senha = valorSenha;
        this.niver = valorNiver;
        this.livro = valorLivro;
    }
}
var btnCadastro = document.querySelector("#btnCadastro");
btnCadastro.on("click", cadastrar);
var novoUsuario = []

function cadastrar(){
    let nomeUsuario = document.querySelector("#nomeUsuario").value;
    let emailUsuario = document.querySelector("#emailUsuario").value;
    let senhaUsuario = document.querySelector("#senhaUsuario").value;
    let niverUsuario = document.querySelector("#niverUsuario").value;
    let livroUsuario = document.querySelector("#livroUsuario").value;

    novoUsuario.push(new Cadastro(nomeUsuario, emailUsuario, senhaUsuario, niverUsuario, livroUsuario));

    console.log(novoUsuario);
}
