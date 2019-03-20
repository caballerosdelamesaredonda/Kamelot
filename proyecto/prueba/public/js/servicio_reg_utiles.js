'use strict';

let registrar_utiles = (pdescripcion_pre, pcantidad_pre, pnombre_pre, pcantidad_pri, pdescripcion_pri, pnombre_pri, pcantidad_seg, pdescripcion_seg, pnombre_seg) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registro_nuevo",
    method: "POST",
    data: {
      
        descripcion_pre : pdescripcion_pre,
        cantidad_pre : pcantidad_pre,
        nombre_pre : pnombre_pre,
        descripcion_pri : pdescripcion_pri,
        cantidad_pri : pcantidad_pri,
        nombre_pri : pnombre_pri,
        descripcion_seg : pdescripcion_seg,
        cantidad_seg : pcantidad_seg,
        nombre_seg : pnombre_seg
        
        
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Los utiles han sido registrados exitosamente',
      text: 'Gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los utiles no han podido ser registrados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};
