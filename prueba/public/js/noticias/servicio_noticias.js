
// Validar informacion de campos de formulario

let registrar_noticias = (puserid, ptitulo, pdescripcion, pfecha) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_noticias",
        method: "POST",
        data: {
            userid: puserid,
            titulo: ptitulo,
            descripcion: pdescripcion,
            fecha: pfecha
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La noticia fue registrada',
            text: 'Gracias por registrar una actividad'
        }).then(function() {
            window.location = "listar_noticias.html";
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La noticia no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};


let consultar_noticias = (pId) => {

    let consultar_noticia = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_noticias",
        method: 'POST',
        async: false,
        data: {
            userid : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

    	if (response.success){
    		consultar_noticia = response.noticias;
		}else{
            consultar_noticia = response.noticias;
            swal.fire({
                type: 'error',
                title: 'Error',
                text: response.msj
            });
		}

    });

    return  consultar_noticia;

};


