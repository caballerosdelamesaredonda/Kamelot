'use strict';

let citas = consultar_citas();

let mostrar_lista_citas = () => {

    let tabla = document.querySelector('.tabla_citas tbody');
    tabla.innerHTML = '';

    for (let i = 0; i < citas.length; i++) {
            let newdate = new Date(citas[i]['fecha']);
            let month = newdate.getMonth() + 1;
            let day = newdate.getDate();
            let year = newdate.getFullYear();
            let dateformated = month + '-' + day + '-' + year;
            //console.log(month+'-'+day+'-'+year);

            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = citas[i]['userid'];
            fila.insertCell().innerHTML = citas[i]['centroid'];
            //fila.insertCell().innerHTML = citas[i]['fecha'];
            fila.insertCell().innerHTML = dateformated;
            fila.insertCell().innerHTML = citas[i]['hora'];
    }

};

//mostrar_lista_citas();


let citas_programadas = () => {
    let citas = consultar_citas(userCentro_citas);
    let listacitas = [];
    for (let i = 0; i < citas.length; i++) {
        let newdate = new Date(citas[i]['fecha']);
        let month = newdate.getMonth() + 1;
        let day = newdate.getDate();
        let year = newdate.getFullYear();
        let dateformated = month + '-' + day + '-' + year;
        //console.log(month+'-'+day+'-'+year);

        listacitas.push(dateformated);
        //console.log(listacitas);
    }
    return listacitas;
};

/* Días a deshabilitar en el calendario de citas mediante un arreglo */
//var disableddates = ["3-20-2019", "3-21-2019"];
var disableddates = citas_programadas();

function DisableSpecificDates(date) {

    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    // First convert the date in to the mm-dd-yyyy format 
    // Take note that we will increment the month count by 1 
    var currentdate = (m + 1) + '-' + d + '-' + y;

    // We will now check if the date belongs to disableddates array 
    for (var i = 0; i < disableddates.length; i++) {

        // Now check if the current date is in disabled dates array. 
        if ($.inArray(currentdate, disableddates) != -1) {
            return [false, 'highlight_citas'];
        }
    }

    // In case the date is not present in disabled array, we will now check if it is a weekend. 
    // We will use the noWeekends function
    var weekenddate = $.datepicker.noWeekends(date);
    return weekenddate;

}





 