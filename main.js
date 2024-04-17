let presentar = document.querySelector('.texto');



const observarTitulo = new IntersectionObserver(entry => {
    entry.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('visible');
        }
        else{
            element.target.classList.remove('visible');
        }
    });
});

observarTitulo.observe(presentar);

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


const iconFormat = document.querySelector('.icons-format');
const sunIcon = document.querySelector('#sun-icon');
const moonIcon = document.querySelector('#moon-icon');

iconFormat.addEventListener('click', () =>{
    let sunStyles = sunIcon.getAttributeNode('class');
    let sunSylesValue = sunStyles.value;
    if(sunSylesValue.includes('elected')){
        sunIcon.removeAttribute('class');
        let atr = document.createAttribute('class');
        atr.value = "hidden";
        sunIcon.setAttributeNode(atr);

        moonIcon.removeAttribute('class');
        let atr2 = document.createAttribute('class');
        atr2.value = "elected";
        moonIcon.setAttributeNode(atr2);

    }
    else{
        if(sunSylesValue.includes('elected'))
            sunIcon.removeAttribute('class');
            let atr = document.createAttribute('class');
            atr.value = "elected";
            sunIcon.setAttributeNode(atr);
    
            moonIcon.removeAttribute('class');
            let atr2 = document.createAttribute('class');
            atr2.value = "hidden";
            moonIcon.setAttributeNode(atr2);
    
    }
});


let producto = document.querySelector('.producto');
let delante = document.querySelector('#delante');
let detras = document.querySelector('#detras');

producto.addEventListener('mouseover', () =>{
    let a = delante.getAttributeNode('class');
    if(a.value == 'product-visible'){
        delante.removeAttribute('class');
        let atr = document.createAttribute('class');
        atr.value = 'product-hidden';
        delante.setAttributeNode(atr);

        detras.removeAttribute('class')
        let atr2 = document.createAttribute('class');
        atr2.value = 'product-visible';
        detras.setAttributeNode(atr2);
    }else{
        delante.removeAttribute('class');
        let atr = document.createAttribute('class');
        atr.value = 'product-visible';
        delante.setAttributeNode(atr);

        detras.removeAttribute('class')
        let atr2 = document.createAttribute('class');
        atr2.value = 'product-hidden';
        detras.setAttributeNode(atr2);
    }
});

producto.addEventListener('mouseout', () =>{
    let a = delante.getAttributeNode('class');
    if(a.value == 'product-visible'){
        delante.removeAttribute('class');
        let atr = document.createAttribute('class');
        atr.value = 'product-hidden';
        delante.setAttributeNode(atr);

        detras.removeAttribute('class')
        let atr2 = document.createAttribute('class');
        atr2.value = 'product-visible';
        detras.setAttributeNode(atr2);
    }else{
        delante.removeAttribute('class');
        let atr = document.createAttribute('class');
        atr.value = 'product-visible';
        delante.setAttributeNode(atr);

        detras.removeAttribute('class')
        let atr2 = document.createAttribute('class');
        atr2.value = 'product-hidden';
        detras.setAttributeNode(atr2);
    }
});