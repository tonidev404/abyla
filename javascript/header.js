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