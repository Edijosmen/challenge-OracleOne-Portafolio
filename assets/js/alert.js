
const buttonWalkingDog = document.querySelectorAll("[data-click-walkingDog]");
const buttonEat = document.querySelectorAll("[data-click-eat]");
const buttonBonplan = document.querySelectorAll("[data-click-bonplan]");
const buttonPortafolio = document.querySelectorAll("[data-click-portafolio]");


buttonWalkingDog.forEach(button =>{
  button.addEventListener("click",e => {
    e.preventDefault();
    mostrarWalkingDog(); 
});
})

buttonEat.forEach(button =>{
  button.addEventListener("click",e => {
    e.preventDefault();
    mostrarLetseat();
});
});

buttonBonplan.forEach(button =>{
  button.addEventListener("click",e => {
    e.preventDefault();
    mostrarBonplan();
   
});
});
buttonPortafolio.forEach(button =>{
  button.addEventListener("click",e => {
    e.preventDefault();
    mostrarPortafolio();
  });
});
function mostrarWalkingDog() {
    Swal.fire({
      title: '¡Walking Dog!',
      text: 'Desarrollo de un Sitio web de gastronomía para el público en general, el cual le permita al usuario consumidor identificar los diferentes negocios registrados en el sitio web y poder navegar en los distintos menús o platos que ofrece dicho restaurante o negocio. Permite cambiar el rol de usuario para poder publicar la descripción de un nuevo negocio y en consecuencia un menú. Entre otras funcionalidades.',
      confirmButtonText: 'Aceptar'
    });
}
function mostrarLetseat() {
    Swal.fire({
      title: '¡Lets-eat!',
      text: 'Todos amamos a nuestras mascotas. Pero a veces, no podemos dedicarles todo el tiempo que quisieramos y sentimos que ellos se aburren. Por eso, recurrimos a un paseador. ¿Pero cómo saber si es de confianza?. Walking Dog vendría a soluciona ese inconveniente con paseadores independientes y regionales bajo un marco de seguridad tanto para el paseador, como para el cliente',
      confirmButtonText: 'Aceptar'
    });
}
function mostrarBonplan() {
    Swal.fire({
      title: '¡Bonplan!',
      text: 'Es una aplicación para una inmobiliaria que le permite manejar inmuebles en estado de venta o arriendo a nivel nacional, donde además tendrá su propio acceso para administrar su inmueble, como publicar uno nuevo, cambiar el estado de disponibilidad y publicación, donde el cliente podrás ver su inmueble y en caso de que le interese uno podrá solicitar información con la referencia del producto. también podrás contactar a la inmobiliaria para servicios de asesoría. tendrás la opción de filtrar los inmuebles por diferentes parámetros. entre otras funcionalidades.',
      confirmButtonText: 'Aceptar'
    });
}
function mostrarPortafolio() {
  Swal.fire({
    title: '¡Edi:dev!',
    text: 'Es una página web estática desarrollada con reactJS ,con el objetivo de poder mostrar un poco de mí como programador y dar a conocer  algunos proyectos personales en los que he trabajo para fortalecer las habilidades como developer.',
    confirmButtonText: 'Aceptar'
  });
}