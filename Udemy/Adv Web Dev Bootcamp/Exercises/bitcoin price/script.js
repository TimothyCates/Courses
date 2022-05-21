const coindeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const span = document.getElementById('price')
const button = document.querySelector('button')

let getPrice = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', coindeskAPI);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            const data = JSON.parse(xhr.responseText)
            span.innerText = "$" + data.bpi.USD.rate
        }
    }
}

button.onclick = () => {
    getPrice();
}

getPrice();