using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Usuarios
    {
        public string NombreUsuario { get; set; }
        public string ApellidoUsuario { get; set; }
        public string CorreoUsuario { get; set; }
        public string ContrasenaUsuario { get; set; }
        public int IdRegion { get; set; }
        public int IdRol { get; set; }


        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";

        public string agregarusuario(string nombreusuario, string apellidousuario, string correousuario, string contrasenausuario, int regionusuario, int rolusuario, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute Sp_IngresaUsuario @nombreusuario, @apellidousuario, @correousuario, @contrasenausuario,@region,@rol";
                mycmd.Parameters.Add("@nombreusuario", SqlDbType.VarChar, 150).Value = nombreusuario;
                mycmd.Parameters.Add("@apellidousuario", SqlDbType.VarChar, 150).Value = apellidousuario;
                mycmd.Parameters.Add("@correousuario", SqlDbType.VarChar, 150).Value = correousuario;
                mycmd.Parameters.Add("@contrasenausuario", SqlDbType.VarChar, 150).Value = contrasenausuario;
                mycmd.Parameters.Add("@region", SqlDbType.Int, 150).Value = regionusuario;
                mycmd.Parameters.Add("@rol", SqlDbType.Int, 150).Value = rolusuario;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    mensaje = rdr["Mensaje"].ToString();
                    //reto codigo


                }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return mensaje;
        }

        public string OcultarUsuario(int user, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_OcultarUsuario @iduser";
                    mycmd.Parameters.Add("@iduser", SqlDbType.Int, 150).Value = user;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        mensaje = rdr["Mensaje"].ToString();
                        //reto codigo
                    }
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }
            }
            return mensaje;
        }
    }
}