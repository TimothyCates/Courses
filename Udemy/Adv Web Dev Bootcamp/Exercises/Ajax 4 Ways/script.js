const api = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
const buttons = {
    xhr: document.getElementById('xhr'),
    fetch: document.getElementById('fetch'),
    jquery: document.getElementById('jquery'),
    axios: document.getElementById('axios')
}
const quoteP = document.getElementById('quote')

let updateQuote = (quote) => {
    quoteP.innerText = quote
}

let apixhr = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            if (xhr.status == 200)
                updateQuote(JSON.parse(xhr.responseText)[0])
            else
                alert("Error: " + xhr.status)
        }
    }
}

let apifetch = (url) => {
    fetch(url)
        .then(res => {
            if (!res.ok)
                throw Error(res.status)
            return res
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            updateQuote(data[0])
        })
        .catch(error => {
            alert(error)
        })
}

let apijquery = (url) => {
    $.get(url)
        .done(data => {
            updateQuote(data[0]);
        })
        .fail(err => {
            alert(err);
        })
}

let apiaxios = (url) => {
    axios.get(url)
        .then(res => {
            updateQuote(res.data[0])
        })
        .catch(err => {
            alert(err)
        })
}

let methods = {
    xhr: apixhr,
    fetch: apifetch,
    jquery: apijquery,
    axios: apiaxios,
}

Object.keys(buttons).forEach(key => {
    buttons[key].onclick = () => {
        methods[key](api);
    }
})
