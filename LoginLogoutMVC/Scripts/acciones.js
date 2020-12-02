$(document).ready(function () {
 
   
    $("#salir").click(function() {


    });
    $("#iinicio").click(function() {
        $("#iinicio a").addClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#titulo").html('<h1 class="h2" id="titulo">Inicio</h1>');
        $("#inicio").css("display", "block");
        $("#idFormActivo").css("display", "none");
        $("#boletas").css("display", "none");
        $("#consultas").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#reportes").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#regiones").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "none");
    });
    $("#iactivos").click(function() {
        $("#iactivos a").addClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#titulo").html('<h1 class="h2" id="titulo">Activos</h1>');
        $("#idFormActivo").css("display", "block");
        $("#inicio").css("display", "none");
        $("#boletas").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#consultas").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#reportes").css("display", "none");
        $("#regiones").css("display", "none");
        $("#bsubiri").css("display", "block");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri4").css("display", "none");
        $("#bsubiri3").css("display", "none");
    });
    $("#iboletas").click(function() {
        $("#iboletas a").addClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#titulo").html('<h1 class="h2" id="titulo">Boletas</h1>');
        $("#boletas").css("display", "block");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#consultas").css("display", "none");
        $("#reportes").css("display", "none");
        $("#regiones").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "block");
        //


        setTimeout(function() {
            $("#bprestamos").hide().fadeIn();
            $("#btraslado").hide().fadeIn("slow");
            $("#breparacion").hide().fadeIn(2000);
            $("#bdesecho").hide().fadeIn("slow");
            $("#basignacion").hide().fadeIn(2000);
        }, 500);




        //
    });
    $("#iusuarios").click(function () {
     
        $("#iusuarios a").addClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#titulo").html('<h1 class="h2" id="titulo">Usuarios</h1>');
        $("#usuarios").css("display", "block");
        $("#boletas").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#reportes").css("display", "none");
        $("#regiones").css("display", "none");
        $("#consultas").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "none");
    });
    $("#ireportes").click(function() {
        $("#ireportes a").addClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#titulo").html('<h1 class="h2" id="titulo">Instrucciones</h1>');
        $("#reportes").css("display", "block");
        $("#boletas").css("display", "none");
        $("#consultas").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#regiones").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "none");
    });
    $("#datosu").click(function () {
        var tipo = $("#rolU").val();
        if (tipo == '1') {
            tipo = "Admistrador";
        } else {
            tipo = "Consultor";
        }
        Swal.fire({
            icon: 'info',
            title: $("#correoU").val(),
            text: '',
            footer: `<h3>${tipo}</h3>`
        });
    });
    $("#iregiones").click(function() {
        $("#iregiones a").addClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');

        $("#titulo").html('<h1 class="h2" id="titulo">Administracion</h1>');
        $("#regiones").css("display", "block");
        $("#reportes").css("display", "none");
        $("#consultas").css("display", "none");
        $("#boletas").css("display", "none");
        $("#consultas").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "block");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "none");
        
    });
    $("#iauditoria").click(function() {
        $("#iauditoria a").addClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');

        $("#titulo").html('<h1 class="h2" id="titulo">Auditoría</h1>');
        $("#auditoria").css("display", "block");
        $("#regiones").css("display", "none");
        $("#reportes").css("display", "none");
        $("#consultas").css("display", "none");
        $("#boletas").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#bodegas").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "none");
    });
    $("#ibodega").click(function() {
        $("#ibodega a").addClass('active jv');
        $("#iconsultas a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');

        $("#titulo").html('<h1 class="h2" id="titulo">Bodegas</h1>');
        $("#bodegas").css("display", "block");
        $("#consultas").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#regiones").css("display", "none");
        $("#reportes").css("display", "none");
        $("#boletas").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri3").css("display", "none");
        $("#bsubiri4").css("display", "none");
    });

    $("#iconsultas").click(function () {
        $("#iconsultas a").addClass('active jv');
        $("#ibodega a").removeClass('active jv');
        $("#iauditoria a").removeClass('active jv');
        $("#iregiones a").removeClass('active jv');
        $("#iinicio a").removeClass('active jv');
        $("#iactivos a").removeClass('active jv');
        $("#iboletas a").removeClass('active jv');
        $("#iusuarios a").removeClass('active jv');
        $("#ireportes a").removeClass('active jv');
        $("#titulo").html('<h1 class="h2" id="titulo">Consultas</h1>');

        $("#consultas").css("display", "block");
        $("#bsubiri3").css("display", "block");
        $("#bodegas").css("display", "none");
        $("#auditoria").css("display", "none");
        $("#regiones").css("display", "none");
        $("#reportes").css("display", "none");
        $("#boletas").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#inicio").css("display", "none");
        $("#usuarios").css("display", "none");
        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#editaractivo").css("display", "none");
        $("#bsubiri").css("display", "none");
        $("#bsubiri2").css("display", "none");
        $("#bsubiri4").css("display", "none");
        
    });

   
    

    $("#bborrar").click(function () {

        $("#eliminaractivo").css("display", "block");
        $("#editaractivo").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#file").css("display", "none");

    });
    
    $("#bagregar").click(function () {

        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#idFormActivo").css("display", "block");
        $("#editaractivo").css("display", "none");

    });
    
    $("#beditar").click(function () {

        $("#file").css("display", "none");
        $("#eliminaractivo").css("display", "none");
        $("#idFormActivo").css("display", "none");
        $("#editaractivo").css("display", "block");

    });

    $("#inicio").css("display", "block");
    $("#idFormActivo").css("display", "none");
    $("#boletas").css("display", "none");
    $("#usuarios").css("display", "none");
    $("#consultas").css("display", "none");
    $("#reportes").css("display", "none");
    $("#regiones").css("display", "none");
    $("#auditoria").css("display", "none");
    $("#bodegas").css("display", "none");
    //  $("#bsubir").css("display", "none");
    $("#bsubiri").css("display", "none");
    $("#file").css("display", "none");
    $("#eliminaractivo").css("display", "none");
    $("#editaractivo").css("display", "none");

   

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        //All the File APIs are supported.
    } else {
        alert('Api File no es soportada en este navegador,actualiza o busca uno moderno');
    }

});
function subirdatos() {
    $("#idFormActivo").css("display", "none");
    $("#eliminaractivo").css("display", "none");
    $("#file").css("display", "block");
    $("#auditoria").css("display", "none");
    $("#editaractivo").css("display", "none");

}