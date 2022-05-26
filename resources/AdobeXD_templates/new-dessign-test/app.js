
// version parallax
window.onload = ()=>{
    //obtenemos y guardamos nuestra img del dom
    let image1 = document.querySelector(".image-backbround1");
    let image2 = document.querySelector(".image-backbround2");

    window.addEventListener('scroll', (e) =>{
    let scroll = window.scrollY;
    //entramos en la propiedad style y background de image
    image1.style.backgroundPositionY = `${scroll/2}px`;
    image2.style.backgroundPositionY = `${scroll/2}px`;
    });
}




// ////////////////////////////////////////////////

//cargamos la ruta de la imagen para poder trabajar
const imagen1 = document.getElementById('icons');
const imagen2 = document.getElementById('img-a');


//creamos la función
const cargarImagen = (entradas, observador)=> {

    entradas.forEach((entrada) => {
        console.log(imagen2)
        if(entrada.isIntersecting){
            console.log('La imagen esta en viewport');
            //que imagen entro
            entrada.target.classList.add('visible');
        }
    });
}
const observador = new IntersectionObserver(cargarImagen, {
    root:null, 
    rootMargin:'0px 0px 200px 0px',
    threshold:0
});

//cuales son las imagenes que queremos revisar? -> observe lo tenemos que poner tal cual sino no funciona
observador.observe(imagen1);
observador.observe(imagen2);
