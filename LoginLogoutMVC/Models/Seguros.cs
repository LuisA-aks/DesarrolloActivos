using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Seguros
    {
        public List<Seguro> mostrartodo(string conexionF)
        {
            List<Seguro> l = new List<Seguro>();

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaSeguroIdnombre";


                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {
                    Seguro f = new Seguro()
                    {
                        id_seguro = rdrm["id_aseguramiento"].ToString(),
                        nombre_seguro = rdrm["nombre_seguro"].ToString()
                    };
                    l.Add(f);

                }


                return l;
            }
        }
    }
}