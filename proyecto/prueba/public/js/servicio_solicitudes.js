let listar_solicitudes = () => {
 
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