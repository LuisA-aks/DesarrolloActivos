$(document).ready(function () {
    $("#idFormPrestamo").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            numboletaprestamo: "required",
            fechaprestamo: "required",
            cargaoficinaprestamo: "required",
            addfuncionariosprestamo: "required",
            cargaoficinaprestamo: "required"
        },
        // Mensajes segun acciones de error
        messages: {
            numboletaprestamo: "Requerido",
            fechaprestamo: "Requerida",
            cargaoficinaprestamo: "Requerido",
            addfuncionariosprestamo: "Requerido",
            cargaoficinaprestamo: "Requerido"
        },
        submitHandler: function (form) {

            var formx = $("#idFormPrestamo");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
                   
                    if (data[0] =='El activo fue prestado de forma correcta') {
                        Swal.fire(
                            'Agregado!',
                            'El activo fue prestado de forma correcta',
                            'success'
                        )
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
                        })

                    }else
                    if (data[0] = "EL activo no se encuentra disponible para prestamo") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'EL activo no se encuentra disponible para prestamo',

                        })
                    }
                }
            });
            formx[0].reset();

        }
    });

    ///
    $("#idFormReparado").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            numboletaReparado: "required",
            fechareparado: "required",
            tplacaactivoreparado: "required",
        },
        // Mensajes segun acciones de error
        messages: {
            numboletaReparado: "Requerido",
            fechareparado: "Requerida",
            tplacaactivoreparado:"Requerido"
        },
        submitHandler: function (form) {

            var formx = $("#idFormReparado");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
                    //alert(data[0]);
                    if (data[0] == 'Activo reparado') {
                        Swal.fire(
                            'Reparado!',
                            'Activo reparado',
                            'success'
                        )
                    }
                    if (data[0] == 'Error, no se pudo reparar el activo') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'Error, no se pudo reparar el activo',

                        })
                    }

                }
            });
            formx[0].reset();
           
        }
    });
    ///
    $("#idFormDevolver").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            numboletaDevolucion: "required",
        },
        // Mensajes segun acciones de error
        messages: {
            numboletaDevolucion: "Requerido",
        },
        submitHandler: function (form) {

            var formx = $("#idFormDevolver");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {

                    Swal.fire(
                        'Exito!',
                        'Se ha devuelvo',
                        'success'
                    )
                 /*   if (data[0] === 'La direccion IP ya existe o no se pudo ingresar') {
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
                    }*/
                }
            });
            formx[0].reset();
            $("#devplaca").text("");
            $("#devdescripcion").text("");
            $("#devpersona").text("");
            $("#devplaza").text("");
        }
    });
    ///
    /*$("#idFormDevolver").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
     }).validate({
        rules: {
            numboletaDevolucion: "required",
        },
        // Mensajes segun acciones de error
        messages: {
            numboletaDevolucion: "Requerido",
        },
        submitHandler: function (form) {

            var formx = $("#idFormDevolver");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
                    if (data[0] === 'No hay registros de préstamos con ese numero de boleta') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'No hay registros de préstamos con ese numero de boleta',

                        })
                    }
                  
                    }
                });
                formx[0].reset();
            }
        });*/
    ///
    $("#idFormIP").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            dirip: "required",
        },
        // Mensajes segun acciones de error
        messages: {
            dirip: "Requerido",
        },
        submitHandler: function (form) {

            var formx = $("#idFormIP");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
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
                        //
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


                        //
                    }
                }
            });
            formx[0].reset();
        }
    });
    ///
    $("#idFormModelo").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            namemodelo: "required",
            modelodescripcion: "required",
            almacenamientomodelo: "required",
            tipoimpresorasmodelo: "required",
            resolucionmodelomultimedia: "required",
            pulgadasmodelomultimedia: "required",
            procesadormodelo: "required",
            memorialmacenamiento: "required",
            pulgadasmodelo: "required",
            resolucionmodeloportatil: "required",
            almacenamientoups: "required"
        },
        // Mensajes segun acciones de error
        messages: {
            namemodelo: "Requerido",
            modelodescripcion: "Requerido",
            almacenamientomodelo: "Requerido",
            tipoimpresorasmodelo: "Requerido",
            resolucionmodelomultimedia: "Requerido",
            pulgadasmodelomultimedia: "Requerido",
            procesadormodelo: "Requerido",
            memorialmacenamiento: "Requerido",
            pulgadasmodelo: "Requerido",
            resolucionmodeloportatil: "Requerido",
            almacenamientoups: "Requerido"


        },
        submitHandler: function (form) {

            var formx = $("#idFormModelo");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
         //           alert(data[0]);
                    if (data[0] == 'El modelo ya se encuentra registrado') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'El modelo ya se encuentra registrado',

                        })
                    }
                    if (data[0] == 'Modelo ingresado de forma correcta') {

                        Swal.fire(
                            'Agregado!',
                            'Modelo ingresado de forma correcta',
                            'success'
                        )
                        ///
                        $.ajax({
                            type: "GET",
                            url: "SELECTModelo",
                            data: null, // 
                            success: function (data) {

                                $("#delmodelo").empty();
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

                        ///
                    }
                }
            });
            formx[0].reset();
        }
    });
    ///
    $("#idFormFamilia").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            namefamilia: "required"
        },
        // Mensajes segun acciones de error
        messages: {
            namefamilia: "Requerido"

        },
        submitHandler: function (form) {

            var formx = $("#idFormFamilia");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
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
                        //
                        $.ajax({
                            type: "GET",
                            url: "SELECTFamilia",
                            data: null, // 
                            success: function (data) {

                                $("#stipoarticulo").empty();
                                $("#stipoarticulo").append(`<option selected >Tipos Existentes</option>`);
                                $("#cargarasiganfamilia").empty();
                                $("#delfamilia").empty();
                                $("#cargarasiganfamiliaprestamo").empty();
                                $("#selectmodelofamilia").empty();
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
                        //
                    }
                }
            });
            formx[0].reset();
        }
    });
    ///
    $("#idFormOficina").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            nombreoficina: "required",
        
            teloficina: "required",
            correooficina: {
                required: true,
                email:true
            },
            direccionoficina: "required",
            addregionoficina: "required"


        },
        // Mensajes segun acciones de error
        messages: {
            nombreoficina: "Requerido",
            teloficina: "Requerido",
            correooficina: {
                required: "Requerido",
                email: "Debe ser ej:example@example.com"
            },
            direccionoficina: "Requerido",
            addregionoficina: "Requerido"


        },

        submitHandler: function (form) {

            var formx = $("#idFormOficina");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
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
            formx[0].reset();
        }
    });
    ///
    $("#idFormMarca").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            tmarcaadd: "required"
           

        },
        // Mensajes segun acciones de error
        messages: {
            tmarcaadd: "Requerido"
        },

        submitHandler: function (form) {

            var formx = $("#idFormMarca");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
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
                        //
                        $.ajax({
                            type: "GET",
                            url: "SELECTMarca",
                            data: null, // 
                            success: function (data) {

                                $("#delmarca").empty();
                                $("#marcaexist").empty();

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
                        //
                    }
                }
            });
            formx[0].reset();
        }
    });
    ///
    $("#idFormPoliza").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            tnombreseguro: "required",
            tempresasegguro: "required",
            telaseguradora: "required",
            correoaseguradora: {
                required: true,
                email: true
            },
            direccionaseguradora: "required",
            descripcionaseguradora: "required",

        },
        // Mensajes segun acciones de error
        messages: {
            tnombreseguro: "Requerido",
            tempresasegguro: "Requerido",
            telaseguradora: "Requerido",
            correoaseguradora: {
                required: "Correo Requerido",
                email: "Debe ser ej:example@example.com"
            },
            descripcionaseguradora: "Requerido",
            direccionaseguradora: "Requerido",
            
           
        },

        submitHandler: function (form) {

            var formx = $("#idFormPoliza");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {

                    if (data[0] === "El seguro ya se encuentra registrado") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'El seguro ya se encuentra registrado',

                        })
                        //
                       

                        //
                    } else {
                        Swal.fire(
                            'Agregado!',
                            'Seguro agregado exitosamente!!!',
                            'success'
                        )
                        $.ajax({
                            type: "POST",
                            url: "CargaSeguro",
                            data: null, // serializes the form's elements.
                            success: function (data) {
                                $("#seguroseleccionado").empty();
                                $("#seguroseleccionado").append(`<option value="0" selected>Seleccione Seguro</option>`);
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
                    }
                }
            });
            formx[0].reset();
        }
    });
    ///
    $("#idFormTraslado").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
    }).validate({
        rules: {
            numboletaTraslado: "required",
            regiondestinofuncionario: "required",
            oficinadestinofuncionario: "required",
            tbuscarpalzafuncionario: "required"
         
        },
        // Mensajes segun acciones de error
        messages: {
            numboletaTraslado: "Numero Boleta Requerida",
            regiondestinofuncionario: "Requerido",
            oficinadestinofuncionario: "Requerido",
            tbuscarpalzafuncionario: "Requerido"
        },

        submitHandler: function (form) {

            var formx = $("#idFormTraslado");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
                    if (data[0] == "Funcionario traslado de forma correcta") {
                        Swal.fire(
                            'Agregado!',
                            'Funcionario traslado de forma correcta',
                            'success'
                        )
                    }
                    if (data[0] == "No se pudo trasladar el funcionario") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'No se pudo trasladar el funcionario',

                        })
                    }
                }
            });
            formx[0].reset();
            $("#tnombre").text("");
            $("#tplaza").text("");
            $("#toficiaactual").text("");
            
            
        }
    });
    ///
    $("#idFormActivo").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.
       
        var d = new Date($("#txtfechaadquisicion").val());

        var b = new Date($("#txtfechagarantia").val());
        /*alert("una"+d);
        alert("dos"+b);*/
        if (d > b) {
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos',
                text: 'La Fecha de Garantia no puede ser Menor que la Adquisicion',

            })
            return;
        }
    

    }).validate({

        rules: {

            numplaca: "required",
            numserie: "required",
            numlicitacion: "required",
            txtfechaadquisicion: {
                required: true,
                date: true,
            },
            txtfechagarantia: {
                required: true,
                date: true,
            },
            precioactio: {
                required: true,
                min: 10
            }
        },
        // Mensajes segun acciones de error
        messages: {
            numplaca: "Placa Requerida",
            numserie: "Serie Requerida",
            numlicitacion: "Licitacion Requerida",
            txtfechaadquisicion: {
                required: "Fecha Adquisicion Requerida",
                date: "Debe estar correcta la fecha"
            },
            txtfechagarantia: {
                required: "Fecha Adquisicion Requerida",
                date: "Debe estar correcta la fecha"
            },
            precioactio: {
                required: "Precio Requerido",
                min: "Precio Mayor a 10 dolares"
            }

        },

        submitHandler: function (form) {

            var formx = $("#idFormActivo");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
                 //   alert(data[0]);
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
            formx[0].reset();


            
        }
        });
    ///
    $("#idFormDesecho").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

    }).validate({

        rules: {

            numboletaDesechoRepa: "required",
            tplacaactivodesechorepa: "required",
            numlicitacion: "required",
            tfechadesechorepa: {
                required: true,
                date: true,
            },
            tobservacionesdesechorepa:"required"
        },
        // Mensajes segun acciones de error
        messages: {
            numboletaDesechoRepa: "Numero de Boleta Requerido",
            tplacaactivodesechorepa: "Placa Requerida",
            numlicitacion: "Licitacion Requerida",
            tfechadesechorepa: {
                required: "Fecha Requerida",
                date: "Debe estar correcta la fecha"
            },
            tobservacionesdesechorepa:"Observaciones Requeridas"

        },

        submitHandler: function (form) {

            var formx = $("#idFormDesecho");
            var url = formx.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: formx.serialize(), // serializes the form's elements.
                success: function (data) {
                   
                    if (data[0] == 'Activo enviado a desecho') {
                        Swal.fire(
                            'Agregado!',
                            'Activo enviado a desecho',
                            'success'
                        )

                    }
                    if (data[0] == 'Error, no se pudo enviar el activo a desecho') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'Error, no se pudo enviar el activo a desecho',

                        })
                    } 
                }
            });
            formx[0].reset();
            
            
            
            $("#dplaca").text("");
            $("#ddescripcion").text("");
            $("#dmodelo").text("");

        }
    });
    ///
    $("#idForm").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

    }).validate({

        rules: {

            plazafuncionario: "required",
            nombrefuncionario: "required",
            apellidofuncionario: "required",
            correofuncionario: {
                required: true,
                email: true
            },
            addoficinaui: "required"
        },
        // Mensajes segun acciones de error
        messages: {
            plazafuncionario: "Plaza Funcionario Requerida",
            nombrefuncionario: "Nombre Requerido",
            apellidofuncionario: "Apellido Requerido",
            correofuncionario: {
                required: "Correo Requerido",
                email: "Debe ser ej: example@example.com"
            },
            addoficinaui: "Oficina Requerida"
           

        },

        submitHandler: function (form) {
            var form = $("#idForm");
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


        }
    });
    ///
    $("#idFormUsuario").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

    }).validate({

        rules: {

            nombreusuario: "required",
            apellidousuario: "required",
            contrausuario1: "required",
            correousuario: {
                required: true,
                email: true
            },
            addoficinaui: "required",
            contrausuario2: {
                equalTo: "#contrausuario1",
                required: true
            }
        },
        // Mensajes segun acciones de error
        messages: {
            nombreusuario: "Nombre Usuario Requerido",
            apellidousuario: "Apellido Requerido",
            contrausuario1: "Contraseña Requerida",
            correousuario: {
                required: "Correo Requerido",
                email: "Debe ser ej: example@example.com"
            },
           
            contrausuario2: {
                equalTo: "Las contraseñas no son Iguales",
                required: "Confirmacion Requerida"
            },


        },

        submitHandler: function (form) {
            var form = $("#idFormUsuario");
            var url = form.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(), // serializes the form's elements.
                success: function (data) {
                    //alert(data[0]);
                    if (data[0] == 'El Usuario ya se encuentra registrado') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos',
                            text: 'El Usuario ya se encuentra registrado',

                        })
                    }
                    if (data[0] == 'Usuario agregado exitosamente!!!') {
                        Swal.fire(
                            'Agregado!',
                            'Usuario agregado exitosamente!!!',
                            'success'
                        )
                    }
                }
            });
            form[0].reset();


        }
    });
    ///
    $("#idFormAddProveedor2").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

    }).validate({

        rules: {

            tnomproveedor: "required",
            ttelfonoproveedor: "required",
            tdireccion: "required",
            tcorreoproveedor: {
                required: true,
                email: true
            },
            tobservaciones: "required",
            
        },
        // Mensajes segun acciones de error
        messages: {
            tnomproveedor: "Nombre Proveedor Requerido",
            ttelfonoproveedor: "Teléfono Proveedor",
            tdireccion: "Dirección Requerida",
            tcorreoproveedor: {
                required: "Correo Requerido",
                email: "Debe ser ej: example@example.com"
            },
            tobservaciones: "Observaciones",

          


        },

        submitHandler: function (form) {
            var form = $("#idFormAddProveedor2");
           
            var url = form.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(), // serializes the form's elements.
                success: function (data) {

                   // alert(data[0]);
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
                        //
                        $.ajax({
                            type: "GET",
                            url: "SELECTProveedor",
                            data: null, // 
                            success: function (data) {

                                $("#addproveeactivo").empty();
                                $("#delproveedor").empty();
                                $("#proveedorexist").empty();
                                $("#selectmodeloproveedor").empty();



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
                        //
                    }

                }
            });
            form[0].reset();


        }
    });
    ///
    $("#idFormReparacion").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

    }).validate({

        rules: {

            numboletaReparacion: "required",
            tplacaactivoreparacion: "required",
            treparacionesboleta:"required",
            fechareparacion: {
                required: true,
                date: true
            },
            tobservaciones: "required",

        },
        // Mensajes segun acciones de error
        messages: {
            numboletaReparacion: "Codigo Boleta Requerido",
            tplacaactivoreparacion: "Placa Requerida",
            treparacionesboleta:"Debes llenar este campo",
            fechareparacion: {
                required: "Fecha Requerida",
                date: "Debe ser una fecha correcta"
            },
            tobservaciones: "Observaciones",
        },

        submitHandler: function (form) {
            var form = $("#idFormReparacion");

            var url = form.attr('action');

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(), // serializes the form's elements.
                success: function (data) {
                    if (data[0] == "Activo enviado a reparacion") {
                        Swal.fire(
                            'Agregado!!!',
                            'Activo enviado a reparacion',
                            'success'
                        )
                    }
                    if (data[0] == "Error, no se pudo enviar el activo a reparacion") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Lo sentimos...',
                            text: '"Error, no se pudo enviar el activo a reparacion',
                            footer: ''
                        })
                    }

                }
            });
            form[0].reset();
            $("#rplaca").text("Placa");
            $("#rdescripcion").text("Descripcion");
            $("#rmodelo").text("Modelo");


        }
    });
    ///
}); ///fin ready