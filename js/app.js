//Declarando a variável para posterior cálculo do valor total do carrinho
let valorFinal;
//Limpando os campos ao iniciar o HTML
limpar();

function adicionar()
{
    /* Recuperar valores como:
    - Nome do Produto;
    - Quantidade; e
    - Valor  */
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    //Cálculo do preço (subtotal)
    let preco = quantidade * valorUnitario;

    //Adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

    //Atualizar o valor total
    valorFinal = valorFinal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorFinal}`;

    //Limpando o campo quantidade ao adicionar um produto
    document.getElementById('quantidade').value = 0;
}

function limpar()
{
    //Limpeza dos campos estruturados na página

    valorFinal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}