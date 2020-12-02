

/*$("#idFormDesecho").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data[0] === "Activo enviado a desecho temporal"){
                Swal.fire(
                    'Agregado!',
                    'Activo enviado a desecho temporal',
                    'success'
                )
            }
            if (data[0] === "Error, no se pudo enviar el activo a desecho temporal") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'Error, no se pudo enviar el activo a desecho temporal',

                })
            }

        }
    });
    form[0].reset();

});
*/

$("#idFormOficio").submit(function (e) {
    cont = 1;
    var activos = ["activo1", "activo2", "activo3"];
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    var oficio = $("#ofiexist").val();
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data[0] == "Oficio ingresado de forma correcta") {
              
                $("#numboletaAsigna").val(oficio);
                localStorage.setItem("oficio", oficio);
                $('#numboletaAsigna').attr('readonly', true);
                document.getElementById("sgte").disabled = false;
                document.getElementById("bbbuscaractivoofi").disabled = false;
              ///  document.getElementById("ofiexist").disabled = true;
                $('#ofiexist').attr('readonly', true);
                Swal.fire(
                    'Agregado!',
                    'Oficio ingresado de forma correcta',
                    'success'
                )
                var g = $("#alimmarca").val();
                var h = $("#tbuscaractivoofi").val(); 
                $('#tof').append(`<tr>
                                      <td>${h} </td>
                                      <td>${g}</td>                              
                                      </tr>`);
                if (localStorage.getItem("activo2") === null) {
                    localStorage.setItem(activos[cont], $("#aliid").val());
                } else {
                    var x = localStorage.getItem("activo2") + "-" + $("#aliid").val();
                    localStorage.setItem(activos[cont], x);

                }
               
               
            } 
           if(data[0] == "El activo ya se agregó a un oficio"){
               Swal.fire({
                   icon: 'error',
                   title: 'Lo sentimos',
                   text: 'El activo ya se agregó a un oficio',

               })
               document.getElementById("bbbuscaractivoofi").disabled = false;
            }
        }
    });
    $("#limmarca").text(`Modelo:*******`);
    $("#liserie").text(`Numero Serie:*******`);
    $("#lifamilia").text(`Tipo Equipo:********`);
    $("#liespecificaciones").text(`Especificaciones:****************************************************`);
  ///  form[0].reset();

});
/*$("#idFormTraslado").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    var oficio = $("#ofiexist").val();
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            alert(data[0]);
        }
    });
    form[0].reset();

});*/

/*
$("#idForm").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data[0] === "El Funcionario ya se encuentra registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'El Funcionario ya se encuentra registrado',
               
                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Funcionario agregado exitosamente!!!',
                    'success'
                )
            }
        }
    });
    form[0].reset();

});*/
/*
$("#idFormUsuario").submit(function (e) {
   
    e.preventDefault(); // avoid to execute the actual submit of the form.
   
    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            // show response from the php script.
           
            if (data[0] === "El Usuario ya se encuentra registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'El Funcionario ya se encuentra registrado',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Guardado en Base Datos',
                    'success'
                )
            } 
            
            
            
        }
    });
    form[0].reset();

});*/
/*
$("#idFormActivo").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data[0] === "El Numero de Placa Ya esta registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'El Numero de Placa Ya esta registrado',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Activo Registrado',
                    'success'
                )
            } 
        }
    });
    form[0].reset();

});*/
/*
$("#idFormAddProveedor2").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {

            alert(data[0]);
            if (data[0] === "El proveedor ya se encuentra registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'El proveedor ya se encuentra registrado',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Proveedor agregado exitosamente!!!',
                    'success'
                )
            }

        }
    });
    form[0].reset();

});
*//*
$("#idFormPoliza").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
//            alert(data[0]);

            if (data[0] === "El seguro ya se encuentra registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'El seguro ya se encuentra registrado',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Seguro agregado exitosamente!!!',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});*/

//idFormMarca

/*$("#idFormMarca").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            if (data[0] === "La marca ya se encuentra registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'La marca ya se encuentra registrado',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Marca agregada exitosamente!!!',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});*/
$("#idFormRegion").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            if (data[0] === "Problemas al ingresar la region") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'Problemas al ingresar la region',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Marca agregada exitosamente!!!',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});
 /*
$("#idFormOficina").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            if (data[0] === "La oficina ya se encuentra registrado") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'La oficina ya se encuentra registrado',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Oficina agregada exitosamente!!!',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});*/
// 1
/*
$("#idFormFamilia").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            if (data[0] === "La familia ya existe o no se pudo ingresar") {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'La familia ya existe o no se pudo ingresar',

                })
            } else {
                Swal.fire(
                    'Agregado!',
                    'Familia ingresada de forma correcta',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});*/
/*$("#idFormModelo").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            if (data[0] ==='Problemas al insertar el modelo') {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'Problemas al insertar el modelo',

                })
            }
            if (data[0] === 'Modelo Registrado Correctamente') {
            
                Swal.fire(
                    'Agregado!',
                    'Modelo Registrado Correctamente',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});*/
//idFormIP
/*$("#idFormIP").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            if (data[0] === 'La direccion IP ya existe o no se pudo ingresar') {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'La direccion IP ya existe o no se pudo ingresar',

                })
            }
            if (data[0] === 'Direccion IP ingresada de forma correcta') {

                Swal.fire(
                    'Agregado!',
                    'Direccion IP ingresada de forma correcta',
                    'success'
                )
            }

        }
    });
    form[0].reset();
});*/
//idFormAsinga
$("#idFormAsingat").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data[0] === 'EL activo ya fue asignado, o no se encuentra disponible') {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: 'EL activo ya fue asignado, o no se encuentra disponible',

                })
            }
            if (data[0] === 'Existe Activo, su estado es Activo(asignado)') {

                Swal.fire(
                    'Asignado!',
                    'Existe Activo, su estado es Activo(asignado)',
                    'success'
                )
                ///
                $("#limmarca").text(`Modelo:*******`);
                $("#liserie").text(`Numero Serie:*******`);
                $("#lifamilia").text(`Tipo Equipo:********`);
                $("#liespecificaciones").text(`Especificaciones:****************************************************`);

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

                ///
            }

           

        }
    });
    
    
    var opcion = $("#activosrg").val();
    $('#activosrg').each(function () {
        $('#activosrg option[value="' + opcion + '"]').remove();
    });
    ///AQUI
    var datos = localStorage.getItem("activo2");;
    var array = datos.split("-");
    array = array.filter(dato => dato != opcion);
    localStorage.removeItem("activo2");
    console.log(array);
   // alert("Tamagno " + array.length);
    if (array.length == 1) {
       
        localStorage.setItem("activo2", array[0]);
    } else {
        localStorage.setItem("activo2", array.join('-'));
    }

    ///AQUI
    var cant = $('#activosrg option').length;
  //  alert(cant);
    if (cant == 1) {
        $("#una").css("display", "block");
        $("#dos").css("display", "none");
        $("#numboletaAsigna").val("");
        localStorage.clear();
        form[0].reset();
        form = $("#idFormOficio");
        form[0].reset();
        $('table > #tof').empty();
        $('#ofiexist').attr('readonly', false);
    }
    //form[0].reset();
});
// idDelFormProv
$("#idDelFormProv").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});
//
$("#idDelFormMarca").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});
//idFormDelPoliza
$("#idFormDelPoliza").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});
//
$("#idFormDelModelo").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});
// 
$("#idFormDelIp").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});
//idFormDelOficina
$("#idFormDelOficina").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});
//idFormDelFamilia
$("#idFormDelFamilia").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "GET",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {


            alert(data[0]);

        }
    });
    form[0].reset();
});

/*$("#seguroactivo").change(function (e) {
    
    var valor = $("#seguroactivo").val();
    if (valor == 1) {
        $("#seleccionadoSelect").css("display", "block");
    }else {
        $("#seleccionadoSelect").css("display", "none");
    }
});*/

$("#addregionprestamo2,#regiondestinofuncionario,#delregion").change(function (e) {
    $.ajax({
        type: "GET",
        url: "SELECTOficina",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {
            $("#cargaoficinaprestamo2").html("");
            $("#oficinadestinofuncionario").html("");
            
            //  $("#cargaoficinax").html("  <option selected> Oficinas Existentes </option>");
            $.each(data, function (i, item) {
                $("#cargaoficinaprestamo2").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
                $("#oficinadestinofuncionario").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
                $("#deloficina").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
                
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


});
$("#addregionprestamo").change(function (e) {
    $.ajax({
        type: "GET",
        url: "SELECTOficina",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {
            $("#cargaoficinaprestamo").html("");
            //  $("#cargaoficinax").html("  <option selected> Oficinas Existentes </option>");
            $.each(data, function (i, item) {
                $("#cargaoficinaprestamo").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
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


});
$("#addregionuip").change(function (e) {
    $.ajax({
        type: "GET",
        url: "SELECTOficina",
        data: {usuario:$(this).val()}, // serializes the form's elements.
        success: function (data) {
            $("#cargaoficinax").html("");
          //  $("#cargaoficinax").html("  <option selected> Oficinas Existentes </option>");
            $.each(data, function (i, item) {
            $("#cargaoficinax").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
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

  
});
$("#addregionuit").change(function (e) {
    $.ajax({
        type: "GET",
        url: "SELECTOficina",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {
            $("#addoficinaui").html("");
         //   $("#addoficinaui").html("  <option selected> Oficinas Existentes </option>");
            $.each(data, function (i, item) {
                $("#addoficinaui").append(`<option value="${data[i].id_Oficina}">${data[i].nombre_Oficina}</option>`);
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


});
$("#cargaoficinaprestamo").change(function (e) {
    $.ajax({
        type: "GET",
        url: "SELECTFuncionario",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {
            $("#addfuncionariosprestamo").html("");
            //  $("#addfuncionarios").html("<option selected> Funcionarios Existentes </option>");
            $.each(data, function (i, item) {
                $("#addfuncionariosprestamo").append(`<option value="${data[i].id_Funcionario}">${data[i].nombre_Funcionario}</option>`);
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

});
$("#cargaoficinax").change(function (e) {
    $.ajax({
        type: "GET",
        url: "SELECTFuncionario",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {
            $("#addfuncionarios").html("");
          //  $("#addfuncionarios").html("<option selected> Funcionarios Existentes </option>");
            $.each(data, function (i, item) {
                $("#addfuncionarios").append(`<option value="${data[i].id_Funcionario}">${data[i].nombre_Funcionario}</option>`);
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

});
//cargarasiganfamilia---cargarasiganfamiliaprestamo
$("#cargarasiganfamiliaprestamo").change(function (e) {
    
    if ($(this).val() == 1 || $(this).val() == 3 || $(this).val() == 4) {
        $("#ipequipoprestamo").css("display", "block");
    } else {
        $("#ipequipoprestamo").css("display", "none");
        $("#ipequipoprestamo").html("");
        cargaipsdiponibles2();
    }
    $.ajax({
        type: "GET",
        url: "DameActivoPorFamilia",
        data: { familia: $(this).val() }, // serializes the form's elements.
        success: function (data) {


            ///alert("si lleog");
            $("#activosrgprestamo").html("");
            $("#activosrgprestamo").append(`<option value="0" selected>Eliga Placa</option>`);
            $.each(data, function (i, item) {
             //   alert("si lleog");
                $("#activosrgprestamo").append(`<option value="${data[i].id_Activo}">${data[i].placa_Activo}</option>`);

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

});
/*$("#cargarasiganfamilia").change(function (e) {
    if ($(this).val() == 1 || $(this).val() == 3 || $(this).val() == 4 ) {
        $("#ipequipo").css("display", "block");
    } else {
        $("#ipequipo").css("display", "none");
        $("#ipequipo").html("");
        cargaipsdiponibles2();
    }
    $.ajax({
        type: "GET",
        url: "DameActivoPorFamilia",
        data: { familia: $(this).val() }, // serializes the form's elements.
        success: function (data) {

            

            $("#activosrg").html("");
            $.each(data, function (i, item) {
                
                $("#activosrg").append(`<option value="${data[i].id_Activo}">${data[i].placa_Activo}</option>`);

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

});*/
/// activosrgprestamo
$("#activosrgprestamo").change(function (e) {
    $.ajax({
        type: "GET",
        url: "DameDescripcion",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {

            $("#divdescripcionprestamo").html("");
            $("#divdescripcionprestamo").html("<h5 class='display-5'>Descripcion</h5>");
            $("#lol2").val($("#activosrgprestamo").val());

            $.each(data, function (i, item) {
               // alert("lol");
                $("#divdescripcionprestamo").append(`Placa del Activo:${data[i].placa_Activo} <br> Descripcion: ${data[i].descripcion}`);

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

});


$("#activosrg").change(function (e) {
    $.ajax({
        type: "GET",
        url: "DameDescripcion",
        data: { usuario: $(this).val() }, // serializes the form's elements.
        success: function (data) {
            
            $("#divdescripcion").html("");
            $("#divdescripcion").html("<h5 class='display-5'>Descripcion</h5>");
            $("#lol").val($("#activosrg").val());

            $.each(data, function (i, item) {

                $("#divdescripcion").append(`Placa del Activo:${data[i].placa_Activo} <br> Descripcion: ${data[i].descripcion}`);
                //alert(data[i].Mensaje);
                if (data[i].Mensaje == "Si") {
                    $("#ipequipo").css("display", "block");
                }else{
                    $("#ipequipo").css("display", "none");
                }
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

});
// 
function cargaipsdiponibles2() {
    $.ajax({
        type: "GET",
        url: "DameIpsDisponibles",
        data: null, // serializes the form's elements.
        success: function (data) {



            $("#ipequipo").append(`<option value="0">Disponibles</option>`);
            $("#ipequipoprestamo").append(`<option value="0">Disponibles</option>`);
            
            $.each(data, function (i, item) {

                //$("#activosrg").append("");
                $("#ipequipo").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);
                $("#ipequipoprestamo").append(`<option value="${data[i].id_ip}">${data[i].ip_valor}</option>`);


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
///
$("#stipoarticulo").change(function (e) {

    var x = $("#stipoarticulo option:selected").text();;
    $.ajax({
        type: "GET",
        url: "DameArticulosExistentes",
        data: { familia: $(this).val() }, // serializes the form's elements.
        
        success: function (data) {
            
            $("#fami").html(`${x}`);
            $("#addarti").html("");
            $("#addarti").empty();
            $("#addarti").html(`<option value="0">Selecciona Articulo</option>`);
            $.each(data, function (i, item) {

                $("#addarti").append(`<option value="${data[i].id_Marca}">${data[i].nombre_Marca}-${data[i].nombre_Modelo}</option>`);

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

});
//addarti
$("#addarti").change(function (e) {

    var x = $("#addarti option:selected").text();
    $("#modelomarcax").html(`${x}`);
    $("#descripcion").val(x);
   

});
///selectmodelofamilia
$("#selectmodelofamilia").change(function (e) {

    var valor = $("#selectmodelofamilia option:selected").text();
    $("#famimodelo").text($("#selectmodelofamilia option:selected").text());
    if (valor == "Portatil") {
        $("#modeloportatil").css("display", "block");
        $("#modelomultimedia").css("display", "none");
        $("#modelodesktop").css("display", "none");
        $("#modeloimpresoras").css("display", "none");
        $("#modeloups").css("display", "none");
    }
    if (valor == "Multimedia") {
        $("#modelomultimedia").css("display", "block");
        $("#modeloportatil").css("display", "none");
        $("#modelodesktop").css("display", "none");
        $("#modeloimpresoras").css("display", "none");
        $("#modeloups").css("display", "none");
    }
    if (valor == "Desktop") {
        $("#modelodesktop").css("display", "block");
        $("#modeloportatil").css("display", "none");
        $("#modelomultimedia").css("display", "none");
        $("#modeloimpresoras").css("display", "none");
        $("#modeloups").css("display", "none");
    }
    if (valor == "Impresoras") {
        $("#modeloimpresoras").css("display", "block");
        $("#modelodesktop").css("display", "none");
        $("#modeloportatil").css("display", "none");
        $("#modelomultimedia").css("display", "none");
        $("#modeloups").css("display", "none");

    }
    if (valor == "UPS") {
        $("#modeloups").css("display", "block");
        $("#modeloimpresoras").css("display", "none");
        $("#modelodesktop").css("display", "none");
        $("#modeloportatil").css("display", "none");
        $("#modelomultimedia").css("display", "none");

    }
    if (valor == "Telefonos") {
        $("#modeloups").css("display", "none");
        $("#modeloimpresoras").css("display", "none");
        $("#modelodesktop").css("display", "none");
        $("#modeloportatil").css("display", "none");
        $("#modelomultimedia").css("display", "none");

    }
    if (valor == "Redes") {
        $("#modeloups").css("display", "none");
        $("#modeloimpresoras").css("display", "none");
        $("#modelodesktop").css("display", "none");
        $("#modeloportatil").css("display", "none");
        $("#modelomultimedia").css("display", "none");

    }
    
    


});






