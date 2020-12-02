using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LoginLogoutMVC.Models
{
    public class Bodegas
    {
       // public string connString = "Data Source=DESKTOP-LS14HCO;Initial Catalog=DT2021;Integrated Security=True";

        public List<Bodega> mostrarbodegas(string conexionF)
        {
            List<Bodega> pro = new List<Bodega>();
            using (SqlConnection myConn = new SqlConnection(conexionF))
            {
                try { 
                myConn.Open();
                var mycmd = myConn.CreateCommand();
                mycmd.CommandText = "Execute SP_Bodegas";

                SqlDataReader rdr = mycmd.ExecuteReader();
                while (rdr.Read())
                {

                    Bodega p = new Bodega()
                    {
                        id_Oficina = Convert.ToInt16(rdr["id_Oficina"]),
                        nombre_Oficina = rdr["nombre_Oficina"].ToString()

                    };
                    pro.Add(p);
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