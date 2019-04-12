'use strict';

const input_busqueda = document.querySelector('#txt_buscar');


let tabla = document.querySelector('#tbl_usuarios tbody');
let userid = localStorage.getItem('usuario_en_sesion');


if(userid==null){
    window.location.href='index.html';
}

let mostrar_datos = () =>{

    let usuarios = listar_usuarios();

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

    console.log('Se encontró un: ' + typeof resultado + ':');
    console.log(resultado);



    tabla.innerHTML = '';

    for(let i = 0; i < resultado.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        let celda_nombre = fila.insertCell();
        let celda_correo = fila.insertCell();
        let celda_tipo = fila.insertCell();
        let estado = fila.insertCell();
        let opciones = fila.insertCell();

        celda_nombre.classList.add('column1');
        celda_correo.classList.add('column2');
        celda_tipo.classList.add('column3');
        estado.classList.add('column4');
        opciones.classList.add('column5');

        celda_nombre.innerHTML = resultado[i]['nombre'];
        
        if (resultado[i]['tipo_usuario'] === 'PF') {
            celda_nombre.innerHTML = resultado[i]['nombre'] +' '+resultado[i]['papellido'];
        }else {
            celda_nombre.innerHTML = resultado[i]['nombre'];
        }

        celda_correo.innerHTML = resultado[i]['correo_electronico'];

        let tipo_usuario = resultado[i]['tipo_usuario'];
        switch (tipo_usuario) {
            case 'AD':
                celda_tipo.innerHTML = 'Administrador';
                break;
            case 'PF':
                celda_tipo.innerHTML = 'Padre de familia';
                break;
            case 'CE':
                celda_tipo.innerHTML = 'Centro educativo';
                break;
        }



        estado.innerHTML = resultado[i]['estado'];
        
        if (resultado[i]['estado'] === 'activo'){

            let boton_deshabilitar = document.createElement('button');
            boton_deshabilitar.dataset.id_usuario = resultado[i]['_id'];
            boton_deshabilitar.addEventListener('click', function(){
                deshabilitar(this.dataset.id_usuario);
                mostrar_datos();
            });
        } else {
            let boton_habilitar = document.createElement('button');
            boton_habilitar.dataset.id_usuario = resultado[i]['_id'];
            boton_habilitar.addEventListener('click', function(){
                habilitar(this.dataset.id_usuario);
                mostrar_datos();
            });
        }



        let boton_borrar = document.createElement('button');

        boton_habilitar.classList.add('habilitar');
        boton_deshabilitar.classList.add('deshabilitar');
        boton_borrar.classList.add('borrar');

        boton_habilitar
        boton_deshabilitar
        boton_borrar

    }

};

mostrar_datos();
input_busqueda.addEventListener('keyup', mostrar_datos);