document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});

function navegacionFija(){
    
    const barra = document.querySelector('.header');

    //Registrar el intersection observer
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    });

    //elemento a observar
    observer.observe(document.querySelector('.contenido-video'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

   enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
   });
}