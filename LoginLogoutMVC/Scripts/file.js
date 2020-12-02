$(document).ready(function() {
    $("#fileUploader").change(function (evt) {
       
        var hojas = ["IGNORA"];
        
        evt.preventDefault();
        var selectedFile = evt.target.files[0];
       
        $("#nomarchivo").html(evt.target.files[0].name);
        var reader = new FileReader();
        reader.onload = function(event) {
            var data = event.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });
            
            workbook.SheetNames.forEach(function (sheetName) {
                var d="";
                for (var valor of sheetName) {
                    d += valor;
                 
                }
                hojas.push(d);
                console.log(d);
            })
           
           
                ///
                 workbook.SheetNames.forEach(function (sheetName) {
             //   var d = sheetName[0] + sheetName[1] + sheetName[2] + sheetName[3] + sheetName[4] + sheetName[5]+ sheetName[7];
              //  console.log(d);
               // console.log("-----")
                     hojas.shift(); 
                     for (var valor of hojas) {
                       
                         
                         if (confirm("Eligues la hoja:"+valor+"?")) {
                            // if (valor === "Sheet1") {
                              
                                 //
                                 XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                                 var json_object = JSON.stringify(XL_row_object);

                                 //  var x = JSON.parse(XL_row_object);
                                 /*   console.log(json_object);
                                    console.log(JSON.parse(json_object)[0].Color);
                                    console.log(JSON.parse(json_object)[0].Cosas);
                                    console.log(JSON.parse(json_object)[1].Color);
                                    console.log(JSON.parse(json_object)[1].Cosas);
                                    console.log(JSON.parse(json_object)[2].Color);
                                    console.log(JSON.parse(json_object)[2].Cosas);*/
                                // $("#tablaActivos").css("display", "block");
                                 if (true) throw BreakException;
                             //}
                         } else {
                             
                         }
                       

                     }

              //  document.getElementById("jsonObject").innerHTML = json_object;

                //break;
            })
        };

        reader.onerror = function(event) {
            console.error("File could not be read! Code " + event.target.error.code);
        };

        reader.readAsBinaryString(selectedFile);
       // Swal.fire('Opciones')
    });
    //
    $("#Bexcel").click(function () {

        //INICIAR
        Swal.fire(
            'Ingresando a Base de Datos',
        );
        Swal.showLoading();
       
            $.ajax({
                url: "AddExcel",
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({ pStrPermissions: JSON.stringify(XL_row_object) }),
                success: function (response) {

                    $("#actividad").html("");
                    $.each(response, function (i, item) {
                       // alert("XK XKXKXKXKXKXK");
                        if (response[i].mensaje == "Activo registrado correctamente") {
                            $("#actividad").append(`<nav aria-label="breadcrumb" >
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"  style="color:blue">${response[i].placa_Activo}</a></li>
                                <li class="breadcrumb-item"><a href="#" style="color:blue">${response[i].descripcion}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${response[i].mensaje}</li>
                            </ol`);
                        }


                        if (response[i].mensaje == "Problemas al registrar el excel, activo duplicado") {
                            $("#actividad").append(`<nav aria-label="breadcrumb" >
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#" style="color:red">${response[i].placa_Activo}</a></li>
                                <li class="breadcrumb-item"><a href="#" style="color:red">${response[i].descripcion}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${response[i].mensaje}</li>
                            </ol`);
                        } 
                            
                       
                    })
                    Swal.close();
                    ///
                        
                    ///
                },
                error: function (request, status, exception) {
                   ///Cerrar
                    Swal.close();
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {

                if (jqXHR.status === 0) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'Sin conexion: Verifica Internet.',
                        footer: ''
                    })
                     ///Cerrar
                    Swal.close();
                    //   alert('Not connect: Verify Network.');

                } else if (jqXHR.status == 404) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'No se Encuentra la Pagina',
                        footer: ''
                    })
                    Swal.close();
                     ///Cerrar 

                } else if (jqXHR.status == 500) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'Error Interno del Servidor [500].',
                        footer: ''
                    })
                    Swal.close();
                     ///Cerrar 

                } else if (textStatus === 'parsererror') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'Json Fallo',
                        footer: ''
                    })
                    Swal.close();
                     ///Cerrar 


                } else if (textStatus === 'timeout') {

                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'Tiempo espera agotado',
                        footer: ''
                    })
                    Swal.close();
                     ///Cerrar 

                } else if (textStatus === 'abort') {

                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'Se Aborto Operacion',
                        footer: ''
                    })
                     ///Cerrar 
                    Swal.close();
                } else {

                    Swal.fire({
                        icon: 'error',
                        title: 'Problemas...',
                        text: 'Uncaught Error: ' + jqXHR.responseText,
                        footer: ''
                    })
                    Swal.close();
                     ///Cerrar 
                }

            });
        
        //
    });
    
    //
   

});