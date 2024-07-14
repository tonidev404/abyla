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
