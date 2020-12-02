using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Region
    {
        public int id_Region { get; set; }
        public string nombre_Region { get; set; }



        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";

        public string agregar_region(string nombreregion, string direccionregion, string correoregion, string telefonoregion, string observaciones, string conexionF)
        {
            string mensaje = "";

            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_IngresarRegion @nombreregion, @direccionregion, @correoregion, @telefonoregion, @observaciones";
                mycmd.Parameters.Add("@nombreregion", SqlDbType.VarChar, 150).Value = nombreregion;
                mycmd.Parameters.Add("@direccionregion", SqlDbType.VarChar, 150).Value = direccionregion;
                mycmd.Parameters.Add("@correoregion", SqlDbType.VarChar, 150).Value = correoregion;
                mycmd.Parameters.Add("@telefonoregion", SqlDbType.VarChar, 150).Value = telefonoregion;
                mycmd.Parameters.Add("@observaciones", SqlDbType.VarChar, 150).Value = observaciones;

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