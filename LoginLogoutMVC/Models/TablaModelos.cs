using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class TablaModelos
    {
        public List<TablaModelo> mostrartodo(string conexionF)
        {
            List<TablaModelo> l = new List<TablaModelo>();
           // string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT4333;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaModeloTabla";
                ///mycmd.Parameters.Add("@Oficina", SqlDbType.Int, 150).Value = Convert.ToInt16(oficina);

                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {
                    TablaModelo f = new TablaModelo()
                    {
                        id_Modelo = rdrm["id_Modelo"].ToString(),
                        nombre_modelo = rdrm["nombre_modelo"].ToString()
                    };
                    l.Add(f);

                }


                return l;
            }
        }

        public List<TablaModelo> mostrarxmodelo(string conexionF, string nombremodelo)
        {
            List<TablaModelo> l = new List<TablaModelo>();
            // string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT4333;Integrated Security=True";
            //string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_CargaModeloTablaPorNombre @nombre";
                mycmd.Parameters.Add("@nombre", SqlDbType.VarChar, 150).Value = nombremodelo;

                SqlDataReader rdrm = mycmd.ExecuteReader();
                while (rdrm.Read())
                {
                    TablaModelo f = new TablaModelo()
                    {
                        id_Modelo = rdrm["id_Modelo"].ToString(),
                        nombre_modelo = rdrm["nombre_modelo"].ToString()
                    };
                    l.Add(f);

                }


                return l;
            }
        }
    }
}