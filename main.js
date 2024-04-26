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




let producto = document.querySelector('.producto');
let delante = document.querySelector('#delante');
let detras = document.querySelector('#detras');

const observarProducto = new IntersectionObserver(object =>{
    object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('producto-visible');
        }
        else{
            entry.target.classList.remove('producto-visible');
        }
    });
});


observarProducto.observe(producto);

let productoTexto = document.querySelector('.productos-header-text');

const observarTextoProducto = new IntersectionObserver(object =>{
    object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('texto-productos-visible');
        }else{
            entry.target.classList.remove('texto-productos-visible');
        }
    });
});

observarTextoProducto.observe(productoTexto);


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


let textoSobre = document.querySelector('.about-header-text');

const observarTituloSobre = new IntersectionObserver(object =>{
    object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('titulo-about-visible');
        }
        else{
            entry.target.classList.remove('titulo-about-visible');
        }
    })
})
observarTituloSobre.observe(textoSobre);

let aboutTexto = document.querySelector('.about-text');

const observarTextoAbout = new IntersectionObserver(object =>{
    object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('texto-about-visible');
        }
        else{
            entry.target.classList.remove('texto-about-visible');
        }
    })
})

observarTextoAbout.observe(aboutTexto)