'use strict';

const input_correo = document.querySelector('#txt_correo');
const input_contrasenna = document.querySelector('#txt_contrasenna');
const boton_iniciar_sesion = document.querySelector('#btn_ingresar');


let validar = () =>{
	let error = false;

	if(input_correo == ''){
		input_correo.classList.add('error_input');
		error = true;
	} else {
		input_correo.classList.add('error_input');
	}



	if(input_contrasenna == ''){
		input_contrasenna.classList.add('error_input');
		error = true;
	} else {
		input_contrasenna.classList.add('error_input');
	}


	return error;
};



let obtenerDatos = () =>{
		let	resultadoValidacion = validar();
		if(resultadoValidacion === false){
				let correo = input_correo.value;
				let contrasenna = input_contrasenna.value;

				let validacion_credenciales = validar_credenciales(correo, contrasenna);

				if(validacion_credenciales.success){
						iniciar_sesion(validacion_credenciales.usuario);
				}

		}else{
			swal({
				type: 'warning',
				title: 'Campos vacíos',
				text: 'Por favor revise los campos resaltados'
			});
		}
};

let iniciar_sesion =(pUsuario)=> {
		localStorage.usuario_en_sesion = pUsuario['_id'];
		let tipo_usuario = pUsuario['tipo_usuario'];

		switch (tipo_usuario) {
				case "AD":
						window.location.href='perfil_admin.html';
				break;

				case "CE":
						window.location.href='perfil_centroedu.html';
				break;

				case "PF":
						window.location.href='/public/padrefamilia/perfil_padre_familia.html';
				break;
		};

};

boton_iniciar_sesion.addEventListener('click' , obtenerDatos);
