
let getNewCat = () => {
    $.get('https://api.thecatapi.com/v1/images/search')
        .done(data => {
            console.log(data)
            $('#photo').attr('src', data[0].url);
        })
        .fail(err => {
            console.log(err)
        })
}

$('#btn').click(() => { getNewCat() })