using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class TablaReparados
    {
        public List<TablaReparado> mostrartodo(string conexionF)
        {
            List<TablaReparado> l = new List<TablaReparado>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaActivosReparados";

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

                }


                return l;
            }
        }
    }
}