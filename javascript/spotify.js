

let spotifyText = document.querySelector('.spotify-albums-text');

const observarSpotify = new IntersectionObserver(element => {
    element.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('spotify-visible');
        }else{
            entry.target.classList.remove('spotify-visible');
        }
    });
});

observarSpotify.observe(spotifyText);

let albums = document.querySelectorAll('.album');
const observarAlbum = new IntersectionObserver(object =>{
    object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('album-visible');
        }
        else{
            entry.target.classList.remove('album-visible');
        }
    });
});

albums.forEach(entry =>{
    observarAlbum.observe(entry);
});

