//preload//
const load = document.querySelector('#load')
const body = document.querySelector('body');

window.addEventListener('load', (event) => {  
    
    setTimeout(() =>{
    load.style.display = 'none';
    body.classList.remove('hidden');
    },1000);   

});

// inicializar el evento al cargar la pagina
addEventListener('DOMContentLoaded',() => {
    
// selectores     
const img1 = document.querySelector('#img-one');
const img2 = document.querySelector('#img-two');

// array de imagenes
imagenes = [ './assets/img/c1.png', './assets/img/c2.png', './assets/img/c3.png', './assets/img/c4.png'];

// valor inicial de la imagen para ejecutar la funcion
let i = 1;  

// funcion para iniciar el bucle
const slideshow = ()  => {
    img2.src = imagenes[i];
    img2.classList.add('active');
    i++;
    if (i == imagenes.length) {
    i=0;}

// tiempo de transicion al cambiar las imagenes    
    setTimeout(() => {
        img1.src= img2.src
        img2.classList.remove('active');}, 1000);
} 

// intervalo de tiempo entre cada interacion del ciclo    
    setInterval(slideshow, 5000);
})




















     







   
   
    
  
        
 

   
    
  











// addEventListener('DOMContentLoaded', () => {
//     const imagenes = ['./assets/img/c1.png', './assets/img/c2.png', './assets/img/c3.png', './assets/img/c4.png' ];
//     let i = 1; 
//     for (let i = 0; i < imagenes.length; i++){
//     }  
//     imgOne.src = imagenes[0];

//     const slideshow = () => {
//         imgOne.src = imagenes[i];
//         if (imgTwo == imagenes.length) {
//             i = 0; 
//             i++      
//         }   
// }
//     setInterval(slideshow,4000);

// })






