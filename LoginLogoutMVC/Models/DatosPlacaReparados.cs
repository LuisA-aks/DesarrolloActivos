using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class DatosPlacaReparados
    {
        public List<TablaReparado> mostrarporplaca(string placa, string conexionF)
        {
            List<TablaReparado> l = new List<TablaReparado>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaActivosReparadosporPlaca @placa";
                    mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;

                    SqlDataReader rdrm = mycmd.ExecuteReader();
                    while (rdrm.Read())
                    {

                        TablaReparado tg = new TablaReparado()
                        {
                            numeroboleta = rdrm["numeroboleta"].ToString(),
                            Fecha_Reparacion = rdrm["Fecha_Reparacion"].ToString(),
                            Reparacion = rdrm["Reparacion"].ToString(),
                            placa_Activo = rdrm["placa_Activo"].ToString(),
                            descripcion = rdrm["descripcion"].ToString(),
                        };
                        l.Add(tg);

                    };
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }

                return l;

            }
        }

        public List<TablaReparado> mostrarporboleta(string boleta, string conexionF)
        {
            List<TablaReparado> l = new List<TablaReparado>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                    var mycmd = myConn.CreateCommand();
                    mycmd.CommandText = "Execute SP_CargaActivosReparadosporBoleta @boleta";
                    mycmd.Parameters.Add("@boleta", SqlDbType.VarChar, 150).Value = boleta;

                    SqlDataReader rdrm = mycmd.ExecuteReader();
                    while (rdrm.Read())
                    {

                        TablaReparado tg = new TablaReparado()
                        {
                            numeroboleta = rdrm["numeroboleta"].ToString(),
                            Fecha_Reparacion = rdrm["Fecha_Reparacion"].ToString(),
                            Reparacion = rdrm["Reparacion"].ToString(),
                            placa_Activo = rdrm["placa_Activo"].ToString(),
                            descripcion = rdrm["descripcion"].ToString(),
                        };
                        l.Add(tg);

                    };
                }
                catch (Exception EX)
                {
                    EX.GetBaseException();
                }
                finally
                {
                    myConn.Close();
                }


                return l;
            }
        }
    }
}