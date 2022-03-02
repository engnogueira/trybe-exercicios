import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(target){
    console.log(target);
    console.log('Cliquei no botão ', `${target.name}`);
  }
  render() {
    
    return (
      <>
        <div>App</div>
          <br/>
        <button
          onClick={ this.handleClick }
          name='botao 1'
          >Botão 1</button>
          <br/>
          <br/>
        <button
          onClick={ this.handleClick }
          name='botao 2'
          >Botão 2</button>
          <br/>
          <br/>
        <button
          onClick={ this.handleClick }
          name='botao 3'
          >Botão 3</button>
          <br/>
          <br/>
      </>
    )
  }
}
