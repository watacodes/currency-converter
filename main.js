const convertButton = document.querySelector('.convert-btn');
const placeholder = document.querySelector('.placeholder');
convertButton.addEventListener('click', apiInit);

function apiInit() {
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