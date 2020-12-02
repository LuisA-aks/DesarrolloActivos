using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Aseguramiento
    {
        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
       // public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";

        public string agregar_seguro(string nombreseguro, string empresaseguro, string telefonoseguro, string correoseguro, string direccionseguro, string descripcionseguro, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_IngresaSeguro @nombreseguro, @empresaseguro, @telefonoseguro, @correoseguro, @direccionseguro, @descripcionseguro";
                mycmd.Parameters.Add("@nombreseguro", SqlDbType.VarChar, 150).Value = nombreseguro;
                mycmd.Parameters.Add("@empresaseguro", SqlDbType.VarChar, 150).Value = empresaseguro;
                mycmd.Parameters.Add("@telefonoseguro", SqlDbType.VarChar, 150).Value = telefonoseguro;
                mycmd.Parameters.Add("@correoseguro", SqlDbType.VarChar, 150).Value = correoseguro;
                mycmd.Parameters.Add("@direccionseguro", SqlDbType.VarChar, 150).Value = direccionseguro;
                mycmd.Parameters.Add("@descripcionseguro", SqlDbType.VarChar, 150).Value = descripcionseguro;

                SqlDataReader rdr = mycmd.ExecuteReader();

                while (rdr.Read())
                {
                    mensaje = rdr["Mensaje"].ToString();
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
            return mensaje;
        }
    }
}