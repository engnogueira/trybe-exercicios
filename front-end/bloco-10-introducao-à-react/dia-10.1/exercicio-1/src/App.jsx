import React, { Component } from 'react';

const Task = (value) => {
  return (
    <ul>
      <li key={value}>{value}</li>
    </ul>
  ); 
}

const tarefas = ['Acordar', 'Estudar', 'Trabalhar', 'Comer', 'Dormir'];

class App extends Component {
  render() {
    return (
      <div>
        {tarefas.map(tarefa => 
          Task(tarefa))}
      </div>
    );
  }
}

export default App;
