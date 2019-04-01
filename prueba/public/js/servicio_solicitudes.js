'use strict'

let userid = localStorage.getItem('usuario_en_sesion');
console.log(userid);

let listar_solicitudes = () => {
 
    let lista_solicitudes = [];
  
    let request = $.ajax({
  
      url: "http://localhost:4000/api/listar_ce_pendientes",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
      lista_solicitudes = res.centroe;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return lista_solicitudes;
   
  };

  if (userid != null) {
    usario_loggeado = obtener_usuario_por_id(userid);
    mostrar_datos(usario_loggeado);
  }else{
    window.location.href='index.html';
}