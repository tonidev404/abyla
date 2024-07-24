


let producto = document.querySelectorAll('.producto');
let flechas = document.querySelectorAll('.flechas');

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

flechas.forEach(entry =>{
    observarFlechas.observe(entry);
})
producto.forEach(entry =>{
    observarProducto.observe(entry);

})
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



let products = document.querySelectorAll('.producto');
products.forEach(e =>{
    let derArrow = e.querySelector('#derecha');
    let leftArrow = e.querySelector('#izquierda');
    let delante = e.querySelector('#delante');
    let detras = e.querySelector('#detras');

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
    
})

