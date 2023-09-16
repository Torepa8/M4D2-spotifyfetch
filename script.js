const searchUser=document.getElementById('searchField').value
const api="https://striveschool-api.herokuapp.com/api/deezer/search?q="

function search() {
const searchUser=document.getElementById('searchField').value
    // alert(searchUser)
    fetch(api+searchUser)
        .then(response => response.json())
        .then(displayUserData)
        .catch(error => {
            console.log(error.message)
        })
}

function displayUserData(datiAlbum) {
    // console.log(datiAlbum.data[0])

    //nome dell'artista
    console.log(datiAlbum.data[0].artist.name)
    //picture_small
    console.log(datiAlbum.data[0].artist.picture_small)
    //titolo album
    console.log(datiAlbum.data[0].album.title)
    document.querySelector('#prova').innerHTML=datiAlbum.data[0].artist.name

    // document.querySelector("#full-name").innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
    // document.querySelector("#avatar").src = person.picture.large
    // document.querySelector("#cell").innerText = person.cell

    // document.querySelector("#address").innerText = `${person.location.street.name}, ${person.location.street.number}, ${person.location.state}, ${person.location.country}`
}
