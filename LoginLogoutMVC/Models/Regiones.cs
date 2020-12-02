using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Regiones
    {
        public string NombreRegion { get; set; }
        public string DireccionRegion { get; set; }
        public string ObservacionesRegion { get; set; }


        //public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";
        //public string connString = "Data Source=DESKTOP-8CV6UC2;Initial Catalog=DT4333;Integrated Security=True";


        public  List<Region> mostrar_Regiones(string conexionF)
        {
            string mensaje = "";
            List<Region> l = new List<Region>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_Regiones";


                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {
                    Region r = new Region()
                    {
                        id_Region = Convert.ToInt16(rdr["id_Region"]),
                        nombre_Region = rdr["nombre_Region"].ToString()
                    }; 
                    l.Add(r);
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
            return l;
        }
    }
}