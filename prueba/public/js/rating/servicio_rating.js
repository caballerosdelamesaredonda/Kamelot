'use strict';

let registrar_actividad = (pUserId,pCentroId, pComentario,pRating) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_rating",
    method: "POST",
    data: {
      userid: pUserId,
      centroid: pCentroId,
      comentario: pComentario,
      rating: pRating
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El rating fue enviado',
      text: 'En unos segundos se mostrará en tu perfil'
    }).then(function() {
      //window.location = "perfil_centroedu.html";
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El rating no pude ser enviada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};