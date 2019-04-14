'use strict';

let userPerfilCentroAvatar = localStorage.getItem('usuario_en_sesion');
let usuario_loggeado_avatar = [];

//Funcion para colocar la imagen de avatar en el div con el id de avatar_img
let mostrar_avatar = (pUsuarioLoggeado) =>{
    $("#avatar_img").attr("src",usuario_loggeado_avatar.foto);
}

if (userPerfilCentroAvatar != null) {
    usuario_loggeado_avatar = obtener_usuario_por_id_centro(userPerfilCentroAvatar);
    mostrar_avatar(usuario_loggeado_avatar);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    window.location.href='index.html';
}





