// apiScript.js     
const API_URL = `https://api.coincap.io/v2/assets`;



const fetchCoins = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  try {
    const getUl = document.getElementById('crypto-list');
    const result = await fetch(API_URL, myObject);
    const dataObj = await result.json();
    console.log(dataObj);
    const { data } = dataObj;
    data.forEach(function (moeda) {
        if (parseInt(moeda.rank) <= 10) {
          const newLi = document.createElement('li');
          newLi.innerText = `${moeda.name} (${moeda.symbol}): ${parseInt(moeda.priceUsd).toFixed(3)}`;
          getUl.appendChild(newLi);
        }
      });
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

window.onload = () => fetchCoins();
