const imgCafe = document.querySelector('.starbucks');
const circle = document.querySelector('.circle');
const banner = document.querySelector('#star');
const boton = document.querySelector('.fondo');

document.querySelector('#thumb_1').addEventListener('click', () => {
    
    //Cambiar imagen
    imgCafe.src = 'img/img1.png';
    imgCafe.style.height = '100%';
    imgCafe.style.width = '340px';
    banner.style.color = '#017143';
    boton.style.background = '#017143';
    //Cambiar fondo
    circle.style.background = '#017143';
    
});   

document.querySelector('#thumb_2').addEventListener('click', () => {
    
    //Cambiar imagen
    imgCafe.src = 'img/img2.png';
    imgCafe.style.height = '100%';
    imgCafe.style.width = '340px';
    banner.style.color = '#eb7495';
    boton.style.background = '#eb7495';
    //Cambiar fondo
    circle.style.background = '#eb7495';
    
});

document.querySelector('#thumb_3').addEventListener('click', () => {
    
    //Cambiar imagen
    imgCafe.src = 'img/img3.png';
    imgCafe.style.height = '100%';
    imgCafe.style.width = '340px';
    banner.style.color = '#d752b1';
    boton.style.background = '#d752b1';
    //Cambiar fondo
    circle.style.background = '#d752b1';
    
});
