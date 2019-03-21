'use strict';

const input_correo = document.querySelector('#txt_correo');
const input_contrasenna = document.querySelector('#txt_contrasenna');
const boton_iniciar_sesion = document.querySelector('#btn_ingresar');


let validar = () =>{
	let error = false;

	if(input_correo == ''){
		input_correo.style.borderBottom='1px solid red';
		error = true;
	} else {
		input_correo.style.borderBottom='1px solid black';
	}



	if(input_contrasenna == ''){
		input_contrasenna.style.borderBottom='1px solid red';
		error = true;
	} else {
		input_contrasenna.style.borderBottom='1px solid black';
	}


	return error;
};



let obtenerDatos = () =>{
		let	resultadoValidacion = validar();
		if(resultadoValidacion == false){
				let correo = input_correo.value;
				let contrasenna = input_contrasenna.value;

				let validacion_credenciales = validar_credenciales(correo, contrasenna);

				if(validacion_credenciales.success){
						iniciar_sesion(validacion_credenciales.usuario);
				};

		}else{
			swal.fire({
				type: 'warning',
				title: 'El comentario no fue enviado',
				text: 'Por favor revise los campos resaltados'
			});
		}
};

let iniciar_sesion =(pUsuario)=> {
		localStorage.usuario_en_sesion = pUsuario['_id'];
		let tipo_usuario = pUsuario['tipo_usuario'];

		switch (tipo_usuario) {
				case "admin":
						window.location.href='perfil_admin.html';
				break;

				case "centro educativo":
						window.location.href='perfil_centro_educativo.html';
				break;

				case "padre de familia":
						window.location.href='perfil_admin.html';
				break;
		};

};

boton_iniciar_sesion.addEventListener('click' , obtenerDatos);