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