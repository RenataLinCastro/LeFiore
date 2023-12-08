var btnComprar = $(`#btnComprar`)
var valor = 300
var total = valor * $(`#qntProduto`)

btnComprar.on(`click`, function(){
    alert(`O total foi de R$${total}`)
});
