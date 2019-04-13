'use strict';
const input_busqueda = document.querySelector('#buscar_transacción');


let mostrarTransacciones = () => {

    let transacciones = obtenerTransacciones();

    let busqueda = '';
    if (input_busqueda.value !== null){
        busqueda = input_busqueda.value;
    }
    let resultado =[];

    resultado = usuarios.filter(usuario => (
            busqueda.length > 0 ? usuario.nombre.toLowerCase().trim().includes(
                busqueda.toLowerCase().trim()
            ) : usuario
        )
    );

    let cuerpoTabla = document.querySelector('#tblTransacciones tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i < listaTransacciones.length; i++){
        if(listaTransacciones[i]['transaccion'].toLowerCase().includes(filtroTransaccion.toLowerCase())){

            // creacion de la fila e incertandola en cuepo tabla
            let fila = cuerpoTabla.insertRow();
            fila.className = 'fila';

            // creacion de las celdas y poniendolas en la fila

            let celdaFechaHora = fila.insertCell();
            let celdaTransaccion = fila.insertCell();
            let celdaUsuario = fila.insertCell();
            let celdaTipoUsuario = fila.insertCell();
            let celdaEstatus = fila.insertCell();


            //agregando texto a las celdas

            celdaFechaHora.innerHTML = listaTransacciones[i]['fechaHora'];
            celdaTransaccion.innerHTML = listaTransacciones[i]['transaccion'];
            celdaUsuario.innerHTML = listaTransacciones[i]['usuario'];
            celdaTipoUsuario.innerHTML = listaTransacciones[i]['tipoUsuario'];
            celdaEstatus.innerHTML = listaTransacciones[i]['estatus'];

        
        }
    }
};

mostrarTransacciones();
inputFiltrarTransaccion.addEventListener('keyup', mostrarTransacciones);