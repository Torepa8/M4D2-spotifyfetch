// const searchUser=document.getElementById('searchField').value
const api="https://striveschool-api.herokuapp.com/api/deezer/search?q="

function search() {
const searchUser=document.getElementById('searchField').value
    // alert(searchUser)
    fetch(api+searchUser)
        .then(response => response.json())
        .then(displayUserData)
        .catch(error => {
            console.log(error.message)
            alert('Nessuno dato trovato')
        })
}

function displayUserData(datiAlbum) {
    console.log(datiAlbum.data[0]) // per guardare la struttura dati resituita
    console.log(datiAlbum.data.length)
    //nome dell'artista
    console.log(datiAlbum.data[0].artist.name)
    //picture_small
    console.log(datiAlbum.data[0].artist.picture)
    //titolo album
    console.log(datiAlbum.data[0].album.title)
    //carico nome e cover artista su dom
    let titolo=document.getElementById('titolotrovato')
    let cover_album=document.getElementById('covertrovata')
    titolo.innerHTML=datiAlbum.data[0].artist.name
    cover_album.src=datiAlbum.data[0].artist.picture

    let card=document.getElementById('card_all_element')
    card.classList.add('d-flex','h-100')
    
    // document.querySelector("#address").innerText = `${person.location.street.name}, ${person.location.street.number}, ${person.location.state}, ${person.location.country}`
}
