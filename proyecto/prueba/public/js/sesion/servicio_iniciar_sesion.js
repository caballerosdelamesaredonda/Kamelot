const testUsuario = {
	usuario: 'admin@admin.com',
	contrasenna: 'abc123'
};

const respuestaTest = {
	success: true,
	usuario:{
		_id: 'thisisanid1234567890',
		tipo_usuario: 'admin',
		nombre: 'Alexander'
	}
}

/*let validar_credenciales = (pUsuario, pContrasenna ) =>{
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
					//validacion_exitosa = response.success;
					validacion_exitosa = respuestaTest.success;
					if(validacion_exitosa){
						//usuario = response.usuario;
						usuario = respuestaTest.usuario;
					};
		});
		request.fail(function (jqXHR, textStatus) {
			swal.fire({
				type: 'error',
				title: 'Usuar',
				text: 'Not good try again'
			});
		});

};
*/

let validar_credenciales = (pUsuario, pContrasenna ) =>{
	respuesta ='';

	if(pUsuario == testUsuario.usuario && pContrasenna == testUsuario.contrasenna){
		respuesta = respuestaTest;
	}

	return respuesta;
};
/*
let obtener_usuario_por_id = (pId) =>{
    let usuario='';
    let request = $.ajax({
        url: "http://localhost:4000/api/obtener_usuario",
        method: 'POST',
        data: {
            id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {
        usuario = response;
    });

    return  usuario;
}; */
