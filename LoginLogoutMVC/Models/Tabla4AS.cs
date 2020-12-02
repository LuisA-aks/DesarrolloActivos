using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla4AS
    {
        public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT3335;Integrated Security=True";

        public List<Tabla4A> mostrarxfecha(string fecha, string conexionF)
        {
            List<Tabla4A> pro = new List<Tabla4A>();

          

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaBodegaDesechofecha @fecha";
                mycmd.Parameters.Add("@fecha", SqlDbType.VarChar, 150).Value = (fecha);

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Tabla4A p = new Tabla4A()
                    {
                        fecha = rdr["fecha_BodegaDesecho"].ToString(),
                        observaciones = rdr["observaciones_BodegaDesecho"].ToString(),
                        usuario = rdr["nombre_Usuario"].ToString(),
                        activoplaca = rdr["placa_Activo"].ToString(),
                        activonombre = rdr["descripcion"].ToString(),
                    };

                    pro.Add(p);
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


                return pro;
            }
        }

        public List<Usuario> mostrarxcorreo(string correo, string conexionF)
        {
            List<Usuario> pro = new List<Usuario>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaUsuariosPorCorreo @correo";
                    mycmd.Parameters.Add("@correo", SqlDbType.VarChar, 150).Value = correo;


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Usuario p = new Usuario()
                        {
                            nombre_usuario = rdr["nombre_Usuario"].ToString(),
                            apellido_usuario = rdr["Apellido_Usuario"].ToString(),
                            correo = rdr["correo_Usuario"].ToString(),
                            rol = rdr["nombre_rol"].ToString(),
                        };
                        pro.Add(p);
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


            return pro;
        }

        public List<Usuario> mostrartodo(string conexionF)
        {
            List<Usuario> pro = new List<Usuario>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaUsuariosTodos";

                

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                       Usuario p = new Usuario()
                        {
                            nombre_usuario= rdr["nombre_Usuario"].ToString(),
                            apellido_usuario= rdr["Apellido_Usuario"].ToString(),
                            correo= rdr["correo_Usuario"].ToString(),
                            rol= rdr["nombre_rol"].ToString(),
                        };
                        pro.Add(p);
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


            return pro;
        }

        public List<Usuario> mostrarxrol(string id, string conexionF)
        {
            List<Usuario> pro = new List<Usuario>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaUsuariosPorRol @id";
                    mycmd.Parameters.Add("@id", SqlDbType.Int, 150).Value = Convert.ToInt16(id);


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Usuario p = new Usuario()
                        {
                            nombre_usuario = rdr["nombre_Usuario"].ToString(),
                            apellido_usuario = rdr["Apellido_Usuario"].ToString(),
                            correo = rdr["correo_Usuario"].ToString(),
                            rol = rdr["nombre_rol"].ToString(),
                        };
                        pro.Add(p);
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


            return pro;
        }
    }
}