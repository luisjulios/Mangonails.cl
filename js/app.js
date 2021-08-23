// const cita = {
//   nombre_apellido: '',
//   email: '',
//   telefono: '',
//   fecha: '',
//   hora: '',
//   servicio: []
// }
// document.addEventListener('DOMContentLoaded', function(){
//   nombreApellidoCita();
//   telefonoCita();
//   emailCita();
//   fechaCita();
//   horaCita();
// });
// function nombreApellidoCita() {
//   const nombreInput = document.querySelector('#nombre_apellido');
//   nombreInput.addEventListener('input', e => {
//     const nombreTexto = e.target.value.trim();
//     //Validacion de que nombreTexto debe tener algo
//     if(nombreTexto === '' || nombreTexto.length < 3) {
//       mostrarAlerta('Nombre no válido', 'error')
//     } else {
//       const alerta = document.querySelector('.alerta');
//       if(alerta){
//         alerta.remove();
//       }
//       cita.nombre = nombreTexto;
//     }
//     console.log(nombreTexto);
//   });
// }
// function apellidoCita() {

//   const apellidoInput = document.querySelector('#apellido');
//   apellidoInput.addEventListener('input', e => {
//     const apellidoTexto = e.target.value.trim();
//     //Validacion de que apellidoTexto debe tener algo
//     if(apellidoTexto === '' || apellidoTexto.length < 3) {
//       mostrarAlerta('Apellido no válido', 'error')
//     } else {
//       const alerta = document.querySelector('.alerta');
//       if(alerta){
//         alerta.remove();
//       }
//       cita.apellido = apellidoTexto;
//     }
//   });
// }
// function telefonoCita() {

//   const telefonoInput = document.querySelector('#telefono');
//   telefonoInput.addEventListener('input', e => {
//     const telefono = e.target.value.trim();
//     //Validacion de que telefono debe tener algo
//     if(telefono === '' || telefono.length < 9) {
//       mostrarAlerta('Teléfono no válido', 'error')
//     } else {
//       const alerta = document.querySelector('.alerta');
//       if(alerta){
//         alerta.remove();
//       }
//       cita.telefono = telefono;
//     }
//   });
// }
// function emailCita() {
//   const emailInput = document.querySelector('#email');
//   emailInput.addEventListener('input', e => {
//     const email = e.target.value.trim();
//     //Validacion de que email debe tener algo
//     if(email === '') {
//       mostrarAlerta('Email no válido', 'error')
//     } else {
//       const alerta = document.querySelector('.alerta');
//       if(alerta){
//         alerta.remove();
//       }
//       cita.email = email;
//     }
//   });
// }
// function mostrarAlerta(mensaje, tipo) {
//   //Mostrar solo un alerta
//   const alertaPrevia = document.querySelector('.alerta');
//   if(alertaPrevia) {
//     return;
//   }
//   const alerta = document.createElement('DIV');
//   alerta.textContent = mensaje;
//   alerta.classList.add('alerta');
//   if(tipo === 'error'){
//     alerta.classList.add('error');
//   }
//   //Insertar en el html
//   const formulario = document.querySelector('.formulario');
//   formulario.appendChild(alerta);
//   //Eliminar alerta despues de 3 segundos
//   setTimeout(() => {
//     alerta.remove();
//   }, 3000);
// }
// function fechaCita() {
//   $("#fecha").change(function() {
//     const fechaCita = $('#fecha').val();
//     cita.fecha = fechaCita;
//   });
// }
// function horaCita () {
//   const selectHora = document.getElementById('hora');
// selectHora.addEventListener('change',
//   function(){
//     const horaCita = this.options[selectHora.selectedIndex].text;
//     cita.hora = horaCita;
//   });
// }
$(function(){
  $("#fecha").datepicker({
      minDate: '2d',
      maxDate: '15d',
      beforeShowDay: $.datepicker.noWeekends,
      dateFormat: "dd/mm/yy",
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      firstDay: 1,
      });
});
