'use strict'

let user_admin = localStorage.getItem('usuario_en_sesion');

let listar_activos = () => {
 
    let listar_activos = [];
  
    let request = $.ajax({
  
      url: "http://localhost:4000/api/listar_activos",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
        listar_activos = res.centroe;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return listar_activos;
   
  };

  let traer_rating = (pId) => {

    let traer_rating = [];
  
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: 'POST',
        async: false,
        data: {
          _id: pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    request.done(function (response) {
  
      if (response.success) {
        traer_rating = response.usuario;
      } else {
          consultar_noticia = response.usuario;
          swal.fire({
              type: 'error',
              title: 'Error',
              text: response.msj
          });
      }
  
  });
  
  return traer_rating;
  
  };
  