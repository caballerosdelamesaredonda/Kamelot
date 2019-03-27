'use strict';

let registrar_centroe = (pnombre, palias, pclave, pcedula_juridica, ptipo_centro, pnivel_centro, pfoto, pnombre_comercial, pprovincia, pcanton, pdistrito, pdireccion, pfecha_fundacion, preferencia_historia, padjuntar_documentos, ptelefono, pfax, psitio_web, pcuentas_redesso, pcorreo_electronico, pcontacto_nombre, ppapellido, psapellido, pidentificacion, pdepartamento, ptelefono_contacto, pextension_contacto, pcorreo_electronico_contacto, pestado, ptipo_usuario, pfecha_registro) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_ce",
    method: "POST",
    data: {
      nombre : pnombre,
      alias : palias,
      cedula_juridica : pcedula_juridica,
      clave : pclave,
      tipo_centro : ptipo_centro,
      nivel_centro : pnivel_centro,
      foto : pfoto,
      nombre_comercial : pnombre_comercial,
      provincia : pprovincia,
      canton : pcanton,
      distrito: pdistrito,
      direccion: pdireccion,
      fecha_fundacion : pfecha_fundacion,
      referencia_historia : preferencia_historia,
      adjuntar_documentos : padjuntar_documentos,
      telefono : ptelefono,
      fax : pfax,
      sitio_web : psitio_web,
      cuentas_redesso : pcuentas_redesso,
      correo_electronico : pcorreo_electronico,
      contacto_nombre : pcontacto_nombre,
      papellido : ppapellido,
      sapellido : psapellido,
      identificacion : pidentificacion,
      departamento : pdepartamento, 
      telefono_contacto : ptelefono_contacto,
      extension_contacto : pextension_contacto,
      correo_electronico_contacto : pcorreo_electronico_contacto,
      estado : pestado,
      tipo_usuario : ptipo_usuario,
      fecha_registro: pfecha_registro
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El centro educativo ha sido registrado',
      text: 'Gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El centro educativo no ha sido registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_centroe = () => {
 
  let listar_centroe = [];

  let request = $.ajax({

    url: "http://localhost:4000/api/listar_centroe",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    listar_centroe = res.centroe;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return listar_centroe;
 
};

// Validar informacion de campos de formulario

let obtener_usuario_por_id = (pId) =>{
  let usuario=[];
  let request = $.ajax({
      url: "http://localhost:4000/api/buscar_usuario",
      method: 'POST',
      async: false,
      data: {
          _id : pId
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });

  request.done(function (response) {

    if (response.success){
      usuario = response.usuario;
  }else{
          usuario = response;
          swal({
              type: 'error',
              title: 'Error',
              text: response.msj
          });
  }

  });

  return  usuario;
};