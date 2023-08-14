// definicao do cardapio itens,descricao e valores

class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
    {pedido:'cafe', descricao:'Café', valor:`R$3.00`},
    {pedido:'chantily', descricao:'Chantily (extra do café)', valor:`R$1.50`},
    {pedido:'suco', descricao:'Suco Natural', valor:`R$6.20`},
    {pedido:'sanduiche', descricao:'Sanduiche', valor:`R$6.50`},
    {pedido:'queijo', descricao:'Queijo (extra do sanduiche)', valor:`R$2.00`},
    {pedido:'salgado', descricao:'Salgado', valor:`R$7.25`},
    {pedido:'combo1', descricao:'1 Suco e 1 Sanduiche', valor:`R$9.50`},
    {pedido:'combo2', descricao:'1 Café e 1 Sanduiche', valor:`R$7.50`},


        ];
        this.formasDePagamento = ['Dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        // verifica se ha algum pedido
        if (!itens.length) {
            return 'Não há itens no carrinho de compra!';
        }

        let total = 0;
        // busca o item no cardapio
        for (const item of itens) {
            const menuItem = this.cardapio.find(menuItem => menuItem.pedido === item);
            // verificao se o item existe no cardapio
            if (!menuItem) {
                return 'Item inválido!';
            }
            // verificação para itens extra sem o principal
            if (menuItem.descricao.includes('extra') && itens.indexOf(menuItem.pedido.replace('extra', '')) === -1) {
                return 'Item extra não pode ser pedido sem o principal';
            }
            // calculo total 
            total += menuItem.valor;
        }
        // forma de pagamento
        if (metodoDePagamento && !this.formasDePagamento.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        if (metodoDePagamento === 'Dinheiro') {
            total *= 0.95; // Desconto de 5% para pagamento em dinheiro
        } else if (metodoDePagamento === 'credito') {
            total *= 1.03; // Pagamento em crédito com juros de 3% no valor total
        }
        // quantidade de itens
        if (total === 0) {
            return 'Quantidade inválida!';
        }

        return total.toFixed(2);
    }
}

export { caixaDaLanchonete };

console.log();

 import { caixaDaLanchonete } from'./caixa-da-lanchonete.test.js

const caixa = new CaixaDaLanchonete();

const pedido = ['cafe', 'sanduiche', 'queijo'];
const metodoDePagamento = 'Dinheiro';
// total do pedido
const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, pedido);

console.log(`Valor total da compra: R$ ${valorTotal}`);
 
