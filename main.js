let presentar = document.querySelector('.texto');

const observer = new IntersectionObserver(entry => {
    entry.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('visible');
        }
        else{
            element.target.classList.remove('visible');
        }
    });
});

observer.observe(presentar);