const api = "https://randomuser.me/api/"
const button = document.getElementById('btn')
const ui = {
    image: document.getElementById('avatar'),
    fullname: document.getElementById('fullname'),
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    city: document.getElementById('city')
}

let updateProfile = newProfile => {
    Object.keys(ui).forEach(element => {
        if (element != 'image')
            ui[element].innerText = newProfile[element]
        ui[element].setAttribute('src', newProfile[element])
    })
}

let getNewProfile = () => {
    fetch(api)
        .then(res => {
            if (!res.ok)
                throw Error(res.status)
            return res
        })
        .then(res => res.json())
        .then(data => {
            return {
                image: data.results[0].picture.large,
                fullname: `${data.results[0].name.first} ${data.results[0].name.last}`,
                username: data.results[0].login.username,
                email: data.results[0].email,
                city: data.results[0].location.city
            }
        })
        .then(newProfile => {
            updateProfile(newProfile)
        })
        .catch(err => {
            alert("Encountered and error: \n" + err)
        })
}

button.onclick = () => {
    getNewProfile();
}

getNewProfile();