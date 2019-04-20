'use strict';


let registrar_pregunta = (ppregunta, prespuesta) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_pregunta",
    method: "POST",
    data: {
      pregunta: ppregunta,
      respuesta: prespuesta
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La pregunta fue enviada',
      text: 'En breve estaremos resolviendo su pregunta'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La pregunta no pude ser enviada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_pregunta = () => {
  let lista_pregunta = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_pregunta",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_pregunta = res.pregunta;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_pregunta;
 
};