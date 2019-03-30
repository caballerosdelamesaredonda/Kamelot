let busqueda = 'her';


let resultado = usuarios.filter(usuario =>(busqueda.length > 0 ? usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) : usuario));
