using LoginLogoutMVC.Models;
using Newtonsoft.Json;
using PANI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace LoginLogoutMVC.Controllers
{
    public class DashBoarController : Controller
    {
          public string conexionF = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2061;Integrated Security=True";
        // String mycon = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT2021;Integrated Security=True";
        // GET: DashBoar
        public ActionResult UserHome()
        {
            //Login de usuario
            if (Session["nombre_Usuario"] == null)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {

                return View();
            }
        }

        [HttpPost]
        public ActionResult UserHome(string cbutton)
        {
            //Cierre de sesion 

            if (cbutton == "Logout")
            {
                Session.Abandon();
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return View();
            }

        }

        [HttpPost]
        public JsonResult AddExcel(string pStrPermissions)
        {
            //Ingresa los activos por medio de un documento de excel

            NActivos n = new NActivos();
            int user = Convert.ToInt16(@Session["id_Usuario"]);
            List<Excel> actions = new List<Excel>();
            Prueba[] deserializedProduct = JsonConvert.DeserializeObject<Prueba[]>(pStrPermissions);
            foreach (Prueba i in deserializedProduct)
            {

                Excel h = n.agregar_activoluis(i.Asignado_a, i.NACTIVO, i.SERIE, i.Adiquisicion, i.Garantia, i.MARCA, i.Proveedor, i.ORDEN_DE_COMPRA, i.COSTO, i.Aseguramiento, i.DESCRIPCION, i.Incluido_poliza, user, conexionF);
                actions.Add(h);
            }



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public JsonResult DameArticulosExistentes(string familia)
        {
            //Muestra las familias existente
            MMarcas m = new MMarcas();
            List<MMarca> actions = m.mostramarcamodelo(familia, conexionF);




            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);

        }


        [HttpPost]
        public JsonResult AddActivo(FormCollection formCollection)
        {
            //Agrega los activos de forma individual
            Activos activos = new Activos();
            //numplaca
            //numserie
            //numlicitacion
            //txtfechaadquisicion
            // txtfechagarantia
            // precioactio
            // addproveeactivo
            // addarti
            //ubicabodega
            int user;
            user = Convert.ToInt16(@Session["id_Usuario"]);
            int _seguro = Convert.ToInt16(formCollection["seguroseleccionado"]);
            int poliza= Convert.ToInt16(formCollection["seguroactivo"]);
            string _numplaca = formCollection["numplaca"];
            string _numserie = formCollection["numserie"];
            int _marca = Convert.ToInt16(formCollection["addarti"]);
            int _proveedor = Convert.ToInt16(formCollection["addproveeactivo"]);
            string _txtfechaadquisicion = formCollection["txtfechaadquisicion"];
            string _txtfechagarantia = formCollection["txtfechagarantia"];
            int _ubicabodega = Convert.ToInt16(formCollection["ubicabodega"]);
            string _addproveeactivo = formCollection["addproveeactivo"];
            string _numlicitacion = formCollection["numlicitacion"];
            string _precioactio = formCollection["precioactio"];
            string _descripcion = formCollection["descripcion"];

            string mensaje = activos.agregar_activo(_ubicabodega, _numplaca, _numserie, _txtfechaadquisicion, _txtfechagarantia, _marca, _proveedor, user, _numlicitacion, _precioactio, _seguro, poliza, "lol", _descripcion, conexionF);



            //***
            List<string> actions = new List<string>();


            actions.Add(mensaje);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddUsuario(FormCollection formCollection)
        {
            //Ingreso de usuarios al sistema
            Usuarios user = new Usuarios();
            //nombreusuario
            //apellidousuario
            //correousuario
            // contrausuario1
            // addproveeuser
            //addrol
            string _usuario = formCollection["nombreusuario"];
            string _apellido = formCollection["apellidousuario"];
            string _correo = formCollection["correousuario"];
            string _contrasena = formCollection["contrausuario1"];
            int _region = Convert.ToInt16(formCollection["addregionui"]);
            int _rol = Convert.ToInt16(formCollection["addrol"]);

            string mensaje = user.agregarusuario(_usuario, _apellido, _correo, _contrasena, _region, _rol, conexionF);



            List<string> actions = new List<string>();
            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult AddProveedor2(FormCollection formCollection)
        {
            //Ingreso de proveedores al sistema
            Proveedores provee = new Proveedores();
            //tnomproveedor
            //ttelfonoproveedor
            //tcorreoproveedor
            //tdirecion
            //tobservaciones
            string _nombreprov = formCollection["tnomproveedor"];
            string _telefonoprov = formCollection["ttelfonoproveedor"];
            string _correoprov = formCollection["tcorreoproveedor"];
            string _direccionprove = formCollection["tdireccion"];
            string _observaciones = formCollection["tobservaciones"];

            string mensaje = provee.agregar_proveedor(_nombreprov, _telefonoprov, _correoprov, _direccionprove, _observaciones, conexionF);
            List<string> actions = new List<string>();
            actions.Add(mensaje);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult AddMarca(FormCollection formCollection)
        {
            //Ingreso de nuevas marcas al sistema
            MarcaActivo marca = new MarcaActivo();
            //tmarcaadd

            string _nombre = formCollection["tmarcaadd"];
            string mensaje = marca.agregar_marca(_nombre, conexionF);

            List<string> actions = new List<string>();


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DamePolizas()
        {
            //Obtiene las polizas disponibles
            Polizas p = new Polizas();
            List<Poliza> actions = p.mostrarpolizas(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla1All(string activo)
        {
            //Muestra todos los activos disponibles
            Tabla1AS t = new Tabla1AS();
            List<Tabla1A> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult FiltraEstados(string estados)
        {
            //Metodo que muestra los estados de los activos
            Tabla1AS t = new Tabla1AS();
            List<Tabla1A> actions = t.mostrarestados(conexionF,estados);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Tabla1A(string activo)
        {
            //Muestra todos los activos
            Tabla1AS t = new Tabla1AS();
            List<Tabla1A> actions = t.mostrarconsulta1(activo, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla1B(string licitacion)
        {
            //Filtro de activos por licitacion
            Tabla1BS t = new Tabla1BS();
            List<Tabla1A> actions = t.mostrarconsulta1(licitacion, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla7All()
        {
            //Filtro de activos 
            Tabla7AS t = new Tabla7AS();
            List<Tabla7A> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla7A(string fecha)
        {
            //Filtro de activos por fecha de ingreso
            Tabla7AS t = new Tabla7AS();
            List<Tabla7A> actions = t.mostrarxfecha(fecha, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla7B(string placa)
        {
            //Filtro de activos por numero de placa
            Tabla7AS t = new Tabla7AS();
            List<Tabla7A> actions = t.mostrarxplaca(placa, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla7C(string plaza)
        {
            //Filtro de funcionarios por plaza 
            Tabla7AS t = new Tabla7AS();
            List<Tabla7A> actions = t.mostrarxplaza(plaza, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla8All()
        {
            //Muestra todos los funcionarios
            Tabla8AS tp = new Tabla8AS();
            List<CMMarca> actions = tp.dametodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult Tabla8B(string nombre)
        {
            //Filtro de funcionarios por nombre
            Tabla8AS tp = new Tabla8AS();
            List<CMMarca> actions = tp.damexnombre(nombre,conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla8C(string id)
        {
            //Filtro de activos por familia
            Tabla8AS tp = new Tabla8AS();
            List<CMMarca> actions = tp.damexfamilia(id, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla1C(string oficina)
        {
            //Filtro de activos por oficina
            Tabla1CS t = new Tabla1CS();
            List<Tabla1A> actions = t.mostrarconsulta3(oficina, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla2All()
        {
            //Muestra todos los activos 
            Tabla2AS t = new Tabla2AS();
            List<Tabla2A> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Tabla2A(string plaza)
        {
            //Filtro de Funcionarios por plaza
            Tabla2AS t = new Tabla2AS();
            List<Tabla2A> actions = t.mostrarconsulta2AS(plaza, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla2B(string oficina)
        {
            //Filtro de funcionarios por oficina  
            Tabla2AS t = new Tabla2AS();
            List<Tabla2A> actions = t.mostrarconsulta2ASoficina(oficina,conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla3All()
        {
            //Muestra todos los movimientos
            Tabla3AS t = new Tabla3AS();
            List<Tabla3A> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla3A(string movimiento)
        {
            //Filtro de movimientos por movimiento 
            Tabla3AS t = new Tabla3AS();
            List<Tabla3A> actions = t.mostrarmovimientos(movimiento, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla3B(string usuario)
        {
            //Filtro de ususario por usuario 
            Tabla3AS t = new Tabla3AS();
            List<Tabla3A> actions = t.mostrarxusuario(usuario, conexionF);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla3C(string placa)
        {
            //Muestra tabla asigna activos
             Tabla3AS t = new Tabla3AS();
             List<Tabla3A> actions = t.mostrarxplaca(placa, conexionF);
           

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla4B(string fecha)
        {
            //Filtro de activos por fecha
            Tabla4AS ta = new Tabla4AS();
            List<Tabla4A> actions = ta.mostrarxfecha(fecha, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTMovimientos()
        {
            //Carga select de movimientos
            Movimientos v = new Movimientos();
            List<Movimiento> actions = v.mostrarmovimientos(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla4All()
        {
            Tabla4AS ta = new Tabla4AS();
            List<Usuario> actions = ta.mostrartodo(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla4A(string correo)
        {
            Tabla4AS ta = new Tabla4AS();
            List<Usuario> actions = ta.mostrarxcorreo(correo, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla4B2(string id)
        {
            Tabla4AS ta = new Tabla4AS();
            List<Usuario> actions = ta.mostrarxrol(id, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla5All()
        {
            Tabla5AS ta = new Tabla5AS();
            List<Tabla5A> actions = ta.mostrartodo(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla5A(string fecha)
        {
            Tabla5AS ta = new Tabla5AS();
            List<Tabla5A> actions = ta.mostrarxfecha5(fecha, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla5B(string activo)
        {
            Tabla5AS ta = new Tabla5AS();
            List<Tabla5A> actions = ta.mostrarxactivo5(activo, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla6All()
        {
            Tabla6AS ta = new Tabla6AS();
            List<Tabla6A> actions = ta.mostrartodo(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla9All()
        {
            Tabla9AS t = new Tabla9AS();

            List<Tabla9A> actions = t.mostrartodo(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla10All()
        {
            Tabla10AS t = new Tabla10AS();

            List<Tabla10A> actions = t.mostrartodo(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla11All()
        {
            Tabla11AS t = new Tabla11AS();

            List<Tabla11A> actions = t.mostrartodo(conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla10B(string nombre)
        {
            Tabla10AS t = new Tabla10AS();

            List<Tabla10A> actions = t.mostrarxnombre(conexionF,nombre);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla6A(string correo)
        {
            Tabla6AS ta = new Tabla6AS();
            List<Tabla6A> actions = ta.mostrarxcorreo(correo, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Tabla6B(string region)
        {
            Tabla6AS ta = new Tabla6AS();
            List<Tabla6A> actions = ta.mostrarxregion(region, conexionF);



            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddAsingax(FormCollection formCollection)
        {
            //Ingresa datos en la tabla asigna activos

            // funcionariorg
            // activosrg
            // ipequipo
            // numboletaAsigna
            int user;
            user = Convert.ToInt16(@Session["id_Usuario"]);

            //tmarcaadd

            string _funcionariorg = formCollection["addfuncionarios"];
            string _activosrg = formCollection["activosrg"];
            string _numboletaAsigna = formCollection["numboletaAsigna"];
            string lol = formCollection["lol"];
            //

            //
            string _ipequipo = formCollection["ipequipo"];

            Asingar a = new Asingar();
            string mensaje = a.intentalo(_funcionariorg, lol, _ipequipo, user, _numboletaAsigna, conexionF);


            List<string> actions = new List<string>();
            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddPoliza(FormCollection formCollection)
        {
            //Ingreso de nuevas polizas de seguro

            // tnombreseguro
            // tempresasegguro
            // telaseguradora
            //correoaseguradora
            //direccionaseguradora
            //descripcionaseguradora
            Aseguramiento seguro = new Aseguramiento();

            string _nombreseguro = formCollection["tnombreseguro"];
            string _empresaseguro = formCollection["tempresasegguro"];
            string _telefonoseguro = formCollection["telaseguradora"];
            string _correoseguro = formCollection["correoaseguradora"];
            string _direccionseguro = formCollection["direccionaseguradora"];
            string _descripcionseguro = formCollection["descripcionaseguradora"];

            string mensaje = seguro.agregar_seguro(_nombreseguro, _empresaseguro, _telefonoseguro, _correoseguro, _direccionseguro, _descripcionseguro, conexionF);
            List<string> actions = new List<string>();
            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddOficina(FormCollection formCollection)
        {
            //Ingreso de nuevas oficinas al sistema

            // nombreoficina
            // coordinador
            // teloficina
            // correooficina
            //direccionoficina
            //observaciones
            // addregionoficina
            Oficinas ofic = new Oficinas();
            int _esbodega = Convert.ToInt16(formCollection["esbodega"]);
            string _nombreoficina = formCollection["nombreoficina"];
            string _coordinador = formCollection["coordinador"];
            string _teloficina = formCollection["teloficina"];
            string _correooficina = formCollection["correooficina"];
            string _direccionoficina = formCollection["direccionoficina"];
            string _observaciones = formCollection["observacionesof"];
            int _addregionoficina = Convert.ToInt32(formCollection["addregionoficina"]);

            string mensaje = ofic.agregaroficina(_esbodega, _nombreoficina, _coordinador, _teloficina, _correooficina, _direccionoficina, _observaciones, _addregionoficina, conexionF);
            List<string> actions = new List<string>();
            actions.Add(mensaje);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddRegion(FormCollection formCollection)
        {
            //Ingreso de nuevas regiones al sistema

            // nombreregion
            // observacionesregion
            // direccionregion

            Region regi = new Region();

            string _nombreregion = formCollection["nombreregion"];
            string _direccionregion = formCollection["correoregion"];
            string _correoregion = formCollection["direccionregion"];
            string _telefonoregion = formCollection["telefonoregio"];
            string _observaciones = formCollection["observacionesregion"];

            string mensaje = regi.agregar_region(_nombreregion, _direccionregion, _correoregion, _telefonoregion, _observaciones, conexionF);

            List<string> actions = new List<string>();

            actions.Add(mensaje);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddModelo(FormCollection formCollection)
        {
            //Ingreso de nuevos modelos al sistema

            //marcaexist
            //selectmodeloproveedor
            // namemodelo
            //modelodescripcion
            //almacenamientomodelo
            //memorialmacenamiento
            //pulgadasmodelo
            //procesadormodelo
            //resolucionmodeloportatil
            //tipoimpresorasmodelo
            string mensaje = "";
            Modelo model = new Modelo();
            string _selectmodelofamilia = formCollection["selectmodelofamilia"].ToString();

            //Filtra los campos a ingresar segun familia
            if (_selectmodelofamilia == "2")///MULTIMEDIA
            {
                string _namemodelo = formCollection["namemodelo"].ToString();
                string _almacenamientomodelo = formCollection["almacenamientomodelo"].ToString();
                string _memorialmacenamiento = formCollection["memorialmacenamiento"].ToString();
                int _marcaexist = Convert.ToInt16(formCollection["marcaexist"]);
                int _selectmodeloproveedor = Convert.ToInt16(formCollection["selectmodeloproveedor"]);
                string _procesadormodelo = formCollection["procesadormodelo"].ToString();
                string _pulgadasmodelo = formCollection["pulgadasmodelomultimedia"].ToString();
                string _tipoimpresorasmodelo = formCollection["tipoimpresorasmodelo"].ToString();
                string _resolucionmodeloportatil = formCollection["resolucionmodelomultimedia"].ToString();
                string _modelodescripcion = formCollection["modelodescripcion"].ToString();
                mensaje = model.agregar_modelo(_namemodelo, _almacenamientomodelo, _memorialmacenamiento, _marcaexist, _selectmodeloproveedor, _procesadormodelo,
           _pulgadasmodelo, _tipoimpresorasmodelo, _resolucionmodeloportatil, _modelodescripcion, conexionF, _selectmodelofamilia);
            }
            else
            if (_selectmodelofamilia == "6")//UPS
            {
                string _namemodelo = formCollection["namemodelo"].ToString();
                string _almacenamientomodelo = formCollection["almacenamientoups"].ToString();
                string _memorialmacenamiento = formCollection["memorialmacenamiento"].ToString();
                int _marcaexist = Convert.ToInt16(formCollection["marcaexist"]);
                int _selectmodeloproveedor = Convert.ToInt16(formCollection["selectmodeloproveedor"]);
                string _procesadormodelo = formCollection["procesadormodelo"].ToString();
                string _pulgadasmodelo = formCollection["pulgadasmodelomultimedia"].ToString();
                string _tipoimpresorasmodelo = formCollection["tipoimpresorasmodelo"].ToString();
                string _resolucionmodeloportatil = formCollection["resolucionmodelomultimedia"].ToString();
                string _modelodescripcion = formCollection["modelodescripcion"].ToString();
                mensaje = model.agregar_modelo(_namemodelo, _almacenamientomodelo, _memorialmacenamiento, _marcaexist, _selectmodeloproveedor, _procesadormodelo,
         _pulgadasmodelo, _tipoimpresorasmodelo, _resolucionmodeloportatil, _modelodescripcion, conexionF, _selectmodelofamilia);
            }
            else if (_selectmodelofamilia == "4")//DESKTOP
            {

                string _namemodelo = formCollection["namemodelo"].ToString();
                string _almacenamientomodelo = formCollection["almacenamientomodelodeskop"].ToString();
                string _memorialmacenamiento = formCollection["rammodelodesktop"].ToString();
                int _marcaexist = Convert.ToInt16(formCollection["marcaexist"]);
                int _selectmodeloproveedor = Convert.ToInt16(formCollection["selectmodeloproveedor"]);
                string _procesadormodelo = formCollection["procesadormodelodesktop"].ToString();
                string _pulgadasmodelo = formCollection["pulgadasmodelo"].ToString();
                string _tipoimpresorasmodelo = formCollection["tipoimpresorasmodelo"].ToString();
                string _resolucionmodeloportatil = formCollection["resolucionmodeloportatil"].ToString();
                string _modelodescripcion = formCollection["modelodescripcion"].ToString();
                mensaje = model.agregar_modelo(_namemodelo, _almacenamientomodelo, _memorialmacenamiento, _marcaexist, _selectmodeloproveedor, _procesadormodelo,
         _pulgadasmodelo, _tipoimpresorasmodelo, _resolucionmodeloportatil, _modelodescripcion, conexionF, _selectmodelofamilia);
            }
            else if (_selectmodelofamilia == "1")///PORTATIL
            {
                string _namemodelo = formCollection["namemodelo"].ToString();
                string _almacenamientomodelo = formCollection["almacenamientomodelo"].ToString();
                string _memorialmacenamiento = formCollection["memorialmacenamiento"].ToString();
                int _marcaexist = Convert.ToInt16(formCollection["marcaexist"]);
                int _selectmodeloproveedor = Convert.ToInt16(formCollection["selectmodeloproveedor"]);
                string _procesadormodelo = formCollection["procesadormodelo"].ToString();
                string _pulgadasmodelo = formCollection["pulgadasmodelo"].ToString();
                string _tipoimpresorasmodelo = formCollection["tipoimpresorasmodelo"].ToString();
                string _resolucionmodeloportatil = formCollection["resolucionmodeloportatil"].ToString();
                string _modelodescripcion = formCollection["modelodescripcion"].ToString();
                mensaje = model.agregar_modelo(_namemodelo, _almacenamientomodelo, _memorialmacenamiento, _marcaexist, _selectmodeloproveedor, _procesadormodelo,
         _pulgadasmodelo, _tipoimpresorasmodelo, _resolucionmodeloportatil, _modelodescripcion, conexionF, _selectmodelofamilia);
            }
            else if (_selectmodelofamilia == "5")///IMPRESORAS
            {
                string _namemodelo = formCollection["namemodelo"].ToString();
                string _almacenamientomodelo = formCollection["almacenamientomodelo"].ToString();
                string _memorialmacenamiento = formCollection["memorialmacenamiento"].ToString();
                int _marcaexist = Convert.ToInt16(formCollection["marcaexist"]);
                int _selectmodeloproveedor = Convert.ToInt16(formCollection["selectmodeloproveedor"]);
                string _procesadormodelo = formCollection["procesadormodelo"].ToString();
                string _pulgadasmodelo = formCollection["pulgadasmodelo"].ToString();
                string _tipoimpresorasmodelo = formCollection["tipoimpresorasmodelo"].ToString();
                string _resolucionmodeloportatil = formCollection["resolucionmodeloportatil"].ToString();
                string _modelodescripcion = formCollection["modelodescripcion"].ToString();
                mensaje = model.agregar_modelo(_namemodelo, _almacenamientomodelo, _memorialmacenamiento, _marcaexist, _selectmodeloproveedor, _procesadormodelo,
         _pulgadasmodelo, _tipoimpresorasmodelo, _resolucionmodeloportatil, _modelodescripcion, conexionF, _selectmodelofamilia);
            }
            else
            {
                string _namemodelo = formCollection["namemodelo"].ToString();
                string _almacenamientomodelo = formCollection["almacenamientomodelo"].ToString();
                string _memorialmacenamiento = formCollection["memorialmacenamiento"].ToString();
                int _marcaexist = Convert.ToInt16(formCollection["marcaexist"]);
                int _selectmodeloproveedor = Convert.ToInt16(formCollection["selectmodeloproveedor"]);
                string _procesadormodelo = formCollection["procesadormodelo"].ToString();
                string _pulgadasmodelo = formCollection["pulgadasmodelo"].ToString();
                string _tipoimpresorasmodelo = formCollection["tipoimpresorasmodelo"].ToString();
                string _resolucionmodeloportatil = formCollection["resolucionmodeloportatil"].ToString();
                string _modelodescripcion = formCollection["modelodescripcion"].ToString();
                mensaje = model.agregar_modelo(_namemodelo, _almacenamientomodelo, _memorialmacenamiento, _marcaexist, _selectmodeloproveedor, _procesadormodelo,
         _pulgadasmodelo, _tipoimpresorasmodelo, _resolucionmodeloportatil, _modelodescripcion, conexionF, _selectmodelofamilia);
            }



            List<string> actions = new List<string>();
            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddFamilia(FormCollection formCollection)
        {
            //Ingreso de nuevas familias

            // namefamilia
            Familia fam = new Familia();
            //dirip

            string nombre = formCollection["namefamilia"];
            string mensaje = fam.agregar_familia(nombre, conexionF);

            List<string> actions = new List<string>();

            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddIp(FormCollection formCollection)
        {
            //Ingreso de nuevas direcciones ip

            DireccionesIP ip = new DireccionesIP();
            //dirip

            string _ips = formCollection["dirip"];
            string mensaje = ip.agregar_ip(_ips, conexionF);


            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTProveedor()
        {

            Proveedores p = new Proveedores();
            List<Proveedor> actions = p.mostrarproveedor(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult XSELECTFuncionario(string usuario)
        {

            AFuncionarios p = new AFuncionarios();
            //string oficinas = formCollection["cargaoficinax"];
            // List<AFuncionario> actions = p.mostrarfuncionario(oficinas);
            List<string> actions = new List<string>();
            actions.Add(usuario);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        //
        [HttpGet]
        public JsonResult DameIpsDisponibles()
        {
            //Muestra IPS disponibles 
            Disponibles ds = new Disponibles();
            List<Disponible> actions = ds.mostrardisponibles(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTBodega()
        {
            //Muestra todas las bodegas

            Bodegas b = new Bodegas();
            List<Bodega> actions = b.mostrarbodegas(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTMarca()
        {

            Marcas b = new Marcas();
            List<Marca> actions = b.mostrarmarcas(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTModelo()
        {
            //Muestra los modelos en un select

            XModelos b = new XModelos();
            List<XModelo> actions = b.mostrarmodelos(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTIps()
        {
            //Muestra las ips en un select

            IPs b = new IPs();
            List<Ip> actions = b.mostrarips(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTFamilia()
        {
            //Muestra las familias en un select

            Familias p = new Familias();
            List<Familia> actions = p.mostrarfamilia(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTRegion()
        {
            //Muestra las regiones en un select
            Regiones r = new Regiones();
            List<Region> actions = r.mostrar_Regiones(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTActivo()
        {
            //Muestra los activos filtrados en select
            XActivos r = new XActivos();
            List<XActivo> actions = r.mostrar_stock(conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult DameActivoPorFamilia(string familia)
        {
            //Muestra los activos filtrados por familia en un select
            XActivos r = new XActivos();
            //List<XActivo> actions = r.mostrar_stock();
            List<XActivo> actions = r.mostrar_xActivos(familia, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult DameDescripcion(string usuario)
        {
            //Muestra la descripcion del ativo seleccionario
            Descripciones d = new Descripciones();
            List<Descripcion> actions = d.mostrardescripcion(usuario, conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTOficina(string usuario)
        {
            //Muestra las oficinas filtradas por region
            XOficinas r = new XOficinas();
            List<XOficina> actions = r.mostrar_Oficinas(usuario, conexionF);
            // List<string> actions = new List<string>();
            //actions.Add(usuario);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult SELECTFuncionario(string usuario)
        {
            //Muestra los funcionarios filtrados por oficina
            XFuncionarios f = new XFuncionarios();
            int r = Convert.ToInt16(usuario);
            List<Funcionario> actions = f.mostrar_Funcionarios(r, conexionF);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult DELProveedor(FormCollection form)
        {
            // delproveedor
            List<string> actions = new List<string>();
            actions.Add("funcionodelprovee");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult DELMarca(FormCollection form)
        {
            // delmarca
            List<string> actions = new List<string>();
            actions.Add("funcionodelmarca");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult DELPoliza(FormCollection form)
        {
            // delpoliza
            List<string> actions = new List<string>();
            actions.Add("funcionodelpoliza");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult DELModelo(FormCollection form)
        {
            //Elimina modelos
            // delmodelo
            List<string> actions = new List<string>();
            actions.Add("funcionodelmodelo");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult DELIp(FormCollection form)
        {
            // delips deloficina
            List<string> actions = new List<string>();
            actions.Add("funcionodelips");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult DELOficina(FormCollection form)
        {
            //  deloficina
            List<string> actions = new List<string>();
            actions.Add("funcionodeloficina");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult DELFamilia(FormCollection form)
        {
            //  delfamilia
            List<string> actions = new List<string>();
            actions.Add("funcionodelfamilia");
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddFuncionario(FormCollection formCollection)
        {
            //Ingresa funcionarios al sistema

            ////------------
            ///puestofuncionario
            ///fechadesde
            ///numempleado
            Funcionarios funcionario = new Funcionarios();



            //Some implement
            string _nombre = formCollection["nombrefuncionario"];
            string _apellido = formCollection["apellidofuncionario"];
            string _correo = formCollection["correofuncionario"];
            string _addoficinaui = formCollection["addoficinaui"];
            string _plazafuncionario = formCollection["plazafuncionario"];
            //corregir
            string _puesto = formCollection["puestofuncionario"];
            string _fechadesde = formCollection["fechadesde"];
            string _numeroempleado = formCollection["numempleado"];

  
            string mensaje = funcionario.agregar_funcionario(_nombre, _apellido, _correo, _addoficinaui, _plazafuncionario, _puesto, _fechadesde, _numeroempleado, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            //actions.Add(_apellido);
            //actions.Add(_correo);
            //actions.Add(_addoficinaui);
            //actions.Add(@Session["nombre_Usuario"].ToString());


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);

        }
        [HttpPost]
        public JsonResult AddDesechoReparacion(FormCollection formCollection)
        {
            //Ingresa activos desechados a una tabla desecho

            //numboletaDesechoRepa
            //tplacaactivodesechorepa (placa del boton)
            //tfechadesechorepa 
            //tobservacionesdesechorepa
            //tocultodesechorepa (este es idActivo)
            int variableid = Convert.ToInt32(Session["id_Usuario"]);
            DesechoTemporal desechot = new DesechoTemporal();
            //Some implement
            string _numboletaDesechoRepa = formCollection["numboletaDesechoRepa"].ToString();
            int _tocultodesechorepa = Convert.ToInt16(formCollection["tocultodesechorepa"]);
            string _tfechadesechorepa = formCollection["tfechadesechorepa"].ToString();
            string _tobservacionesdesechorepa = formCollection["tobservacionesdesechorepa"].ToString();
            //int _funcionariodesechorepa = Convert.ToInt32(formCollection["funcionariodesechorepa"]);

            string mensaje = desechot.desechotemporal(_tfechadesechorepa, _tobservacionesdesechorepa, _numboletaDesechoRepa, variableid, _tocultodesechorepa, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddOficio(FormCollection formCollection)
        {
            //Ingresa nuevos oficios al sistema

            string act1 = formCollection["activo1"];
            string act2 = formCollection["activo2"];
            string act3 = formCollection["activo3"];


            if (act1 != null)
            {

            }

            //ofiexist (numero oficio)
            //asuntooficio
            //fechaoficio 
            //destinooficio
            //correooficio
            //ofiexistorigen
            //ofiexistdestino
            //descripcionoficio (textarea)
            //tbuscaractivoofi (placa)
            //********
            //limmarca
            //liserie
            //lifamilia
            //liespecificaciones
            Oficio ofi = new Oficio();
            //Some implement
            string _ofiexist = formCollection["ofiexist"];
            int _ofiexistorigen = Convert.ToInt32(formCollection["ofiexistorigen"]);
            int _ofiexistdestino = Convert.ToInt32(formCollection["ofiexistdestino"]);
            string _lifamilia = formCollection["lifamilia"];
            string _liespecificaciones = formCollection["liespecificaciones"];
            string _descripcionoficio = formCollection["descripcionoficio"];
            string _tbuscaractivoofi = formCollection["tbuscaractivoofi"];
            string _liserie = formCollection["liserie"];
            string _correooficio = formCollection["correooficio"];

            string mensaje = ofi.IngresaOficio(_ofiexist, _ofiexistorigen, _ofiexistdestino, _lifamilia, _liespecificaciones, _descripcionoficio, _tbuscaractivoofi, _liserie, _correooficio, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult SearchOficioPlaca(string placa)
        {
            //Busca specs de activos por placa
            SpecActivos spec = new SpecActivos();

            List<SpecActivo> actions = spec.mostrarSpecs(conexionF, placa);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddTraslado(FormCollection formCollection)
        {
            //Permite trasladar funcionarios con todos sus activos

            Traslado tras = new Traslado();

            //idfuncionariooculto
            //oficinadestinofuncionario
            //numboletaTraslado
            int _id = Convert.ToInt32( formCollection["idfuncionariooculto"]);
            int _oficinadestinofuncionario = Convert.ToInt32(formCollection["oficinadestinofuncionario"]);
            string _numboletaTraslado = formCollection["numboletaTraslado"];

            string mensaje = tras.traslado_funcionario(_oficinadestinofuncionario, _id, _numboletaTraslado, conexionF);

            List<string> actions = new List<string>();

            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DatosFuncionario(string plaza)
        {
            //Muestra funcionarios filtrados por plaza

            DatosFuncionarios data = new DatosFuncionarios();
            List<DatosFuncionario> actions = data.mostrardatafun(plaza, conexionF);

            
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult SearchOficioPlacaDesecho(string placa)
        {
            //
            PlazaFuncionarios p = new PlazaFuncionarios();

            List<PlazaFuncionario> actions = p.damedatosfuncionario(conexionF, placa);
            
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult SearchPlacaActivoReparacion(string placa)
        {
            //
            ///PlazaFuncionarios p = new PlazaFuncionarios();
            DatosReparaciones data = new DatosReparaciones();

            List<DatosReparacion> actions = data.damedatatosactivo(conexionF, placa);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddReparacion(FormCollection formCollection)
        {
            //Ingresa activos en la tabla reparacion

            /// numboletaReparacion
            /// tplacaactivoreparacion
            /// fechareparacion
            /// treparacionesboleta
            /// tocultoidactivorepa
            /// 
            int variableid = Convert.ToInt32(Session["id_Usuario"]);
            Reparaciones reparar = new Reparaciones();
            //Some implement
            string _numboletaReparacion = formCollection["numboletaReparacion"].ToString();
            int _tocultoidactivorepa = Convert.ToInt16(formCollection["tocultoidactivorepa"]);
            string _fechareparacion = formCollection["fechareparacion"].ToString();
            string _treparacionesboleta = formCollection["treparacionesboleta"].ToString();        

            string mensaje = reparar.envioreparacion(_fechareparacion, _treparacionesboleta, _numboletaReparacion, variableid, _tocultoidactivorepa, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddPrestamo(FormCollection formCollection)
        {
            //Ingresa activos eb la tabla prestamo

            /// addfuncionariosprestamo
            /// addregionprestamo
            /// cargaoficinaprestamo
            /// ipequipoprestamo
            /// numboletaprestamo
            /// fechaprestamo
            /// lol2 --- este es el idactivo perdon por el nombre un error xD y no me la juego cambiarlo por aquello
            /// 
            Prestamo prestar = new Prestamo();
            //Some implement
            int _lol2 = Convert.ToInt16(formCollection["activosrgprestamo"]);
            int _addfuncionariosprestamo = Convert.ToInt16(formCollection["addfuncionariosprestamo"]);
            string _numboletaprestamo = formCollection["numboletaprestamo"].ToString();
            int _addregionprestamo = Convert.ToInt16(formCollection["addregionprestamo2"]);
            int _cargaoficinaprestamo = Convert.ToInt16(formCollection["cargaoficinaprestamo2"]);
            int variableid = Convert.ToInt32(Session["id_Usuario"]);
            string _fechaprestamo = formCollection["fechaprestamo"].ToString();
            int _ipequipoprestamo = Convert.ToInt32(formCollection["ipequipoprestamo"]);

            string mensaje = prestar.prestadmodeactivo(_lol2, _addfuncionariosprestamo, _numboletaprestamo, _addregionprestamo, _cargaoficinaprestamo, variableid, _fechaprestamo, _ipequipoprestamo, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DatosBoleta(string boleta)
        {
            DevBoletas bs = new DevBoletas();
            List<DevBoleta> actions = bs.dameinfoboleta(conexionF, boleta);
            

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult LocalActivos(string id)
        {
            Locals l = new Locals();
            List<Local> actions = l.dameinfoactivo(conexionF, id);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddDevolver(FormCollection formCollection)
        {
            //Permite devolver los activos que fueron prestados
            DevolverActivo devolver = new DevolverActivo();

            int variableid = Convert.ToInt32(Session["id_Usuario"]);

            string _devoplaca = formCollection["devoplaca"].ToString();
            int _devoidactivo = Convert.ToInt32(formCollection["devoidactivo"]);
            int _devoidip = Convert.ToInt32(formCollection["devoidip"]);
            string _numboletaDevolucion = formCollection["numboletaDevolucion"].ToString();


            string mensaje = devolver.Devolver_Activo(_numboletaDevolucion, _devoplaca, variableid, _devoidactivo, _devoidip, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DatosReparado(string placa)
        {
            //Muestra los dato de los activos que han sido reparados
            Reparados r = new Reparados();
            List<Reparado> actions = r.verdatosreparado(placa,conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult AddReparado(FormCollection formCollection)
        {
            //Ingresa activos reparados en la tabla reparados

            ///repocultoidactivo
            ///numboletaReparado
            ///fechareparado
            ///tobservacionesreparado
            ///
            ActivoReparado act = new ActivoReparado();
            
            int _repocultoidactivo = Convert.ToInt32(formCollection["repocultoidactivo"]);
            int variableid = Convert.ToInt32(Session["id_Usuario"]);
            string _tobservacionesreparado = formCollection["tobservacionesreparado"].ToString();
            string _fechareparado = formCollection["fechareparado"].ToString();
            string _numboletaReparado = formCollection["numboletaReparado"].ToString();


            string mensaje = act.RepararActivo(_repocultoidactivo, variableid, _tobservacionesreparado, _fechareparado, _numboletaReparado, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DatosPlacaReparado(string placa)
        {
            DatosPlacaReparados p = new DatosPlacaReparados();

            List<TablaReparado> actions = p.mostrarporplaca(placa, conexionF);

          
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult DatosBoletaReparado(string boleta)
        {
            DatosPlacaReparados p = new DatosPlacaReparados();

            List<TablaReparado> actions = p.mostrarporboleta(boleta, conexionF);


            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarTablaReparado()
        {
            TablaReparados repa = new TablaReparados();
            List<TablaReparado> actions = repa.mostrartodo(conexionF); 
            
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarTablaReparacion()
        {
            TablaReparacions repa = new TablaReparacions();
            List<TablaReparacion> actions = repa.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult DatosPlacaReparacion(string placa)
        {
            TablaReparacions repa = new TablaReparacions();
            List<TablaReparacion> actions = repa.mostrarxplaca(placa,conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult DatosBoletaReparacion(string boleta)
        {
            TablaReparacions repa = new TablaReparacions();
            List<TablaReparacion> actions = repa.mostrarxboleta(boleta, conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargaSeguro()
        {
            Seguros repa = new Seguros();
            List<Seguro> actions = repa.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult CargarTablaDesechoFinal()
        {
            DesechoFinals repa = new DesechoFinals();
            List<DesechoFinal> actions = repa.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarTablaModelo()
        {
            TablaModelos t = new TablaModelos();
            List<TablaModelo> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarNombreModelo(string nombremodelo)
        {
            TablaModelos t = new TablaModelos();
            List<TablaModelo> actions = t.mostrarxmodelo(conexionF,nombremodelo);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult DeleteTemporal()
        {
            DTemporal t = new DTemporal();
            t.eliminacion(conexionF);
            List<string> actions = new List<string>();

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarTablaDesecho()
        {
            TablaDesechos t = new TablaDesechos();
            List<TablaDesecho> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult PlacaDesecho(string placa)
        {
            TablaDesechos t = new TablaDesechos();
            List<TablaDesecho> actions = t.mostrarxplaca(placa,conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarTablaOficio()
        {
            TablaOficios t = new TablaOficios();
            List<TablaOficio> actions = t.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarTablaOficioBusqueda(string oficio)
        {
            TablaOficios t = new TablaOficios();
            List<TablaOficio> actions = t.mostrarxoficio(oficio,conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargaUsers()
        {
            DelUsers d = new DelUsers();
            List<DelUser> actions = d.mostrartodo(conexionF);

            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DELUser(int user) ////////ES ESTE 
        {
            // delproveedor
            Usuarios usuario = new Usuarios();


            string mensaje = usuario.OcultarUsuario(user, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DELModelo(string idmodelo)
        {
            Modelo mod = new Modelo();


            string mensaje = mod.EliminarModelo(idmodelo, conexionF);

            List<string> actions = new List<string>();
            actions.Add(mensaje);
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult CargarFamilia()
        {
            Fams f = new Fams();


            List<Fam> actions = f.mostrartodo(conexionF);
          
            return Json(actions.ToArray(), JsonRequestBehavior.AllowGet);
        }
    }
    }