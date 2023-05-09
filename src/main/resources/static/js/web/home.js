$(document).on("click","#btnempezar",
    function(){
        let usuario = $("#txtusuario").val();
        let password = $("#txtpassword").val();
        $("#rptusuario").text("Usuario : "+usuario);
        $("#rptpassword").text("Contraseña : "+password);
        $("#modalEmpezar").modal("show");

});
