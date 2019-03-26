'use strict';

let registrar_etiqueta = (pnombre) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_etiqueta",
    method: "POST",
    data: {
      nombre : pnombre
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La ha sido registrada',
      text: 'Gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La no ha sido registrada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listado_etiquetas = () => {
 
  let lista_etiquetas = [];

  let request = $.ajax({

    url: "http://localhost:4000/api/listar_etiquetas",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_etiquetas = res.etiqueta;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_etiquetas;
 
};