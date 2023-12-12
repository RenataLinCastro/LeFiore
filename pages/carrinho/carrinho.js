var btnComprar = $(`#btnComprar`)
var valor = 300
var undCompras = Number($("#qntProduto").val())
var total = 0

//null: quando você cria uma variável que irá receber um valor futuro.

btnComprar.on("click", function(){
    total = undCompras * valor
    alert(`O total foi de R$ ${total}`)
});