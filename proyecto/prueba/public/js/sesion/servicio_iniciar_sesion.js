'use strict';

let validar_credenciales = (pUsuario, pContrasenna ) =>{
		let usuario='';
		let request = $.ajax({
			url: "http://localhost:4000/api/validar_sesion",
			method: "POST",
			data: {
				usuario : pUsuario,
				contrasenna :  pContrasenna
			},
			dataType: "json",
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		});

		request.done(function (response) {
					let validacion_exitosa = response.success;

					if(validacion_exitosa){
						usuario = response;
					}else{
						usuario = response;
                        swal.fire({
                            type: 'error',
                            title: 'Error',
                            text: response.msj
                        });
					};
		});
		request.fail(function (jqXHR, textStatus) {
			swal.fire({
				type: 'error',
				title: 'Error buscando el usuario',
				text: 'Revisa tu conexión e intenta de nuevo'
			});
		});

		return usuario;

};

let obtener_usuario_por_id = (pId) =>{
    let usuario='';
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: 'POST',
        data: {
            id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

    	if (response.success){
    		usuario = response;
		}else{
            usuario = response;
            swal.fire({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
		}

    });

    return  usuario;
};
