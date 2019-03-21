'use strict';

let registrar_utiles = (pnombre_lista, ptipo, pciclo, pnivel, pano) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registro_nuevo",
    method: "POST",
    data: {
      
        nombre_lista : pnombre_lista,
        tipo : ptipo,
        ciclo : pciclo,
        nivel : pnivel,
        ano : pano
        
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La lista ha sido registrada',
      text: 'Gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La lista no ha sido registrada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};
