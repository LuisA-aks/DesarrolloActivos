using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Tabla6AS
    {
       // string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public List<Tabla6A> mostrarxcorreo(string correo, string conexionF)
        {
            List<Tabla6A> pro = new List<Tabla6A>();

         
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                string mensaje = "Erro";
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_ConsultaCorreoOficina @Correo";
                    mycmd.Parameters.Add("@Correo", SqlDbType.VarChar, 150).Value = correo;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        Tabla6A p = new Tabla6A()
                        {
                            Nombre = rdr["nombre_Oficina"].ToString(),//Nombre de la columna en bd
                            telefono = rdr["telefono_Oficina"].ToString(),
                            correo = rdr["correo_Oficina"].ToString(),
                            direccion = rdr["direccion_Oficina"].ToString(),
                            region = rdr["nombre_Region"].ToString()
                        };
                        pro.Add(p);


                        //while (rdr.Read())
                        //{
                        //    mensaje = rdr["Mensaje"].ToString();
                        //    //reto codigo


                        //}

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

        public List<Tabla6A> mostrarxregion(string region, string conexionF)
        {
            List<Tabla6A> pro = new List<Tabla6A>();
           
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaOficina2 @Region";
                mycmd.Parameters.Add("@Region", SqlDbType.VarChar, 150).Value = region;

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Tabla6A p = new Tabla6A()
                    {
                        Nombre = rdr["nombre_Oficina"].ToString(),//Nombre de la columna en bd
                        telefono = rdr["telefono_Oficina"].ToString(),
                        correo = rdr["correo_Oficina"].ToString(),
                        direccion = rdr["direccion_Oficina"].ToString(),
                        region = rdr["nombre_Region"].ToString()
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

        public List<Tabla6A> mostrartodo(string conexionF)
        {
            List<Tabla6A> pro = new List<Tabla6A>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaTodasOficinas";
              

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Tabla6A p = new Tabla6A()
                    {
                        Nombre = rdr["nombre_Oficina"].ToString(),//Nombre de la columna en bd
                        telefono = rdr["telefono_Oficina"].ToString(),
                        correo = rdr["correo_Oficina"].ToString(),
                        direccion = rdr["direccion_Oficina"].ToString(),
                        region = rdr["nombre_Region"].ToString()
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