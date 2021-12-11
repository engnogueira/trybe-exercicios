/*
 Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo. 
*/

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = (dragon) =>
  (dragon.damage = Math.floor(Math.random() * (dragon.strength - 15) + 16));
console.log(danoDragao(dragon));

const danoWarrior = (warrior) =>
  (warrior.damage = Math.floor(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength
  ));
console.log(danoWarrior(warrior));
