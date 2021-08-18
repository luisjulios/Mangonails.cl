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
