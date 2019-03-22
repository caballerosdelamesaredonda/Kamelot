'use strict';

let validar_credenciales = (pCorreo, pClave ) =>{
		let usuario='';
		let request = $.ajax({
			url: "http://localhost:4000/api/validar_sesion",
			method: "POST",
            async: false,
            dataType: "json",
			data: {
                correo_electronico : pCorreo,
				clave :  pClave
			},
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		});

		request.done(function (response) {
					let validacion_exitosa = response.success;

					if(validacion_exitosa){
						usuario = response;
					}else{
						usuario = response;
                        swal({
                            title: "Error",
                            text: response.msj,
                            icon: "error",
                            button: "ok"
                        });
					};
		});
		request.fail(function (jqXHR, textStatus) {
			swal({
				title: "Error buscando el usuario",
				text: "Revisa tu conexión e intenta de nuevo",
                icon: "error",
                button: "ok"
			});
		});

		return usuario;

};

let obtener_usuario_por_id = (pId) =>{
    let usuario='';
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: 'POST',
        async: false,
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
            swal({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
		}

    });

    return  usuario;
};
