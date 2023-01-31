const button = document.querySelector('button')
const numbers = document.querySelector('h1')
const quote = document.querySelector('p')
const quoteItem = []


button.addEventListener('click', () => shuffle())
getData()
async function getData() {
        const res = await fetch('https://api.adviceslip.com/advice')
        const quotes = await res.json()
        const p = document.createElement('p')
    setTimeout(() => {
        numbers.innerHTML = `<h1> ${'ADVICE #' + quotes.slip.id}</h1>`
        quote.innerHTML = `<p>  "${quotes.slip.advice}"</p>`
    }, 1000)
        console.log(p.innerHTML)
        
}

function shuffle() {
    numbers.innerHTML = ''
    quote.innerHTML ='Loading...'
    getData()
}