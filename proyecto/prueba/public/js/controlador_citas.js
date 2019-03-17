$( "#datepicker" ).datepicker();

$(function () {
    $("#datepicker-13").datepicker({ maxDate: '+20', minDate: '0', beforeShowDay: $.datepicker.noWeekends });
    $("#datepicker-13").datepicker("show");

});


