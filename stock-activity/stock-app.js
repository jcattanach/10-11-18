let userInput = document.querySelector('#user-input')
let submitButton = document.querySelector('#submit-button')
let stockContainer = document.querySelector('#stock-container')

submitButton.addEventListener('click',function() {
  let stockChoice = userInput.value.toString()

  getStockQuote(stockChoice)

  let stockInfo = `
  <div>
    <label>STOCK NAME</label>
    <p>${quotes[stockChoice].name}</p>
    <label>PRICE</label>
    <p>${quotes[stockChoice].price}</p>
  </div>
  `
  stockContainer.innerHTML = stockInfo

  setInterval(function() {
    getStockQuote(stockChoice)

  let stockInfo = `
  <div>
    <label>STOCK NAME</label>
    <p>${quotes[stockChoice].name}</p>
    <label>PRICE</label>
    <p>${quotes[stockChoice].price}</p>
  </div>
  `
  stockContainer.innerHTML = stockInfo
  },2000)
})
