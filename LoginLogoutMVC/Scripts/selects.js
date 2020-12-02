$(document).ready(function () {
    ///
    var tipo = $("#rolU").val();
    if (tipo == '2') {
        $("#iactivos").css("display", "none");
        $("#iboletas").css("display", "none");
        $("#iusuarios").css("display", "none");
        $("#iregiones").css("display", "none");
        $("#ireportes").css("display", "none");
    }
    ///
    var quien = "Si" + $("#Unom").val();
    var deje = localStorage.getItem("Asigno");
    if (deje == quien) {
        Swal.fire(
            'No Haz terminado de Asignar Activos',
            'Puedes Asignarlos?',
            'question'
        )

        $("#boletas").css("display", "block");
        $("#inicio").css("display", "none");
        $("#divasignacion").css("display", "block");
        $("#una").css("display", "none");
        $("#dos").css("display", "block");
        $("#numboletaAsigna").val(localStorage.getItem("oficio"));
        ///
        var datos = localStorage.getItem("activo2");;
        var tamagno;
        var array = ["No"];
        if (datos) {
            tamagno = datos.length;
            if (tamagno > 1) {
                $("#activosrg").html("");
                $("#activosrg").append(`<option selected> Placas </option>`);
                array.pop();
                var array = datos.split("-");
                //array.forEach(element => alert(element));
                $.each(array, function (key, value) {
                    // alert(key + ": " + value);

                    ///
                    $.ajax({

                        type: "POST",
                        url: "LocalActivos",
                        data: { id: value }, // serializes the form's elements.
                        success: function (data) {

                            $("#activosrg").append(`<option value=${data[0].id_Activo}>${data[0].placa_Activo}</option >`);
                        }
                    });


                    ///
                });
            } else {
               //--
                array.push(datos);
                //  alert("array" + datos);
                //console.log(array);
                $("#activosrg").html("");
                $("#activosrg").append(`<option selected> Placas </option>`);

                $.each(array, function (key, value) {
                    // alert(key + ": " + value);

                    ///
                    $.ajax({

                        type: "POST",
                        url: "LocalActivos",
                        data: { id: value }, // serializes the form's elements.
                        success: function (data) {

                            $("#activosrg").append(`<option value=${data[0].id_Activo}>${data[0].placa_Activo}</option >`);
                        }
                    });
                });

            
                //--
            }

        } else {

        }


        ///
    }
    ///
    $.ajax({
        type: "POST",
        url: "CargarFamilia",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t21').empty();
            $("#t21").append(`<tr class="fuentetext"><th scope='row'>#Id</th><td>Nombre Tipo</td></tr>`)
            $.each(data, function (i, item) {
                $("#t21").append(`<tr><th scope='row'>${data[i].id_Familia}</th><td>${data[i].nombre_Familia}</td></tr>`)
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///
    $.ajax({
        type: "POST",
        url: "CargaUsers",
        data: null, // serializes the form's elements.
        success: function (data) {

            $("#deluser").html(`<option value="0" selected> Usuario Existentes </option>`);
            $.each(data, function (i, item) {
                $("#deluser").append(`<option  value="${data[i].id_Usuario}">${data[i].nombre_Usuario}</option>`);
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ////
    $.ajax({
        type: "POST",
        url: "CargarTablaOficio",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t20').empty();
            $("#t20").append(`<tr class="fuentetext"><th scope='row'>#Oficio</th><td>Oficina Destino</td><td>Placa</td><td>Tipo Equipo</td><td>Modelo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t20").append(`<tr><th scope='row'>${data[i].numero_Oficio}</th><td>${data[i].nombre_Oficina}</td><td>${data[i].numero_activo}</td><td>${data[i].Tipo_Equipo}</td><td>${data[i].Modelo}</td><td>${data[i].Descripcion}</td></tr>`)
            })
            
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });    /////
    $.ajax({
        type: "POST",
        url: "CargarTablaDesecho",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t19').empty();
            $("#t19").append(`<tr class="fuentetext"><th scope='row'>Fecha Desecho</th><td>#Boleta</td><td>Observaciones</td><td>Placa</td><td>Descripcion</td><td>Desechado Por</td></tr>`)
            $.each(data, function (i, item) {
                $("#t19").append(`<tr><th scope='row'>${data[i].fecha_BodegaTotalConsultas}</th><td>${data[i].numeroBoleta}</td><td>${data[i].observaciones_BodegaTotalConsultas}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td><td>${data[i].nombre_Usuario}</td></tr>`)
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ////
    $.ajax({
        type: "POST",
        url: "CargarTablaModelo",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t18').empty();
            $("#t18").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Nombre Modelo</td></tr>`)
            $.each(data, function (i, item) {
                $("#t18").append(`<tr><th scope='row'>${data[i].id_Modelo}</th><td>${data[i].nombre_modelo}</td></tr>`)
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///
    $.ajax({
        type: "POST",
        url: "CargarTablaDesechoFinal",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t17').empty();
            $("#t17").append(`<tr class="fuentetext"><th scope='row'>Fecha Desecho</th><td>Observaciones</td><td>Boleta	</td><td>Lo Desecho</td><td>Placa Activo</td></tr>`)
            $.each(data, function (i, item) {
                $("#t17").append(`<tr><th scope='row'>${data[i].fecha_BodegaDesechoTemporal}</th><td>${data[i].observaciones_BodegaDesechoTemporal}</td><td>${data[i].numeroBoleta}</td><td>${data[i].nombre_Usuario}</td><td>${data[i].placa_Activo}</td></tr>`)
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///
    $.ajax({
        type: "POST",
        url: "CargaSeguro",
        data: null, // serializes the form's elements.
        success: function (data) {

            
            $.each(data, function (i, item) {
                //alert("ASA");
                $("#seguroseleccionado").append(`<option value="${data[i].id_seguro}">${data[i].nombre_seguro}</option>`);
            });
            
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///
    $.ajax({
        type: "POST",
        url: "CargarTablaReparacion",
        data: null, // serializes the form's elements.
        success: function (data) {
        
            $('table > #t15').empty();
            $("#t15").append(`<tr class="fuentetext"><th scope='row'>#Boleta</th><td>Fecha Reparacion</td><td>Reparacion</td><td>Placa Activo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t15").append(`<tr><th scope='row'>${data[i].numeroboleta}</th><td>${data[i].FechaIngreso}</td><td>${data[i].ObservacionReparacion}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td></tr>`)
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///
    $.ajax({
        type: "POST",
        url: "CargarTablaReparado",
        data: null, // serializes the form's elements.
        success: function (data) {
            
            $('table > #t16').empty();
            $("#t16").append(`<tr class="fuentetext"><th scope='row'>#Boleta</th><td>Fecha Reparacion</td><td>Reparacion</td><td>Placa Activo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t16").append(`<tr><th scope='row'>${data[i].numeroboleta}</th><td>${data[i].Fecha_Reparacion}</td><td>${data[i].Reparacion}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td></tr>`)
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///
    $.ajax({
        type: "POST",
        url: "Tabla11All",
        data: null, // serializes the form's elements.
        success: function (data) {
            $('table > #t11').empty();
            $("#t11").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Coordinador</td><td>Nombre</td><td>Telefono</td><td>Correo</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t11").append(`<tr><th scope='row'>${data[i].id_Oficina}</th><td>${data[i].coordinador_Oficina}</td><td>${data[i].nombre_Oficina}</td><td>${data[i].telefono_Oficina}</td><td>${data[i].correo_Oficina}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });

    $.ajax({
        type: "POST",
        url: "Tabla10All",
        data: null, // serializes the form's elements.
        success: function (data) {
            $('table > #t10').empty();
            $("#t10").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Nombre</td><td>Telefono</td><td>Correo</td><td>Observaciones</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t10").append(`<tr><th scope='row'>${data[i].id_Proveedor}</th><td>${data[i].nombre_Proveedor}</td><td>${data[i].telefono_Proveedor}</td><td>${data[i].correo_Proveedor}</td><td>${data[i].observaciones_Proveedor}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });

    $.ajax({
        type: "POST",
        url: "Tabla9All",
        data: null, // serializes the form's elements.
        success: function (data) {
            $('table > #t9').empty();
            $("#t9").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Empresa</td><td>Nombre Seguro</td><td>Descripcion</td><td>Correo</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t9").append(`<tr><th scope='row'>${data[i].id_aseguramiento}</th><td>${data[i].empresa_seguro}</td><td>${data[i].nombre_seguro}</td><td>${data[i].descripcion_seguro}</td><td>${data[i].correo_seguro}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });


    ////
    $.ajax({
        type: "POST",
        url: "Tabla8All",
        data: null, // serializes the form's elements.
        success: function (data) {
            $('table > #t8').empty();
            $("#t8").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Nombre Marca</td><td>Nombre Modelo</td><td>Nombre Familia</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t8").append(`<tr><th scope='row'>${data[i].Id_Marca}</th><td>${data[i].nombre_Marca}</td><td>${data[i].nombre_Modelo}</td><td>${data[i].nombre_Familia}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });

    ///
    $.ajax({
        type: "POST",
        url: "Tabla1All",
        data:null, // serializes the form's elements.
        success: function (data) {
            $('table > #t1').empty();
            $("#t1").append(`<tr class="fuentetext"><th scope='row'>Placa Activo</th><td>Ubicacion</td><td>Descripcion</td><td>Licitacion</td><td>Seguro</td><td>Proveedor</td><td>Estado</td><td>Precio</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t1").append(`<tr><th scope='row'>${data[i].placa_Activo}</th><td>${data[i].ubicacion}</td><td>${data[i].descripcion}</td><td>${data[i].licitacion}</td><td>${data[i].seguro}</td><td>${data[i].proveedor}</td><td>${data[i].estado}</td><td>${data[i].precio_activo}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //
    $.ajax({
        type: "POST",
        url: "Tabla2All",
        data:null, // serializes the form's elements.
        success: function (data) {
          


            $('table > #t2').empty();
            $("#t2").append(`<tr  class="fuentetext"><th scope='row'>Plaza</th><td>Nombre</td><td>Apellido</td><td>Nombre Oficina</td><td>Correo Funcionario</td><td>Puesto</td></tr>`);
            $.each(data, function (i, item) {
                $("#t2").append(`<tr><th scope='row'>${data[i].plaza}</th><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].oficina}</td><td>${data[i].correo}</td><td>${data[i].puesto}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })
            
            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //
    $.ajax({
        type: "POST",
        url: "Tabla3All",
        data: null, // serializes the form's elements.
        success: function (data) {
            $('table > #t3').empty();
            $("#t3").append(`<tr  class="fuentetext"><th scope='row'>Fecha</th><td>Movimientos</td><td>	Realizado por</td><td>Descripcion</td><td>Placa</td></tr>`);
            $.each(data, function (i, item) {
                $("#t3").append(`<tr><th scope='row'>${data[i].fecha}</th><td>${data[i].movimientos}</td><td>${data[i].usuario}</td><td>${data[i].activo}</td><td>${data[i].placaactivo}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //

        $.ajax({
            type: "POST",
            url: "Tabla4All",
            data:null, // serializes the form's elements.
            success: function (data) {
                $('table > #t4').empty();
                $("#t4").append(`<tr class="fuentetext"><th scope='row'>Nombre</th><td>Apellidos</td><td>Correo</td><td>Rol</td></tr>`);
                $.each(data, function (i, item) {
                    $("#t4").append(`<tr><th scope='row'>${data[i].nombre_usuario}</th><td>${data[i].apellido_usuario}</td><td>${data[i].correo}</td><td>${data[i].rol}</td></tr>`);
                })
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status === 0) {

                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'Sin conexion: Verifica Internet.',
                    footer: ''
                })

                //   alert('Not connect: Verify Network.');

            } else if (jqXHR.status == 404) {

                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'No se Encuentra la Pagina',
                    footer: ''
                })


            } else if (jqXHR.status == 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'Error Interno del Servidor [500].',
                    footer: ''
                })


            } else if (textStatus === 'parsererror') {
                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'Json Fallo',
                    footer: ''
                })



            } else if (textStatus === 'timeout') {

                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'Tiempo espera agotado',
                    footer: ''
                })


            } else if (textStatus === 'abort') {

                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'Se Aborto Operacion',
                    footer: ''
                })


            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Problemas...',
                    text: 'Uncaught Error: ' + jqXHR.responseText,
                    footer: ''
                })


            }

        });
    //
    $.ajax({
        type: "POST",
        url: "Tabla5All",
        data:null, // serializes the form's elements.
        success: function (data) {

            $('table > #t5').empty();
            $("#t5").append(`<tr class="fuentetext"><th scope='row'>Fecha Prestamo</th><td>#Boleta</td><td>Oficina Destino</td><td>Activo Placa</td><td>Funcionario</td></tr>`);
            $.each(data, function (i, item) {
                $("#t5").append(`<tr><th scope='row'>${data[i].fecha}</th><td>${data[i].boleta}</td><td>${data[i].destino}</td><td>${data[i].activoplaca}</td><td>${data[i].funcionario}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //

    $.ajax({
        type: "POST",
        url: "Tabla6All",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t6').empty();

            $.each(data, function (i, item) {
                if (i == 0) {
                    $("#t6").append(`<tr class="fuentetext"><th scope='row'>Nombre</th><td>Telefono</td><td>Correo</td><td>Direccion</td><td>Region</td></tr>`);
                }
                $("#t6").append(`<tr><th scope='row'>${data[i].Nombre}</th><td>${data[i].telefono}</td><td>${data[i].correo}</td><td>${data[i].direccion}</td><td>${data[i].region}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //
    $.ajax({
        type: "POST",
        url: "Tabla7All",
        data:null, // serializes the form's elements.
        success: function (data) {


            $('table > #t7').empty();
            $("#t7").append(`<tr class="fuentetext"><th scope='row'>Fecha Asignacion</th><td>Descripcion</td><td>Placa</td><td>Plaza Funcionario</td><td>Funcionario</td><td>Apellido</td><td>Asignado por</td></tr>`);
            $.each(data, function (i, item) {
                $("#t7").append(`<tr><th scope='row'>${data[i].fecha_asignacion}</th><td>${data[i].descripcion}</td><td>${data[i].placa}</td><td>${data[i].plaza_Funcionario}</td><td>${data[i].nombre_Funcionario}</td><td>${data[i].apellido_Funcionario}</td><td>${data[i].nombre_Usuario}</td></tr>`);
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
//$("#addproveeactivo").change(function () {
    $.ajax({
        type: "GET",
        url: "SELECTProveedor",
        data:null, // 
        success: function (data) {
         
            $("#addproveeactivo").html("");
            $("#delproveedor").html("");
            $("#proveedorexist").html("");
            

            
            $.each(data, function (i, item) {

                $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#delproveedor").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#proveedorexist").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#selectmodeloproveedor").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                
            })
          
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    ///stipoarticulo
    $.ajax({
        type: "GET",
        url: "SELECTFamilia",
        data: null, // 
        success: function (data) {
           
           
            $("#stipoarticulo").append(`<option selected >Tipos Existentes</option>`);
            $("#cargarasiganfamilia").html("");
            $("#delfamilia").html("");
            $.each(data, function (i, item) {

                $("#cargarasiganfamilia").append(`<option value="${data[i].id_Familia}">${data[i].nombre_Familia}</option>`);
                $("#stipoarticulo").append(`<option value="${data[i].id_Familia}">${data[i].nombre_Familia}</option>`);
                $("#delfamilia").append(`<option value="${data[i].id_Familia}">${data[i].nombre_Familia}</option>`);
                $("#selectmodelofamilia").append(`<option value="${data[i].id_Familia}">${data[i].nombre_Familia}</option>`);
                $("#cargarasiganfamiliaprestamo").append(`<option value="${data[i].id_Familia}">${data[i].nombre_Familia}</option>`);
                $("#tbuscarfamilia").append(`<option value="${data[i].id_Familia}">${data[i].nombre_Familia}</option>`);
                
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    // ubicabodega
    $.ajax({
        type: "GET",
        url: "SELECTBodega",
        data: null, // 
        success: function (data) {

            $("#ubicabodega").html("");
            $("#ofiexistorigen").html("");
            $.each(data, function (i, item) {

                $("#ubicabodega").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
                $("#ofiexistorigen").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
                
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    // delmarca
    $.ajax({
        type: "GET",
        url: "SELECTMarca",
        data: null, // 
        success: function (data) {

            $("#delmarca").html("");
            $("#marcaexist").html("");
            
            $.each(data, function (i, item) {

                $("#delmarca").append(`<option value="${data[i].id_MarcaArticulo}">${data[i].nombre_MarcaArticulo}</option>`);
                $("#marcaexist").append(`<option value="${data[i].id_MarcaArticulo}">${data[i].nombre_MarcaArticulo}</option>`);
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    // delmodelo
    $.ajax({
        type: "GET",
        url: "SELECTModelo",
        data: null, // 
        success: function (data) {

            $("#delmodelo").html("");
            $.each(data, function (i, item) {

                $("#delmodelo").append(`<option value="${data[i].id_modelo}">${data[i].nombre_modelo}</option>`);
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //delips
    $.ajax({
        type: "GET",
        url: "SELECTIps",
        data: null, // 
        success: function (data) {

         //   $("#delips").html("");
           // $("#ipequipo").html("");
            
            $.each(data, function (i, item) {

              //  $("#delips").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);

                //$("#ipequipo").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);
                
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
    //addregionoficina
    //delregion
    $.ajax({
        type: "GET",
        url: "SELECTRegion",
        data: null, // 
        success: function (data) {

            $("#delregion").html("");
            $("#addregionoficina").html("");
            $("#regiondestinofuncionario").html("");
            
            $("#addregionuip").html("");
            
            $("#addregionprestamo").html("");
            $("#addregionui").html("");
            $("#addregionuit").html("");
            $("#tbuscarxregion").html("");
            
            $.each(data, function (i, item) {

                $("#delregion").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionoficina").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionuip").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionui").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionuit").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
              ///  $("#ofiexistorigen").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#ofiexistdestino").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#tbuscarxregion").append(`<option value="${data[i].nombre_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionprestamo").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionprestamo2").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#regiondestinofuncionario").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                
                
            })

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });

    ///tbuscarmovimiento
    $.ajax({
        type: "GET",
        url: "SELECTMovimientos",
        data: null, // 
        success: function (data) {
            
            $("#tbuscarmovimiento").html("");
            $.each(data, function (i, item) {
                
                $("#tbuscarmovimiento").append(`<option value="${data[i].nombre_movimiento}">${data[i].nombre_movimiento}</option>`);

            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
   
    cargoactivos();
    cargaipsdiponibles();
    delpolizas();
  
});




function cargoregiones() {
    $.ajax({
        type: "GET",
        url: "SELECTRegion",
        data: null, // serializes the form's elements.
        success: function (data) {
            //alert("YEAHHA");
            $.each(data, function (i, item) {
                $("#cargaregion").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
                $("#addregionui").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`);
              
                
            })
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
}
//ipequipo
function cargaipsdiponibles() {
    $.ajax({
        type: "GET",
        url: "DameIpsDisponibles",
        data: null, // serializes the form's elements.
        success: function (data) {

          

            $("#ipequipo").empty();
            $("#ipequipoprestamo").empty();
            $("#delips").empty();
            $("#ipequipo").append(`<option value="0">Disponibles</option>`);
            $("#ipequipoprestamo").append(`<option value="0">Disponibles</option>`);
            $("#delips").append(`<option value="0">Disponibles</option>`);
            $.each(data, function (i, item) {

                $("#ipequipo").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);
                $("#ipequipoprestamo").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);
                $("#delips").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);

            });
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
}
function cargoactivos() {

    $.ajax({
        type: "GET",
        url: "SELECTActivo",
        data: null, // serializes the form's elements.
        success: function (data) {
           // $("#activosrg").html("");
            $.each(data, function (i, item) {
                //$("#activosrg").append(`<option value="${data[i].id_Activo}">${data[i].placa_Activo}</option>`);
                $("#activosVX").append(`<option value="${data[i].id_Activo}">${data[i].placa_Activo}</option>`)

            })


        },
        error: function (err) {
            alert(err);
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
}

function delpolizas() {

    $.ajax({
        type: "POST",
        url: "DamePolizas",
        data: null, // serializes the form's elements.
        success: function (data) {
            $("#delpoliza").html("");
            $("#delpoliza").append(`<option value="0">Disponibles</option>`);
            $.each(data, function (i, item) {
                //$("#activosrg").append(`<option value="${data[i].id_Activo}">${data[i].placa_Activo}</option>`);
                $("#delpoliza").append(`<option value="${data[i].id_aseguramiento}">${data[i].nombre_seguro}</option>`);

            })


        },
        error: function (err) {
            alert(err);
       }
    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Sin conexion: Verifica Internet.',
                footer: ''
            })

            //   alert('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'No se Encuentra la Pagina',
                footer: ''
            })


        } else if (jqXHR.status == 500) {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Error Interno del Servidor [500].',
                footer: ''
            })


        } else if (textStatus === 'parsererror') {
            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Json Fallo',
                footer: ''
            })



        } else if (textStatus === 'timeout') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Tiempo espera agotado',
                footer: ''
            })


        } else if (textStatus === 'abort') {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Se Aborto Operacion',
                footer: ''
            })


        } else {

            Swal.fire({
                icon: 'error',
                title: 'Problemas...',
                text: 'Uncaught Error: ' + jqXHR.responseText,
                footer: ''
            })


        }

    });
}