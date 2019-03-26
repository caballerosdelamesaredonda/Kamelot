'use strict';


let registrar_actividad = (pactividad) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_actividad",
    method: "POST",
    data: {
      actividad: pactividad
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La actividad fue enviada',
      text: 'En unos segundos se mostrará en tu perfil'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La actividad no pude ser enviada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_actividad = () => {
  let lista_actividad = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_actividad",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_actividad = res.actividad;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_actividad;
 
};