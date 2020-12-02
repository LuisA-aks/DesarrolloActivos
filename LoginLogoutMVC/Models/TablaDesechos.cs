using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class TablaDesechos
    {
        public List<TablaDesecho> mostrartodo(string conexionF)
        {
            List<TablaDesecho> pro = new List<TablaDesecho>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaDesechados";


                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        TablaDesecho p = new TablaDesecho()
                        {
                            fecha_BodegaTotalConsultas = rdr["fecha_BodegaTotalConsultas"].ToString(),
                            numeroBoleta = rdr["numeroBoleta"].ToString(),
                            observaciones_BodegaTotalConsultas = rdr["observaciones_BodegaTotalConsultas"].ToString(),
                            placa_Activo = rdr["placa_Activo"].ToString(),
                            descripcion = rdr["descripcion"].ToString(),
                            nombre_Usuario = rdr["nombre_Usuario"].ToString(),

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

        public List<TablaDesecho> mostrarxplaca(string placa, string conexionF)
        {
            List<TablaDesecho> pro = new List<TablaDesecho>();



            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaDesechadosporplaca @placa ";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        TablaDesecho p = new TablaDesecho()
                        {
                            fecha_BodegaTotalConsultas = rdr["fecha_BodegaTotalConsultas"].ToString(),
                            numeroBoleta = rdr["numeroBoleta"].ToString(),
                            observaciones_BodegaTotalConsultas = rdr["observaciones_BodegaTotalConsultas"].ToString(),
                            placa_Activo = rdr["placa_Activo"].ToString(),
                            descripcion = rdr["descripcion"].ToString(),
                            nombre_Usuario = rdr["nombre_Usuario"].ToString(),

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