function refrescarasignados(){
    $.ajax({
        type: "POST",
        url: "Tabla7All",
        data: null, // serializes the form's elements.
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
}
function refrescaroficina() {
    $.ajax({
        type: "POST",
        url: "Tabla6All",
        data: null, // serializes the form's elements.
        success: function (data) {

            $('table > #t6').empty();
          //  alert("asda");
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
}
function refrescarprestamo() {
    $.ajax({
        type: "POST",
        url: "Tabla5All",
        data: null, // serializes the form's elements.
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
}
function refrescarusuarios() {

    $.ajax({
        type: "POST",
        url: "Tabla4All",
        data: null, // serializes the form's elements.
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
}
function refrescarmovimiento() {
    $.ajax({
        type: "POST",
        url: "Tabla3All",
        data: null, // serializes the form's elements.
        success: function (data) {
            $('table > #t3').empty();
            $("#t3").append(`<tr  class="fuentetext"><th scope='row'>Fecha</th><td>Movimientos</td><td>Realizado por</td><td>Descripcion</td><td>Placa</td></tr>`);
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
}
function refrescarfuncionario() {
    $.ajax({
        type: "POST",
        url: "Tabla2All",
        data: null, // serializes the form's elements.
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
}
function refrescarmarca() {
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
}
function refrescaractivo() {
    $.ajax({
        type: "POST",
        url: "Tabla1All",
        data: null, // serializes the form's elements.
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
}
function refrescarreparado() {
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
}
function refrescarreparacion() {
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
}
function refrescarproveedor() {

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
}
function refrescarseguro() {
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
}
function refrescaracta() {
    Swal.fire(
        'Actualizando',
    );
    Swal.showLoading();

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
function refrescarmodelo() {
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
}
function refrescardesecho() {
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
}
function refrescaroficio() {
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

    }); 
}
function refrescarfamilia() {
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
    })
}