
'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_alias = document.querySelector('#txt_alias');
const input_clave = document.querySelector('#pass_clave');
const input_cedulaj = document.querySelector('#txt_cedulaj');
const slt_tipo_centro = document.querySelector('#slt_tipo_centro');
const slt_nivel_centro = document.querySelector('#slt_nivel_centro');
const input_foto = document.querySelector('#input_foto');
const input_nombre_comercial = document.querySelector('#input_nombre_comercial');
const slt_provincias = document.querySelector('#slt_provincias');
const slt_cantones = document.querySelector('#slt_cantones');
const slt_distritos = document.querySelector('#slt_distritos');
const input_direccion = document.querySelector('#txt_direccion');
const input_fecha = document.querySelector('#fecha_fundacion');
const input_referencia = document.querySelector('#txt_referencia');
const input_documento = document.querySelector('#txt_documento');
const input_telefono = document.querySelector('#txt_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_web = document.querySelector('#txt_web');
const input_redes = document.querySelector('#txt_redesso');
const input_correo = document.querySelector('#txt_correo');
const input_contacto_nombre = document.querySelector('#txt_contacto_nombre');
const input_contacto_papellido = document.querySelector('#txt_contacto_papellido');
const input_contacto_sapellido = document.querySelector('#txt_contacto_sapellido');
const input_contacto_id = document.querySelector('#txt_contacto_id');
const input_contacto_departamento = document.querySelector('#txt_contacto_departamento');
const input_contacto_telefono = document.querySelector('#txt_contacto_telefono');
const input_contacto_extension = document.querySelector('#txt_contacto_extension');
const input_contacto_correo = document.querySelector('#txt_contacto_correo');
const input_contacto_foto = document.querySelector('#txt_contacto_foto');
const boton_registrar = document.querySelector('#btn_enviar');


let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_alias.value == '') {
        error = true;
        input_alias.classList.add('error_input');
    } else {
        input_alias.classList.remove('error_input');
    }

    if (input_clave.value == '') {
        error = true;
        input_alias.classList.add('error_input');
    } else {
        input_alias.classList.remove('error_input');
    }

    if (input_cedulaj.value == '') {
        error = true;
        input_cedulaj.classList.add('error_input');
    } else {
        input_cedulaj.classList.remove('error_input');
    }

    if (slt_tipo_centro.value == '') {
        error = true;
        slt_tipo_centro.classList.add('error_input');
    } else {
        slt_tipo_centro.classList.remove('error_input');
    }

    if (slt_nivel_centro.value == '') {
        error = true;
        slt_nivel_centro.classList.add('error_input');
    } else {
        slt_nivel_centro.classList.remove('error_input');
    }

    if (input_nombre_comercial.value == '') {
        error = true;
        input_nombre_comercial.classList.add('error_input');
    } else {
        input_nombre_comercial.classList.remove('error_input');
    }

    if (slt_provincias.value == '') {
        error = true;
        slt_provincias.classList.add('error_input');
    } else {
        slt_provincias.classList.remove('error_input');
    }
    
    if (slt_cantones.value == '') {
        error = true;
        slt_cantones.classList.add('error_input');
    } else {
        slt_cantones.classList.remove('error_input');
    }

    if (slt_distritos.value == '') {
        error = true;
        slt_distritos.classList.add('error_input');
    } else {
        slt_distritos.classList.remove('error_input');
    }

    
    if (input_direccion.value == '') {
        error = true;
        input_direccion.classList.add('error_input');
    } else {
        input_direccion.classList.remove('error_input');
    }

    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    if (input_referencia.value == '') {
        error = true;
        input_referencia.classList.add('error_input');
    } else {
        input_referencia.classList.remove('error_input');
    }

    if (input_documento.value == '') {
        error = true;
        input_documento.classList.add('error_input');
    } else {
        input_documento.classList.remove('error_input');
    }
    
    if (input_telefono.value == '') {
        error = true;
        input_telefono.classList.add('error_input');
    } else {
        input_telefono.classList.remove('error_input');
    }

    if (input_fax.value == '') {
        error = true;
        input_fax.classList.add('error_input');
    } else {
        input_fax.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (input_contacto_nombre.value == '') {
        error = true;
        input_contacto_nombre.classList.add('error_input');
    } else {
        input_contacto_nombre.classList.remove('error_input');
    }

    if (input_contacto_papellido.value == '') {
        error = true;
        input_contacto_papellido.classList.add('error_input');
    } else {
        input_contacto_papellido.classList.remove('error_input');
    }

    if (input_contacto_sapellido.value == '') {
        error = true;
        input_contacto_sapellido.classList.add('error_input');
    } else {
        input_contacto_sapellido.classList.remove('error_input');
    }

    if (input_contacto_id.value == '') {
        error = true;
        input_contacto_id.classList.add('error_input');
    } else {
        input_contacto_id.classList.remove('error_input');
    }

    if (input_contacto_departamento.value == '') {
        error = true;
        input_contacto_departamento.classList.add('error_input');
    } else {
        input_contacto_departamento.classList.remove('error_input');
    }

    if (input_contacto_telefono.value == '') {
        error = true;
        input_contacto_telefono.classList.add('error_input');
    } else {
        input_contacto_telefono.classList.remove('error_input');
    }

    if (input_contacto_correo.value == '') {
        error = true;
        input_contacto_correo.classList.add('error_input');
    } else {
        input_contacto_correo.classList.remove('error_input');
    }

    if (input_contacto_foto.value == '') {
        error = true;
        input_contacto_foto.classList.add('error_input');
    } else {
        input_contacto_foto.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {

        let nombre = input_nombre.value;
        let alias = input_alias.value;
        let clave = input_clave.value;
        let cedula_juridica = input_cedulaj.value;
        let tipo_centro = slt_tipo_centro.value;
        let nivel_centro = slt_nivel_centro.value;
        let foto = input_foto.value;
        let nombre_comercial = input_nombre_comercial.value;
        let provincia = slt_provincias.value;
        let canton = slt_cantones.value;
        let distrito = slt_distritos.value;
        let direccion = input_direccion.value;
        let fecha_fundacion = input_fecha.value;
        let referencia_historia = input_referencia.value;
        let adjuntar_documentos = input_documento.value;
        let telefono = input_telefono.value;
        let fax = input_fax.value;
        let sitio_web = input_web.value;
        let cuentas_redesso = input_redes.value;
        let correo_electronico = input_correo.value;
        let contacto_nombre = input_contacto_nombre.value;
        let contacto_papellido = input_contacto_papellido.value;
        let contacto_sapellido = input_contacto_sapellido.value;
        let identificacion = input_contacto_id.value;
        let departamento = input_contacto_departamento.value;
        let telefono_contacto = input_contacto_telefono.value;
        let extension_contacto = input_contacto_extension.value;
        let correo_electronico_contacto  = input_contacto_correo.value;
        let foto_contacto = input_contacto_foto.value;

        registrar_centroe(nombre, alias, clave, cedula_juridica, tipo_centro, nivel_centro, foto, nombre_comercial, provincia, canton, distrito, direccion, fecha_fundacion, referencia_historia, adjuntar_documentos, telefono, fax, sitio_web, cuentas_redesso, correo_electronico, contacto_nombre, contacto_papellido, contacto_sapellido, identificacion, departamento, telefono_contacto, extension_contacto, correo_electronico_contacto, foto_contacto);
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'El centro educativo no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};
boton_registrar.addEventListener('click', obtener_datos);