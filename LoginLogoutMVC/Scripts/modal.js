//   <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
$("#addproveedor").click(function () {
    swal.fire({
        title: 'Información Proveedor',
        showDenyButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: 'Cancelar',
        html: ' <form id="idFormProveedor" action="AddProveedor"><div class="row"> <input id="swal-input0" class="swal2-input" placeholder="Nombre Proveedor">' +
            '<input id="swal-input1" class="swal2-input" placeholder="Correo Proveedor">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Teléfono">' +
            '<input id="swal-input3" class="swal2-input" placeholder="Correo Proveedor">' +
            '<input id="swal-input4" class="swal2-input" placeholder="Direccion">' +
            '<input id="swal-input5" class="swal2-textarea" placeholder="Observaciones"></div></form> ',
        showCloseButton: true,

        preConfirm: function() {
            return new Promise(function(resolve) {
                resolve([
                   
                    // $('#swal-input1').val(),
                    // $('#swal-input2').val(),

                ]);
            });
        },
        onOpen: function() {
            $('#swal-input1').focus();
           
        }
    }).then(function(result) {


        ///

        if (result.isConfirmed) {
           

                 // avoid to execute the actual submit of the form.

             
                var url = "AddProveedor";
                
                $.ajax({
                    type: "POST",
                    url: url,
                    data: { 'data': $('#swal-input0').val() + '|' + $('#swal-input1').val() + '|' + $('#swal-input2').val() + '|' + $('#swal-input3').val() + '|' + $('#swal-input4').val() + '|' + $('#swal-input5').val() }, // serializes the form's elements.
                    success: function (data) {
                        alert(data[0]); // show response from the php script.
                       // alert("y luego limpio cajitas de textos :v");
                        if (data[0] === '1') {
                            Swal.fire('Guardado', '', 'success');
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: data[0],
                                text: 'Something went wrong!',
                                footer: '<a href>Why do I have this issue?</a>'
                            })
                        }
                    }
                   
                });


            
 

        } else if (result.isDenied) {
            Swal.fire('No se realizo ninguna acción', '', 'info');
        }



        //else




    }).catch(swal.noop);
});

$("#addoficina").click(function () {
    swal.fire({
        title: 'Información Oficina',
        showDenyButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: 'Cancelar',
        html: ' <form id="idFormProveedor" action="AddProveedor"><div class="row"> <input id="swal-input0" class="swal2-input" placeholder="Nombre Oficina">' +
            '<input id="swal-input1" class="swal2-input" placeholder="Encargado Oficina">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Teléfono">' +
            '<input id="swal-input3" class="swal2-input" placeholder="Correo Oficina">' +
            '<input id="swal-input4" class="swal2-input" placeholder="Direccion">' +
            '<input id="swal-input5" class="swal2-textarea" placeholder="Observaciones"></div></form> ' +
            '<select id="addregion" class=" swal2-select col-12">' +
            ' <option selected>Region</option>' +
            '<option value="1">R1</option>' +
            '<option value="2">R2</option>' +
            '<option value="3">R3</option>' +
            '</select>',
        showCloseButton: true,

        preConfirm: function () {
            return new Promise(function (resolve) {
                resolve([

                    
                    // $('#swal-input2').val(),

                ]);
            });
        },
        onOpen: function () {
            $('#swal-input1').focus();
          //  $('#addregion').append('<option value="4">Simulo Ajax</option>');
       
            
        }
    }).then(function (result) {


        ///

        if (result.isConfirmed) {


            // avoid to execute the actual submit of the form.


            var url = "AddOficina";

            $.ajax({
                type: "POST",
                url: url,
                data: { 'data': $('#swal-input0').val() + '|' + $('#swal-input1').val() + '|' + $('#swal-input2').val() + '|' + $('#swal-input3').val() + '|' + $('#swal-input4').val() + '|' + $('#swal-input5').val() + '|' + $('#addregion').val()}, // serializes the form's elements.
                success: function (data) {
                    alert(data[0]); // show response from the php script.
                    // alert("y luego limpio cajitas de textos :v");
                    if (data[0] === '1') {
                        Swal.fire('Guardado', '', 'success');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: data[0],
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                    }
                }

            });





        } else if (result.isDenied) {
            Swal.fire('No se realizo ninguna acción', '', 'info');
        }



        //else




    }).catch(swal.noop);
});

$("#addregion").click(function () {
    swal.fire({
        title: 'Información Region',
        showDenyButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: 'Cancelar',
        html: ' <form id="idFormProveedor" action="AddProveedor"><div class="row"> <input id="swal-input0" class="swal2-input" placeholder="Nombre Region">' +
            '<input id="swal-input1" class="swal2-input" placeholder="Dirección">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Correo">' +
            '<input id="swal-input3" class="swal2-input" placeholder="Teléfono">' +
            '<input id="swal-input4" class="swal2-input" placeholder="Observacion">' +
           '</div></form>' ,
        showCloseButton: true,

        preConfirm: function () {
            return new Promise(function (resolve) {
                resolve([


                    // $('#swal-input2').val(),

                ]);
            });
        },
        onOpen: function () {
            $('#swal-input1').focus();
            


        }
    }).then(function (result) {


        ///

        if (result.isConfirmed) {


            // avoid to execute the actual submit of the form.


            var url = "AddRegion";

            $.ajax({
                type: "POST",
                url: url,
                data: { 'data': $('#swal-input0').val() + '|' + $('#swal-input1').val() + '|' + $('#swal-input2').val() + '|' + $('#swal-input3').val() + '|' + $('#swal-input4').val()}, // serializes the form's elements.
                success: function (data) {
                    alert(data[0]);
                    alert(data[1]);// show response from the php script.
                    // alert("y luego limpio cajitas de textos :v");
                    if (data[0] === '1') {
                        Swal.fire('Guardado', '', 'success');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: data[0],
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                    }
                }

            });





        } else if (result.isDenied) {
            Swal.fire('No se realizo ninguna acción', '', 'info');
        }



        //else




    }).catch(swal.noop);
});
$("#addarticulo").click(function() {
    swal.fire({
        title: 'Información Articulo',
        showDenyButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: 'Cancelar',
        html: '<div class="row"> <input id="swal-input1" class="swal2-input" placeholder="Modelo">' +
            '<select id="swal-input2" class=" swal2-select col-12" onchange="accionselect()">' +
            ' <option selected>Familia</option>' +
            '<option value="1">PCS</option>' +
            '<option value="2">Móviles</option>' +
            '<option value="3">Multimedia</option>' +
            '</select>' +
            '<input id="swal-input2" class="swal2-input" placeholder="Disco Duro">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Memoria RAM">' +
            '<select id="swal-input2" class=" swal2-select col-12" >' +
            ' <option selected>Marcas</option>' +
            '<option value="1">Asus</option>' +
            '<option value="2">Dell</option>' +
            '<option value="3"><button class="btn btn-dark" onclick="addMarca()">Agregar Marca...</button></option>' +
            '</select>' +
            '</div> ',
        showCloseButton: true,

        preConfirm: function() {
            return new Promise(function(resolve) {
                resolve([
                    $('#swal-input1').val(),
                    $('#swal-input2').val(),

                ]);
            });
        },
        onOpen: function() {
            $('#swal-input1').focus();
        }
    }).then(function(result) {


        ///

        if (result.isConfirmed) {
            Swal.fire('Guardado', '', 'success');
        } else if (result.isDenied) {
            Swal.fire('No se realizo ninguna acción', '', 'info');
        }



        //else




    }).catch(swal.noop);
});

function accionselect() {
    alert("Aquí haremos una acción diferente segun familia");
}
function accionselectregion() {
    accionOficina();
}

function addMarca() {
    Swal.fire('Add Marca');
}

$("#stipoarticulo").change(function() {
    $("#addarti").attr("disabled", false);
});
$("#basignacion").click(function() {
    alert("acciones");
});

function cargoregiones() {

    $.ajax({
        type: "GET",
        url: "SELECTRegion",
        data: null, // serializes the form's elements.
        success: function (data) {
            $.each(data, function (i, item) {
            $("#cargaregion").append(`<option value="${data[i].id_Region}">${data[i].nombre_Region}</option>`)

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
            $.each(data, function (i, item) {
                $("#activosrg").append(`<option value="${data[i].id_Activo}">${data[i].placa_Activo}</option>`)

            })


        },
        error: function (err) {
            alert(err);
        }
    });
}
function accionOficina() {

    $.ajax({
        type: "GET",
        url: "SELECTOficina",
        data: "{region:" + $("#cargaregion").val()  + "}",
        success: function (data) {

            $("#cargaoficina").html("");
            $.each(data, function (i, item) {
                $("#cargaoficina").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`)

            })


        }
    });
}
function accionfuncionario() {
   
    $.ajax({
        type: "GET",
        url: "XSELECTFuncionario",
        data: "{oficina:" + $("#cargaoficinax").val() + "}",
        success: function (data) {
           
           
            $("#funcionariorg").html("");
            $.each(data, function (i, item) {
                $("#funcionariorg").append(`<option value="${data[i].id_Funcionario}">${data[i].nombre_Funcionario}</option>`)

            })


        }
    });
}



