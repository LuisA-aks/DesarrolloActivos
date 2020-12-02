using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class TablaReparacions
    {
        public List<TablaReparacion> mostrartodo(string conexionF)
        {
            List<TablaReparacion> l = new List<TablaReparacion>();
           
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try
                {
                    myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaParaReparar";


                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {

                    TablaReparacion tg = new TablaReparacion()
                    {
                        numeroboleta = rdrm["numeroboleta"].ToString(),
                        FechaIngreso = rdrm["FechaIngreso"].ToString(),
                        ObservacionReparacion = rdrm["ObservacionesReparacion"].ToString(),
                        placa_Activo = rdrm["placa_Activo"].ToString(),
                        descripcion = rdrm["descripcion"].ToString(),
                    };
                    l.Add(tg);

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


            return l;
            }
        }

        public List<TablaReparacion> mostrarxplaca(string placa, string conexionF)
        {
            List<TablaReparacion> l = new List<TablaReparacion>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaParaRepararporPlaca @placa";
                mycmd.Parameters.Add("@placa", SqlDbType.VarChar, 150).Value = placa;


                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {

                    TablaReparacion tg = new TablaReparacion()
                    {
                        numeroboleta = rdrm["numeroBoleta"].ToString(),
                        FechaIngreso = rdrm["FechaIngreso"].ToString(),
                        ObservacionReparacion = rdrm["ObservacionesReparacion"].ToString(),
                        placa_Activo = rdrm["placa_Activo"].ToString(),
                        descripcion = rdrm["descripcion"].ToString(),
                    };
                    l.Add(tg);

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


                return l;
            }
        }

        public List<TablaReparacion> mostrarxboleta(string boleta, string conexionF)
        {
            List<TablaReparacion> l = new List<TablaReparacion>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaParaRepararporBoleta @boleta";
                mycmd.Parameters.Add("@boleta", SqlDbType.VarChar, 150).Value = boleta;


                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {

                    TablaReparacion tg = new TablaReparacion()
                    {
                        numeroboleta = rdrm["numeroboleta"].ToString(),
                        FechaIngreso = rdrm["FechaIngreso"].ToString(),
                        ObservacionReparacion = rdrm["ObservacionesReparacion"].ToString(),
                        placa_Activo = rdrm["placa_Activo"].ToString(),
                        descripcion = rdrm["descripcion"].ToString(),
                    };
                    l.Add(tg);

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


                return l;
            }
        }
    }
}