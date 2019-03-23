
'use strict';  /* Indicarle al navegador que cuenta interprete Javascript, que exige lo mismo que otros lenguajes */

// let nombre = 'Francisco';  // la palabra let se utiliza para declarar variables
// dependiendo de su ambito pueden ser locales o globales al mismo archivo de js.

//const pi = Math.pi; // Cuando quiere declarar una constante, solamente para valores que no deben cambiar.

const input_nombre_lista = document.querySelector('#txt_nombre_lista');
const slt_tipo = document.querySelector('#slt_tipo');
const slt_ciclo = document.querySelector('#slt_ciclo');
const slt_nivel = document.querySelector('#slt_nivel');
const input_ano = document.querySelector('#text_ano');
const boton_registrar = document.querySelector('#btn_registrar');


let validar = () => {
    let error = false;
    
    if (input_nombre_lista.value == '') {
        input_nombre_lista.classList.add('error_input');
        error = true;
    } else {
        input_nombre_lista.classList.remove('error_input');
    }
    if (slt_tipo.value == '') {
        slt_tipo.classList.add('error_input');
        error = true;
    } else {
        slt_tipo.classList.remove('error_input');
    }

    if (slt_ciclo.value == '') {
        slt_ciclo.classList.add('error_input');
        error = true;
    } else {
        slt_ciclo.classList.remove('error_input');
    }

    if (slt_nivel.value == '') {
        slt_nivel.classList.add('error_input');
        error = true;
    } else {
        slt_nivel.classList.remove('error_input');
    }

    if (input_ano.value == '') {
        input_ano.classList.add('error_input');
        error = true;
    } else {
        input_ano.classList.remove('error_input');
    }

    return error;
};

// Se tiene que colocar las funciones utilizables en otras funciones arriba de la misma.

let mostrarDatos = () => {

    if (validar() == false) {
      let nombre_lista = input_nombre_lista.value;
      let tipo = slt_tipo.value;
      let ciclo = slt_ciclo.value;
      let nivel = slt_ciclo.value;
      let ano = input_ano.value;
      
registrar_utiles(nombre_lista, tipo, ciclo, nivel, ano);
  
    } else {
        Swal.fire({
            type: 'warning',
            title: 'Lista de útiles no fue enviada.',
            text: 'Revise los campos'
        })
    }

}; // funciones de flecha


boton_registrar.addEventListener('click', mostrarDatos);















