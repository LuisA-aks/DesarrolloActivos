using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DesechoFinals
    {
        public List<DesechoFinal> mostrartodo(string conexionF)
        {
            List<DesechoFinal> pro = new List<DesechoFinal>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaDesechoFinal";
                  

                    SqlDataReader rdr = mycmd.ExecuteReader();
                    while (rdr.Read())
                    {

                        DesechoFinal d = new DesechoFinal()
                        {
                            fecha_BodegaDesechoTemporal= rdr["fecha_BodegaDesechoTemporal"].ToString(),
                            observaciones_BodegaDesechoTemporal= rdr["observaciones_BodegaDesechoTemporal"].ToString(),
                            numeroBoleta= rdr["numeroBoleta"].ToString(),
                            nombre_Usuario= rdr["nombre_Usuario"].ToString(),
                            placa_Activo= rdr["placa_Activo"].ToString(),
                        };
                        pro.Add(d);
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
            return pro;
        }
    }
}