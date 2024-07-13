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
let flechas = document.querySelector('.flechas');

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

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // El porcentaje de visibilidad que queremos observar
}

const observarFlechas = new IntersectionObserver(object =>{
    object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('flechas-visible');
        }
        else{
            entry.target.classList.remove('flechas-visible');
        }
    })
}, options)

observarFlechas.observe(flechas);
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


let derArrow = document.querySelector('#derecha');
let leftArrow = document.querySelector('#izquierda')

leftArrow.addEventListener('click', () =>{
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
    derArrow.style.opacity = '1';
    leftArrow.style.opacity = '0';
});

derArrow.addEventListener('click', () =>{
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
    derArrow.style.opacity = '0';
    leftArrow.style.opacity = '1';
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

observarTextoAbout.observe(aboutTexto);


let sections = document.querySelector('.sections');
let list = document.querySelector('.list');
let cross = document.querySelector('.cross');
let rrssh = document.querySelector('.header-redes-sociales');
let bHidden = document.querySelector('.buttons-hidden')
list.addEventListener('click', () =>{
    sections.removeAttribute('class')
    let atr = document.createAttribute('class');
    atr.value = 'header-buttons-visible sections';
    sections.setAttributeNode(atr);
    
    bHidden.style.display = 'flex';
    cross.style.display = 'block';
    cross.style.position = 'absolute';
    cross.style.left = '5%';
    list.style.display = 'none';
    rrssh.style.display = 'none';
    sections.style.width = '100%';
})

cross.addEventListener('click', () =>{
    sections.removeAttribute('class')
    let atr = document.createAttribute('class');
    atr.value = 'sections';
    sections.setAttributeNode(atr);
    bHidden.style.display = 'none';
    cross.style.display = 'none';
    list.style.display = 'block';
    rrssh.style.display = 'flex';
    sections.style.width = '0';

})