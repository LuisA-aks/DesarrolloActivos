using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class TablaOficios
    {
        public List<TablaOficio> mostrartodo(string conexionF)
        {
            List<TablaOficio> pro = new List<TablaOficio>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaOficios";

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        TablaOficio p = new TablaOficio()
                        {
                            numero_Oficio = rdr["numero_Oficio"].ToString(),
                            nombre_Oficina = rdr["nombre_Oficina"].ToString(),
                            numero_activo = rdr["numero_activo"].ToString(),
                            Tipo_Equipo = rdr["Tipo_Equipo"].ToString(),
                            Modelo = rdr["Modelo"].ToString(),
                            Descripcion = rdr["Descripcion"].ToString(),

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

        public List<TablaOficio> mostrarxoficio(string oficio, string conexionF)
        {
            List<TablaOficio> pro = new List<TablaOficio>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaOficiosporOficio @oficio";
                    mycmd.Parameters.Add("@oficio", SqlDbType.VarChar, 150).Value = oficio;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        TablaOficio p = new TablaOficio()
                        {
                            numero_Oficio = rdr["numero_Oficio"].ToString(),
                            nombre_Oficina = rdr["nombre_Oficina"].ToString(),
                            numero_activo = rdr["numero_activo"].ToString(),
                            Tipo_Equipo = rdr["Tipo_Equipo"].ToString(),
                            Modelo = rdr["Modelo"].ToString(),
                            Descripcion = rdr["Descripcion"].ToString(),

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
    }
}