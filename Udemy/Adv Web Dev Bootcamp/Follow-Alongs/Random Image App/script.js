let button = document.getElementById('btn')

button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            let data = JSON.parse(xhr.responseText)
            let photo = document.getElementById('photo')
            photo.setAttribute('src', data.message)
        }
    }
})