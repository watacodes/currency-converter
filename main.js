const convertButton = document.querySelector('.convert-btn');
const placeholder = document.querySelector('.placeholder');

let currency;

convertButton.addEventListener('click', getAPI);

function appInit() {
  fetch(`https://api.vatcomply.com/rates`)
    .then(res => res.json())
    .then(data => {
      currency = Object.keys(data.rates)
      console.log(currency);
      loadCurrencyList();
      })
    .catch(err => console.log(err));
}

appInit();

function loadCurrencyList() {
  const originalCurrency = document.getElementById('from');
  const convertedCurrency = document.getElementById('to');
  for (let i = 0; i < currency.length; i++) {
    console.log(originalCurrency[originalCurrency.length]);
    originalCurrency[i] = new Option(currency[i]);
    convertedCurrency[i] = new Option(currency[i]);
  }
}

function getAPI() {
  const getCurrency = document.getElementById('from').value.toUpperCase().trim();
  const convertTo = document.getElementById('to').value.toUpperCase().trim();
  fetch(`https://api.vatcomply.com/rates?base=${encodeURIComponent(getCurrency)}`)
    .then(res => res.json())
    .then(data => {
      placeholder.innerText = `1 ${getCurrency} is ${data.rates[convertTo]} in ${convertTo}!`;
      console.log(data, placeholder.innerText);
    })
    .catch(err => console.log(err));
}

