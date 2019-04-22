'use strict';


const input_fecha = document.querySelector('#fecha');
let userlocal = localStorage.getItem('usuario_en_sesion');



let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    console.log(id);
    return id;
}

let rating_id = get_param("id");

let rating = traer_rating(rating_id);
console.log(rating);

let mostar_datos_rating = () => {

 //   input_nombre.value = rating.nombre;
   // input_fecha.value = rating.fecha_registro;
    document.querySelector('#h1').innerHTML = rating.nombre;
    document.querySelector('#fecha').innerHTML = rating.fecha_registro;


}

mostar_datos_rating();




if(userlocal==null){
    window.location.href='index.html';
}

/*let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    return error;
}

let obtener_datos = () => {

    if (validar() == false) {
    let nombre = input_nombre.value;
    
    modificar_etiqueta(etiqueta_id,nombre);

} else {
    swal.fire({
        type: 'warning',
        title: 'La etiqueta no fue registrada',
        text: 'Por favor revise los campos resaltados'
    });
}

};

boton_enviar.addEventListener('click', obtener_datos);
*/