
$("#bbuscarmodelo").click(function (e) {

    if ($("#tbuscarmodelo").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    //
    $.ajax({
        type: "POST",
        url: "CargarNombreModelo",
        data: { nombremodelo: $("#tbuscarmodelo").val() }, // serializes the form's elements.
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

    //
});

$("#eliminarmodeloform").click(function (e) {
    $.ajax({
        type: "POST",
        url: "DELModelo",
        data: { idmodelo: $("#delmodelo").val() }, // serializes the form's elements.
        success: function (data) {


            if (data[0] == 'Modelo eliminado satisfactoriamente') {
                Swal.fire(
                    'Asignado!',
                    'Modelo eliminado satisfactoriamente',
                    'success'
                )
            }
            if (data[0] == 'Problemas al eliminar el modelo') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Problemas al eliminar el modelo',
                    footer: ''
                })
            }




            ///
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
            ///
        }
    })
});

$("#eliuser").click(function (e) {

    $.ajax({
        type: "POST",
        url: "DELUser",
        data: { user: $("#deluser").val() }, // serializes the form's elements.
        success: function (data) {


            if (data[0] == 'Usuario eliminado satisfactoriamente') {
                Swal.fire(
                    'Eliminado!',
                    'Usuario eliminado satisfactoriamente',
                    'success'
                )
            }
            if (data[0] == 'Problemas al eliminar el Usuario') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Problemas al eliminar el Usuario',
                    footer: ''
                })
            }

        }
    });
});
$("#bbuscaroficio").click(function (e) {
    if ($("#tbuscaroficio").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "CargarTablaOficioBusqueda",
        data: { oficio: $("#tbuscaroficio").val() }, // serializes the form's elements.
        success: function (data) {

            $('table > #t20').empty();
            $("#t20").append(`<tr class="fuentetext"><th scope='row'>#Oficio</th><td>Oficina Destino</td><td>Placa</td><td>Tipo Equipo</td><td>Modelo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t20").append(`<tr><th scope='row'>${data[i].numero_Oficio}</th><td>${data[i].nombre_Oficina}</td><td>${data[i].numero_activo}</td><td>${data[i].Tipo_Equipo}</td><td>${data[i].Modelo}</td><td>${data[i].Descripcion}</td></tr>`)
            })

        }
    })
});
$("#bbuscarplacadesecho").click(function (e) {
    if ($("#tbuscarplacadesecho").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }

    $.ajax({

        type: "POST",
        url: "PlacaDesecho",
        data: { placa: $("#tbuscarplacadesecho").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t19').empty();
            $("#t19").append(`<tr class="fuentetext"><th scope='row'>Fecha Desecho</th><td>#Boleta</td><td>Observaciones</td><td>Placa</td><td>Descripcion</td><td>Desechado Por</td></tr>`)
            $.each(data, function (i, item) {
                $("#t19").append(`<tr><th scope='row'>${data[i].fecha_BodegaTotalConsultas}</th><td>${data[i].numeroBoleta}</td><td>${data[i].observaciones_BodegaTotalConsultas}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td><td>${data[i].nombre_Usuario}</td></tr>`)
            })
        }
    });

});




$("#buscarreparadoboleta").click(function (e) {

    if ($("#tbuscarreparadoboleta").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    
    $.ajax({

        type: "POST",
        url: "DatosBoletaReparado",
        data: { boleta: $("#tbuscarreparadoboleta").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t16').empty();
            $("#t16").append(`<tr class="fuentetext"><th scope='row'>#Boleta</th><td>Fecha Reparacion</td><td>Reparacion</td><td>Placa Activo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t16").append(`<tr><th scope='row'>${data[i].numeroboleta}</th><td>${data[i].Fecha_Reparacion}</td><td>${data[i].Reparacion}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td></tr>`)
            })
        }
    });
    
});
$("#buscarreparacionboleta").click(function (e) {
    if ($("#tbuscarreparacionboleta").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "DatosBoletaReparacion",
        data: { boleta: $("#tbuscarreparacionboleta").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t15').empty();
            $("#t15").append(`<tr class="fuentetext"><th scope='row'>#Boleta</th><td>Fecha Reparacion</td><td>Reparacion</td><td>Placa Activo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t15").append(`<tr><th scope='row'>${data[i].numeroboleta}</th><td>${data[i].FechaIngreso}</td><td>${data[i].ObservacionReparacion}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td></tr>`)
            })
        }
    });
});
///
$("#buscarplacareparacion").click(function (e) {
    if ($("#tbuscarplacareparacion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "DatosPlacaReparacion",
        data: { placa: $("#tbuscarplacareparacion").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t15').empty();
            $("#t15").append(`<tr class="fuentetext"><th scope='row'>#Boleta</th><td>Fecha Reparacion</td><td>Reparacion</td><td>Placa Activo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t15").append(`<tr><th scope='row'>${data[i].numeroboleta}</th><td>${data[i].FechaIngreso}</td><td>${data[i].ObservacionReparacion}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td></tr>`)
            })
        }
    });
});
///
$("#buscarplacareparado").click(function (e) {
    if ($("#tbuscarplacareparado").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "DatosPlacaReparado",
        data: { placa: $("#tbuscarplacareparado").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t16').empty();
            $("#t16").append(`<tr class="fuentetext"><th scope='row'>#Boleta</th><td>Fecha Reparacion</td><td>Reparacion</td><td>Placa Activo</td><td>Descripcion</td></tr>`)
            $.each(data, function (i, item) {
                $("#t16").append(`<tr><th scope='row'>${data[i].numeroboleta}</th><td>${data[i].Fecha_Reparacion}</td><td>${data[i].Reparacion}</td><td>${data[i].placa_Activo}</td><td>${data[i].descripcion}</td></tr>`)
            })
        }
    });
});
///
$("#bplacaactivoreparado").click(function (e) {
    if ($("#tplacaactivoreparado").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "DatosReparado",
        data: { placa: $("#tplacaactivoreparado").val() }, // serializes the form's elements.
        success: function (data) {
            $("#reppplaca").text(data[0].placa_Activo);
            $("#repdescripcion").text(data[0].descripcion);
            $("#repmodelo").text(data[0].nombre_modelo);
            $("#repestado").text(data[0].nombre_Estado);
            $("#repocultoidactivo").val(data[0].id_Activo);
        }
    });
});
$("#bnumboletaDevolucion").click(function (e) {
    if ($("#numboletaDevolucion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "DatosBoleta",
        data: { boleta: $("#numboletaDevolucion").val() }, // serializes the form's elements.
        success: function (data) {

       //     alert(data[0]);
            
            $("#devoplaca").val(data[0].placa_Activo);
            $("#devoidactivo").val(data[0].id_Activo);
            $("#devoidip").val(data[0].idip);
            ///
            $("#devplaca").text(data[0].placa_Activo);
            $("#devdescripcion").text(data[0].descripcion);
            $("#devpersona").text(data[0].nombre_Funcionario);
            $("#devplaza").text(data[0].plaza_Funcionario);
            ///
            document.getElementById("bdevolucion").disabled = false;


            
            
            

        }
    });
});
$("#sgte").click(function () {
    var quien = "Si"+$("#Unom").val();
    localStorage.setItem("Asigno", quien);
    $("#una").css("display", "none");
    $("#dos").css("display", "block");
    $("#activosrg").html("");
    ///
    var datos = localStorage.getItem("activo2");;
    var tamagno;
 
    var array = ["No"];
    //var array = datos.split("-");
   // alert("Tamagno " + datos.length);
  
    if (datos) {
        tamagno = datos.length;
        if (tamagno > 1) {
            $("#activosrg").html("");
            $("#activosrg").append(`<option selected> Placas </option>`);
            array.pop();
             array = datos.split("-");
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
            
            //
            //alert(datos);
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


                ///
            });

            //
        }
        
    } else {
       
    }
});
$("#bbuscarpalzafuncionario").click(function (e) {
    if ($("#tbuscarpalzafuncionario").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "DatosFuncionario",
        data: { plaza: $("#tbuscarpalzafuncionario").val() }, // serializes the form's elements.
        success: function (data) {
            
            $("#idfuncionariooculto").val(data[0].id_Funcionario);
            $("#tnombre").text(data[0].nombre_Funcionario);
            $("#tplaza").text(data[0].plaza_Funcionario);
            $("#toficiaactual").text(data[0].nombre_Oficina);
           
        }
    });

});
$("#bbbuscarnombreproveedor").click(function (e) {
    if ($("#tbuscarnombreproveedor").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "Tabla10B",
        data: { nombre: $("#tbuscarnombreproveedor").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t10').empty();
            $("#t10").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Nombre</td><td>Telefono</td><td>Correo</td><td>Observaciones</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t10").append(`<tr><th scope='row'>${data[i].id_Proveedor}</th><td>${data[i].nombre_Proveedor}</td><td>${data[i].telefono_Proveedor}</td><td>${data[i].correo_Proveedor}</td><td>${data[i].observaciones_Proveedor}</td></tr>`);
            })
        }
    });

});
$("#bbuscarfamilia").click(function (e) {
    if ($("#tbuscarfamilia").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "Tabla8C",
        data: { id: $("#tbuscarfamilia").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t8').empty();
            $("#t8").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Nombre Marca</td><td>Nombre Modelo</td><td>Nombre Familia</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t8").append(`<tr><th scope='row'>${data[i].Id_Marca}</th><td>${data[i].nombre_Marca}</td><td>${data[i].nombre_Modelo}</td><td>${data[i].nombre_Familia}</td></tr>`);
            })
        }
    });

});
$("#bbbuscarnombremarca").click(function (e) {
    if ($("#tbuscarnombremarca").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "Tabla8B",
        data: { nombre: $("#tbuscarnombremarca").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t8').empty();
            $("#t8").append(`<tr class="fuentetext"><th scope='row'>Id</th><td>Nombre Marca</td><td>Nombre Modelo</td><td>Nombre Familia</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t8").append(`<tr><th scope='row'>${data[i].Id_Marca}</th><td>${data[i].nombre_Marca}</td><td>${data[i].nombre_Modelo}</td><td>${data[i].nombre_Familia}</td></tr>`);
            })
        }
    });
});
$("#bbuscarrolusuario").click(function (e) {

    if ($("#tbuscarrolusuario").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }

    $.ajax({

        type: "POST",
        url: "Tabla4B2",
        data: { id: $("#tbuscarrolusuario").val() }, // serializes the form's elements.
        success: function (data) {


            $('table > #t4').empty();
            $("#t4").append(`<tr class="fuentetext"><th scope='row'>Nombre</th><td>Apellidos</td><td>Correo</td><td>Rol</td></tr>`);
            $.each(data, function (i, item) {
                $("#t4").append(`<tr><th scope='row'>${data[i].nombre_usuario}</th><td>${data[i].apellido_usuario}</td><td>${data[i].correo}</td><td>${data[i].rol}</td></tr>`);
            })

        }
    });


});


$("#bbuscarcorreousuario").click(function (e) {

    if ($("#tbuscarcorreousuario").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }

    $.ajax({

        type: "POST",
        url: "Tabla4A",
        data: { correo: $("#tbuscarcorreousuario").val() }, // serializes the form's elements.
        success: function (data) {


            $('table > #t4').empty();
            $("#t4").append(`<tr class="fuentetext"><th scope='row'>Nombre</th><td>Apellidos</td><td>Correo</td><td>Rol</td></tr>`);
            $.each(data, function (i, item) {
                $("#t4").append(`<tr><th scope='row'>${data[i].nombre_usuario}</th><td>${data[i].apellido_usuario}</td><td>${data[i].correo}</td><td>${data[i].rol}</td></tr>`);
            })

        }
    });


});



$("#bbuscarplacamovimiento").click(function (e) {

    if ($("#tbuscarplacamovimiento").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }

    $.ajax({

        type: "POST",
        url: "Tabla3C",
        data: { placa: $("#tbuscarplacamovimiento").val() }, // serializes the form's elements.
        success: function (data) {


            $.each(data, function (i, item) {
                $('table > #t3').empty();
                $("#t3").append(`<tr  class="fuentetext"><th scope='row'>Fecha</th><td>Movimientos</td><td>Realizado por</td><td>Descripcion</td><td>Placa</td></tr>`);
                $.each(data, function (i, item) {
                    $("#t3").append(`<tr><th scope='row'>${data[i].fecha}</th><td>${data[i].movimientos}</td><td>${data[i].usuario}</td><td>${data[i].activo}</td><td>${data[i].placaactivo}</td></tr>`);
                })
            });

        }
    });
        
});
///
$("#bplacaactivoreparacion").click(function (e) {

    if ($("#tplacaactivoreparacion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({

        type: "POST",
        url: "SearchPlacaActivoReparacion",
        data: { placa: $("#tplacaactivoreparacion").val() }, // serializes the form's elements.
        success: function (data) {


            $.each(data, function (i, item) {
               
                $("#tocultoidactivorepa").val(data[i].id_Activo);

                $("#rplaca").text(data[i].placa_Activo);
                $("#rdescripcion").text(data[i].descripcion);
                $("#rmodelo").text(data[i].nombre_modelo);
          

            });

        }
    })
});
///
$("#bbuscarestadoactivo").click(function (e) {
   
    $.ajax({

        type: "POST",
        url: "FiltraEstados",
        data: { estados: $("#tbuscarestadoactivo").val() }, // serializes the form's elements.
        success: function (data) {


            $('table > #t1').empty();
            $("#t1").append(`<tr class="fuentetext"><th scope='row'>Placa Activo</th><td>Ubicacion</td><td>Descripcion</td><td>Licitacion</td><td>Seguro</td><td>Proveedor</td><td>Estado</td><td>Precio</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t1").append(`<tr><th scope='row'>${data[i].placa_Activo}</th><td>${data[i].ubicacion}</td><td>${data[i].descripcion}</td><td>${data[i].licitacion}</td><td>${data[i].seguro}</td><td>${data[i].proveedor}</td><td>${data[i].estado}</td><td>${data[i].precio_activo}</td></tr>`);
            })

        }
    });
    
});
///
$("#bplacaactivodesechorepa").click(function (e) {
    
    if ($("#tplacaactivodesechorepa").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({
       
        type: "POST",
        url: "SearchPlacaActivoReparacion",
        ///
        //SearchOficioPlacaDesecho
        data: { placa: $("#tplacaactivodesechorepa").val() }, // serializes the form's elements.
        success: function (data) {


            $.each(data, function (i, item) {
              
                $("#tocultodesechorepa").val(data[i].id_Activo);
                $("#dplaca").text(data[i].placa_Activo);
                $("#ddescripcion").text(data[i].descripcion);
                $("#dmodelo").text(data[i].nombre_modelo);

        });

        }
    })


});

$("#bbbuscaractivoofi").click(function (e) {
    if ($("#tbuscaractivoofi").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "SearchOficioPlaca",
        data: { placa: $("#tbuscaractivoofi").val() }, // serializes the form's elements.
        success: function (data) {
           /// alert(data[0].modelo);
            $("#limmarca").text(`Modelo:${data[0].modelo}`);
            $("#liserie").text(`Numero Serie:${data[0].serie_Activo}`);
            $("#lifamilia").text(`Tipo Equipo:${data[0].nombre_familia}`);
            $("#liespecificaciones").text(`Especificaciones: ${data[0].specs}`);
            ///
            
            $("#alimmarca").val(data[0].modelo);
            $("#aliserie").val(data[0].serie_Activo);
            $("#alifamilia").val(data[0].nombre_familia);
            $("#aliespecificaciones").val(data[0].specs);
            $("#aliid").val(data[0].id_Activo);
            

            document.getElementById("bbbuscaractivoofi").disabled = true;



        }
    })


});
//buscarplaca
$("#buscarplaca").click(function (e) {
    if ($("#tbuscarplaca").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }



    $.ajax({
        type: "POST",
        url: "Tabla1A",
        data: { activo: $("#tbuscarplaca").val() }, // serializes the form's elements.
        success: function (data) {
        //    alert(data[0]);
          
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
 
   

});

$("#buscarlicitacion").click(function (e) {
    if ($("#tbuscarlicitacion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla1B",
        data: { licitacion: $("#tbuscarlicitacion").val() }, // serializes the form's elements.
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
   
});

$("#buscarubicacion").click(function (e) {
    if ($("#tbuscarubicacion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla1C",
        data: { oficina: $("#tbuscarubicacion").val() }, // serializes the form's elements.
        success: function (data) {
            $('table > #t1').empty();
            $("#t1").append(`<tr class="fuentetext"><th scope='row'>Placa Activo</th><td>Ubicacion</td><td>Descripcion</td><td>Licitacion</td><td>Seguro</td><td>Proveedor</td><td>Estado</td><td>Precio</td></tr>`);
            $.each(data, function (i, item) {
                // $("#addproveeactivo").append(`<option value="${data[i].id_Proveedor}">${data[i].nombre_Proveedor}</option>`);
                $("#t1").append(`<tr><th scope='row'>${data[i].placa_Activo}</th><td>${data[i].ubicacion}</td><td>${data[i].descripcion}</td><td>${data[i].licitacion}</td><td>${data[i].seguro}</td><td>${data[i].proveedor}</td><td>${data[i].estado}</td><td>${data[i].precio_activo}</tr>`);
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

$("#buscarplaza").click(function (e) {
    if ($("#tbuscarplaza").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }

    $.ajax({
        type: "POST",
        url: "Tabla2A",
        data: { plaza: $("#tbuscarplaza").val() }, // serializes the form's elements.
        success: function (data) {
  ///          alert(data[0]);


            $('table > #t2').empty();
            $("#t2").append(`<tr  class="fuentetext"><th scope='row'>Plaza</th><td>Nombre</td><td>Apellido</td><td>Nombre Oficina</td><td>Correo Funcionario</td><td>Puesto</td></tr>`);
            $.each(data, function (i, item) {
                $("#t2").append(`<tr><th scope='row'>${data[i].plaza}</th><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].oficina}</td><td>${data[i].correo}</td><td>${data[i].puesto}</td></tr>`);
            })
        }
    });
});
$("#buscaroficina").click(function (e) {
    if ($("#tbuscaroficina").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla2B",
        data: { oficina: $("#tbuscaroficina").val() }, // serializes the form's elements.
        success: function (data) {
//            alert(data[0]);


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
});

$("#buscarmovimiento").click(function (e) {
    $.ajax({
        type: "POST",
        url: "Tabla3A",
        data: { movimiento: $("#tbuscarmovimiento").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);


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
});

$("#bbuscaruser").click(function (e) {
    
    if ($("#tbuscaruser").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla3B",
        data: { usuario: $("#tbuscaruser").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);

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
});

$("#buscarfechadesecho").click(function (e) {
    if ($("#tbuscarfechadesecho").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla4B",
        data: { fecha: $("#tbuscarfechadesecho").val() }, // serializes the form's elements.
        success: function (data) {
          
            $('table > #t4').empty();
            $("#t4").append(`<tr class="fuentetext"><th scope='row'>Fecha</th><td>Observaciones</td><td>Usuario</td><td>Activo Placa</td><td>Activo Nombre</td></tr>`);
            $.each(data, function (i, item) {
                $("#t4").append(`<tr><th scope='row'>${data[i].fecha}</th><td>${data[i].observaciones}</td><td>${data[i].usuario}</td><td>${data[i].activoplaca}</td><td>${data[i].activonombre}</td></tr>`);
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
$("#buscarxactivo4").click(function (e) {
    if ($("#tbuscarxactivo4").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla4A",
        data: { activo: $("#tbuscarxactivo4").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);


            $('table > #t4').empty(); 
            $("#t4").append(`<tr class="fuentetext"><th scope='row'>Fecha</th><td>Observaciones</td><td>Usuario</td><td>Activo Placa</td><td>Activo Nombre</td></tr>`);
            $.each(data, function (i, item) {
                $("#t4").append(`<tr><th scope='row'>${data[i].fecha}</th><td>${data[i].observaciones}</td><td>${data[i].usuario}</td><td>${data[i].activoplaca}</td><td>${data[i].activonombre}</td></tr>`);
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
$("#buscarfechadesechop").click(function (e) {
    if ($("#tbuscarfechadesechop").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla5A",
        data: { fecha: $("#tbuscarfechadesechop").val() }, // serializes the form's elements.
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
});

$("#buscarxactivopre").click(function (e) {

    if ($("#tbuscarxactivopre").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla5B",
        data: { activo: $("#tbuscarxactivopre").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);


            //$("#t5").html("");
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
});

$("#buscarcorreooficina").click(function (e) {
    if ($("#tbuscarcorreooficina").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "Tabla6A",
        data: { correo: $("#tbuscarcorreooficina").val() }, // serializes the form's elements.
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
});

$("#buscarxregion").click(function (e) {
    if ($("#tbuscarxregion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla6B",
        data: { region: $("#tbuscarxregion").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);

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
});
///bfechaasignado
$("#bfechaasignado").click(function (e) {
    if ($("#tfechaasignado").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla7A",
        data: { fecha: $("#tfechaasignado").val() }, // serializes the form's elements.
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
});
///
$("#bplacaasignacion").click(function (e) {
    if ($("#tplacaasignacion").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla7B",
        data: { placa: $("#tplacaasignacion").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);

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

});
$("#bplazaasignacionk").click(function (e) {
    if ($("#tplazaasignacionk").val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar el Campo',
            footer: ''
        })
        return;
    }
    $.ajax({
        type: "POST",
        url: "Tabla7C",
        data: { plaza: $("#tplazaasignacionk").val() }, // serializes the form's elements.
        success: function (data) {
            //alert(data[0]);

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

});
