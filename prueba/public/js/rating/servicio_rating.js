'use strict';

let registrar_rating = (pUserId,pCentroId, pComentario,pRating) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_rating",
    method: "POST",
    data: {
      userid: pUserId,
      centroid: pCentroId,
      comentario: pComentario,
      rating: pRating,
      fecha: Date().toLocaleString()
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El rating fue enviado',
      text: 'En unos segundos se mostrará en el perfil del centro'
    }).then(function() {
      window.location.href = 'lista_ratings_centro.html';
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

let consultar_ratings = (pId) => {

  let consultar_rating = [];

  let request = $.ajax({
      url: "http://localhost:4000/api/listar_ratings_usuario",
      method: 'POST',
      async: false,
      data: {
        centroid: pId
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });

  request.done(function (response) {

      if (response.success) {
          consultar_rating = response.ratings;
      } else {
          consultar_rating = response.ratings;
          swal.fire({
              type: 'error',
              title: 'Error',
              text: response.msj
          });
      }

  });

  return consultar_rating;

};

let consultar_ratings_pf = (pId) => {

  let consultar_rating = [];

  let request = $.ajax({
      url: "http://localhost:4000/api/listar_ratings_usuario_pf",
      method: 'POST',
      async: false,
      data: {
        userid: pId
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });

  request.done(function (response) {

      if (response.success) {
          consultar_rating = response.ratings;
      } else {
          consultar_rating = response.ratings;
          swal.fire({
              type: 'error',
              title: 'Error',
              text: response.msj
          });
      }

  });

  return consultar_rating;

};

let eliminar_evaluacion = (pId) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/eliminar_evaluacion",
      method: "POST",
      data: {
          _id: pId
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
      swal.fire({
          type: 'success',
          title: 'Evaluacion eliminada',
          text: `Gracias, la evaluacion fue eliminada correctamente`
      }).then(function () {
          window.location = "/public/padrefamilia/listar_citas_pf.html";
      });
  });

  request.fail(function (jqXHR, textStatus) {
      swal.fire({
          type: 'error',
          title: 'La evaluacion no fue eliminada',
          text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
  });

};

