const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  const objeto = (customer, nacionalidadeKey, nacionalidade) => {
      customer.nacionalidadeKey = nacionalidade;
      return customer };

  console.log(objeto(customer, 'nacionalidade', 'Brasileiro'));