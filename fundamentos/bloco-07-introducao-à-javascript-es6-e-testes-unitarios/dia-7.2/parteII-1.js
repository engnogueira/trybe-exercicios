/* 
Parte II
Para os exercícios a seguir, use o seguinte código.

Agora você vai fazer alguns exercícios de fixação.
1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
- Note que o parâmetro da função já está sendo passado na chamada da função.
 */

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "Ap. 701",
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
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


const validacao = (elemento, variaveis, solucao) => {
  if (variaveis.includes(elemento[0])) {
  solucao.push(elemento);
  }
  if (typeof elemento[1] === "object") {
  percorrerObjeto(elemento[1]);
};
return solucao;
}

const percorrerObjeto = (obj) => {
  Object.entries(obj).forEach((elemento) => {
    return validacao(elemento, variaveis,solucao)
  });
};

let solucao = [];

const variaveis = [
  "deliveryPerson",
  "name",
  "phoneNumber",
  "street",
  "number",
  "apartment",
];

const customerInfo = (order) => {
  percorrerObjeto(order);
  return `Olá ${solucao[5][1]}, entrega para: ${solucao[0][1]}, Telefone: ${solucao[1][1]}, ${solucao[2][1]}, ${solucao[3][1]}, ${solucao[4][1]}`;
};

console.log(customerInfo(order));
