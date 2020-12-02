using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LoginLogoutMVC.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Index(string uname, string pass)
        {
            //Metodo que permite el login de usuarios
            String cpassword = "";
            String mycon = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2061;Integrated Security=True";
            //String mycon = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT701;Integrated Security=True";

            SqlConnection scon = new SqlConnection(mycon);
            String myquery = "select * from MUsuarios where nombre_Usuario='" + uname + "'";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = myquery;
            cmd.Connection = scon;
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = cmd;
            DataSet ds = new DataSet();
            da.Fill(ds);


            if (ds.Tables[0].Rows.Count > 0)
            {

                cpassword = ds.Tables[0].Rows[0]["contrasena_Usuario"].ToString();
                int iduser = Convert.ToInt32(ds.Tables[0].Rows[0]["id_Usuario"]);
                string estado = (ds.Tables[0].Rows[0]["Estado"]).ToString();
                string correo_Usuario = ds.Tables[0].Rows[0]["correo_Usuario"].ToString();
                string rol = ds.Tables[0].Rows[0]["id_Rol"].ToString();

                scon.Close();
                if (pass == cpassword & estado == "Activo")
                {
                    Session["nombre_Usuario"] = uname;
                    Session["id_Usuario"] = iduser;
                    Session["correo_Usuario"] = correo_Usuario;
                    Session["id_Rol"] = rol;
                    return RedirectToAction("UserHome", "DashBoar");
                }
                else
                {
                    ViewBag.loginresult = "Usuario o contraseña inválidos o el usuario está inactivo";
                    return View();
                }
            }
            else
            {
                ViewBag.loginresult = "Usuario o contraseña inválidos o el usuario está inactivo";
                return View();
            }


        }
    }
}