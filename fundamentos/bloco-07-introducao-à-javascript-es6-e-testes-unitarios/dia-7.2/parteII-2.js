const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* 
2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

- Modifique o nome da pessoa compradora.

 -Modifique o valor total da compra para R$ 50,00.
 */

 const orderModifier = (order) => {
  const nomeComprador = 'Luiz Silva';
  const valorCompra = 50;

  order['order']['delivery']['deliveryPerson'] = nomeComprador;
  order['payment']['total'] = valorCompra;

  return `Olá ${order['order']['delivery']['deliveryPerson']} , o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${order['payment']['total']},00.`
}

console.log(orderModifier(order));